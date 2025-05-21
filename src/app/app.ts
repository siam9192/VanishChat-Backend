import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import http from 'http';
import { sendErrorResponse } from './utils/response';
import routes from './routes';
import { Server } from 'socket.io';
import jwt, { JwtPayload } from 'jsonwebtoken'
import envConfig from './config/env.config';
import { IAuthUser } from './utils/type';
import prisma from './prisma';
const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));
export const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    credentials:true
  },
});

app.use(routes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.log(err);
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

io.use((socket,next)=>{
  const token = socket.handshake.auth.accessToken
   // checking if the given token is valid
    let decoded;

    try {
      decoded = jwt.verify(token, envConfig.jwt.userIdTokenSecret as string) as IAuthUser &
        JwtPayload;
    } catch (error) {
     
    }
    socket.handshake.auth.user =  decoded
    socket.data =  decoded
    next()
 })

io.on('connection', (socket) => {
  const user =  socket.data as IAuthUser
  socket.on('seeking-access',async(payload)=>{
    const roomCode =  await payload.roomCode
     const member = await prisma.roomMember.findFirst({
      where:{
        userId:user.id,
        room:{
          code:roomCode
        }
      }
      })
   console.log(user.id)
      socket.emit('seeking-access-response',{status:member ? true : false})
 })

  socket.on('disconnect', () => {
   console.log('user disconnected');
  });

  socket.on('join-room',(payload:{code:string})=>{
    socket.join(`room-${payload.code}`)
    prisma.roomMember.updateMany({
    where:{
      userId:user.id,
      room:{
        code:payload.code
      }
    },
    data:{
      status:"Active"
    }
    })
  })

});

export default app;
