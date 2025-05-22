import { RoomMemberStatus } from '../../../../generated/prisma';
import AppError from '../../Errors/AppError';
import prisma from '../../prisma';
import httpStatus from '../../shared/http-status';
import { IAuthUser } from '../../utils/type';

class RoomMemberService {
  async getRoomMembersFromDB(authUser: IAuthUser, id: string | number) {
    id = Number(id);
    const isMemberExist = await prisma.roomMember.findFirst({
      where: {
        userId: authUser.id,
        roomId: id,
        status:{
          notIn:[ RoomMemberStatus.Removed,RoomMemberStatus.Leaved]
        },
      },
    });
    if (!isMemberExist) {
      throw new AppError(httpStatus.FORBIDDEN, 'Only room owner can access this');
    }

   const result =  await prisma.roomMember.findMany({
      where: {
        roomId: id,
          status:{
          notIn:[ RoomMemberStatus.Removed,RoomMemberStatus.Leaved]
        },
      },
      
    });

    console.log(result)
    return result
  }
}

export default new RoomMemberService();
