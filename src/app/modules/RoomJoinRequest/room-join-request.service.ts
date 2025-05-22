import { RoomJoinRequestStatus, RoomMemberRole, RoomStatus } from '../../../../generated/prisma';
import AppError from '../../Errors/AppError';
import prisma from '../../prisma';
import httpStatus from '../../shared/http-status';
import { IAuthUser } from '../../utils/type';

class RoomJoinRequestService {
  async getRoomJoinRequestsFromDB(authUser: IAuthUser, id: string | number) {
    id = Number(id);
    const room = await prisma.room.findUnique({
      where: {
        id,
        status: RoomStatus.Open,
      },
    });
    if (!room) throw new AppError(httpStatus.NOT_FOUND, 'Room not found');
    const member = await prisma.roomMember.findFirst({
      where: {
        roomId: id,
      },
    });

    if (!member) throw new AppError(httpStatus.FORBIDDEN, 'Not possible');

    if (member.role !== RoomMemberRole.Owner) {
      throw new AppError(httpStatus.FORBIDDEN, 'Only room owner can access this');
    }
    return await prisma.roomJoinRequest.findMany({
      where: {
        roomId: id,
        status: RoomJoinRequestStatus.Pending,
      },
    });
  }
}

export default new RoomJoinRequestService();
