import { RoomJoinRequestStatus } from "../../../../generated/prisma"
import { IRoom } from "../Room/room.interface"

export interface IRoomJoinRequest {
  id:number
  userId:string
  roomId:number
  room:IRoom
  status:RoomJoinRequestStatus
  createdAt:Date
  updatedAt:Date
}
