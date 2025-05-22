import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import http from 'http';
import { sendErrorResponse } from './utils/response';
import routes from './routes';
import { Server } from 'socket.io';
import jwt, { JwtPayload } from 'jsonwebtoken';
import envConfig from './config/env.config';
import { IAuthUser } from './utils/type';
import prisma from './prisma';
import { RoomMemberRole, RoomMemberStatus } from '../../generated/prisma';
const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));
export const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:5173'],
    credentials: true,
  },
});

app.use(routes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  sendErrorResponse(res, {
    statusCode: err.statusCode || 500,
    message: err.message || 'Something went wrong',
  });
});

app.use((req, res) => {
  if (req.url === '/') {
    res.status(200).json({
      message: 'Hey welcome to the vanish chat  server',
    });
  } else {
    res.status(404).json({
      success: false,
      statusCode: 404,
      message: 'Not Found',
    });
  }
});

const roomOwners = new Map(); // roomName -> ownerSocketId
const joinRequests =  new Map()

io.use((socket, next) => {
  const token = socket.handshake.auth.accessToken;

  // checking if the given token is valid
  let decoded;

  try {
    decoded = jwt.verify(token, envConfig.jwt.userIdTokenSecret as string) as IAuthUser &
      JwtPayload;
  } catch (error) {}
  socket.handshake.auth.user = decoded;

  socket.data = decoded;
  next();
});

io.on('connection', (socket) => {
  console.log('connected', socket.id);
  const user = socket.data as IAuthUser;

  socket.on('seeking-access', async (payload) => {
    const roomCode = await payload.roomCode;

    const member = await prisma.roomMember.findFirst({
      where: {
        userId: user.id,
        room: {
          code: roomCode,
        },
        status:{
          notIn:['Removed','Leaved']
        }
      },
      orderBy:{
        joinedAt:'desc'
      }
    });
   console.log("seek-access",member)
    socket.emit('seeking-access-response', { status: member ? true : false });
  });

  socket.on('disconnect', () => {
    console.log('disconnected');
  });

  socket.on('join_room', async (payload: { code: string }) => {
    try {
      const roomName = `room_${payload.code}`;
      socket.join(roomName);

   const updateStatus =    await prisma.roomMember.updateMany({
        where: {
          userId: user.id,
          room: {
            code: payload.code,
          },
          status:{
           in:["Active","Inactive"]
          }
        },
        data: {
          status: 'Active',
          socketId:socket.id
        },
      });

      const joinMember = await prisma.roomMember.findFirst({
        where: {
          userId: user.id,
          room: {
            code: payload.code,
          },
          status:{
              notIn:['Removed','Leaved']
          }
        },
        include: {
          avatar: true,
        },
      });
      if (joinMember) {
        // socket.to(`room-${payload.code}`).emit('new-join', joinMember);
        if (joinMember.role === 'Owner') {
          roomOwners.set(roomName, socket.id);
        }
        socket.to(roomName).emit('new_join', joinMember);
      } else {
        console.warn('No matching room member found');
      }
    } catch (error) {
      console.error('Error in join-room handler:', error);
      socket.emit('error', { message: 'Failed to join room' });
    }
  });

  socket.on(
    'join-request',
    async (payload: { code: string; name: string; avatarId: number; isAnonymous: boolean }) => {
      const roomCode = payload.code;
      const room = await prisma.room.findUnique({
        where: {
          code: roomCode,
        },
      });
      const isRoomMember = await prisma.roomMember.findFirst({
        where: {
          room: {
            code: roomCode,
          },
          userId: user.id,
          status:{
           in:["Active","Inactive"]
          }
        },
      });
      if (isRoomMember || !room) {
        socket.emit('error', 'Already exist');
      } else {
        const memberData: Record<string, unknown> = {
          userId: user.id,
          roomId: room.id,
          avatarId: payload.avatarId,
        };

        if (payload.isAnonymous) {
          memberData.isAnonymous = true;
        } else {
          memberData.name = payload.name;
        }

        // const created = await prisma.roomMember.create({
        //   data:memberData as any
        // })
        const created = await prisma.roomJoinRequest.create({
          data: memberData as any,
          include:{
            avatar:true
          }
        });

        if (!created) {
          socket.emit('error', 'Something went wrong');
        } else {
          const roomName = `room_${payload.code}`;
              
          joinRequests.set(created.id,{
          socId:socket.id,
          userId:user.id
          })
          // socket.emit("join-request-response",{status:true})
          io.to(roomOwners.get(roomName)).emit('new-join-request', created);
        }
      }
    }
  );
  socket.on('join-request-approve',async(id:number)=>{
    const socId  =  joinRequests.get(id).socId
    const update   = await prisma.roomJoinRequest.update({
      where:{
        id
      },
      data:{
        status:"Approve"
      },
      include:{
        room:true
      }
    })

       const user: Record<string, unknown> = {
        userId:update.userId,
        isAnonymous:update.isAnonymous,
        avatarId: update.avatarId,
        role:RoomMemberRole.Member
      };

      if (!update.isAnonymous) {
        user.name = update.name;

      }
    await prisma.roomMember.create({
      data:{
        roomId:update.roomId,
        ...user
      } as any
    })
    const roomName = `room_${update.room.code}`;

    const owner =  roomOwners.get(roomName)
   
     io.to(owner).emit("join-request-response-client",id)
     io.to(socId).emit('join-request-response',{status:true})
  })
   socket.on('join-request-decline',async(id:number)=>{
    const socId  =  joinRequests.get(id)?.socId
    const update =  await prisma.roomJoinRequest.update({
      where:{
        id
      },
      data:{
        status:"Declined"
      },
     include:{
      room:true
     }
    })
     const roomName = `room_${update.room.code}`;

    const owner =  roomOwners.get(roomName)
   
    io.to(owner).emit("join-request-response-client",id)
    if(socId){
     io.to(socId).emit('join-request-response',{status:false})
   }
  })
  socket.on('member-remove',async(id:number)=>{
  
    const member = await prisma.roomMember.findFirst({
      where:{
        id,
        status:{
          in:['Active','Inactive']
        }
      },
      include:{
        room:true
      }
    })
    if(!member) return
   const updated =  await prisma.roomMember.update({ where:{
        id
      },
     data:{
       status:RoomMemberStatus.Removed
     }
    })
    

    
     const roomName = `room_${member.room.code}`;
     const memberSocket = io.sockets.sockets.get(member.socketId!)
     
   if(memberSocket){
      memberSocket?.leave(roomName)
   }
  

     io.to(member?.socketId!).emit("remove",member?.id)
     io.to(roomName).emit('member-removed',member.id)
  })

});

export default app;
