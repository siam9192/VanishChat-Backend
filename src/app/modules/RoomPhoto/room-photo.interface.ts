import { RoomPhotoStatus } from '../../../../generated/prisma';
import { IRoom } from '../Room/room.interface';

export interface IRoomPhoto {
  id: string;
  url: string;
  status: RoomPhotoStatus;
  rooms: IRoom[];
  createdAt: Date;
  updatedAt: Date;
}

export interface ICreateRoomPhotoPayload {
  url: string;
}

export interface ICreateManyRoomPhotoPayload {
  urls: string[];
}
