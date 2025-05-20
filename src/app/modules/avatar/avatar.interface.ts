import { AvatarStatus } from '../../../../generated/prisma';
import { IRoomMember } from '../RoomMember/room-member.interface';

export interface IAvatar {
  id: number;
  url: string;
  status: AvatarStatus;
  members: IRoomMember[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateAvatarPayload {
  url: string;
}

export interface ICreateManyAvatarPayload {
  urls: string[];
}
