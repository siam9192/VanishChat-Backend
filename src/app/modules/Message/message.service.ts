import { RoomMemberStatus } from '../../../../generated/prisma';
import AppError from '../../Errors/AppError';
import prisma from '../../prisma';
import httpStatus from '../../shared/http-status';
import { IAuthUser } from '../../utils/type';

class MessageService {
  async getRoomMessagesFromDB(authUser: IAuthUser, roomCode: string) {
    const isMemberExist = await prisma.roomMember.findFirst({
      where: {
        userId: authUser.id,
        room: {
          code: roomCode,
        },
      },
    });

    if (!isMemberExist) {
      throw new AppError(httpStatus.FORBIDDEN, 'Only room owner can access this');
    }

    const data = await prisma.message.findMany({
      where: {
        room: {
          code: roomCode,
        },
      },
      include: {
        member: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    const results = data.map((_) => {
      const isOwn = _.member.userId === authUser.id;

      return {
        ..._,
        isOwn,
      };
    });
    return results;
  }
}

export default new MessageService();
