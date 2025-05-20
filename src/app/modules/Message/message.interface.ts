import { MessageContentType } from "../../../../generated/prisma"
import { IRoom } from "../Room/room.interface"
import { IRoomMember } from "../RoomMember/room-member.interface"

export interface IMessage {
    id:number
   roomId:number
   room:IRoom
   memberId:number
   member:IRoomMember
   text:string
   contentType:MessageContentType
   createdAt:Date
   updatedAt:Date
}