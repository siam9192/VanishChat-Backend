import { RoomStatus } from "../../../../generated/prisma"
import { IMessage } from "../Message/message.interface"
import { IRoomJoinRequest } from "../RoomJoinRequest/room-join-request.interface"
import { IRoomMember } from "../RoomMember/room-member.interface"
import { IRoomPhoto } from "../RoomPhoto/room-photo.interface"

export interface IRoom {
  id: number
  code: string
  name:string
  photoId :number 
  photo :IRoomPhoto
  members:IRoomMember[]
  joinRequests :IRoomJoinRequest[]
  messages: IMessage[]
  status:RoomStatus
  createdAt :Date
  updatedAt :Date
}
