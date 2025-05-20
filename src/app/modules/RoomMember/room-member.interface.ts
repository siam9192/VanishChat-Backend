import { Avatar, RoomMemberRole, RoomStatus } from '../../../../generated/prisma';
import { IRoom } from '../Room/room.interface';

export interface IRoomMember {
  id: number;
  roomId: number;
  room: IRoom;
  userId: string;
  name?: string;
  avatarId: number;
  avatar: Avatar;
  isAnonymous: boolean;
  role: RoomMemberRole;
  messages: string;
  status: RoomStatus;
  joinedAt: Date;
}
