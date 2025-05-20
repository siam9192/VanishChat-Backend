import { RoomPhotoStatus } from "../../../../generated/prisma";
import AppError from "../../Errors/AppError";
import prisma from "../../prisma";
import httpStatus from "../../shared/http-status";
import { ICreateManyRoomPhotoPayload, ICreateRoomPhotoPayload } from "./room-photo.interface";

class RoomPhotoService {
     async createRoomPhotoIntoDB (payload:ICreateRoomPhotoPayload) {
      return await prisma.roomPhoto.create({
        data:payload
      })
    }

     async createManyRoomPhotoIntoDB (payload:ICreateManyRoomPhotoPayload) {
      return await prisma.roomPhoto.createMany({
        data:payload.urls.map(_=>({url:_}))
      })
    }
    
    async getAllRoomPhotoFromDB (){
        return await prisma.roomPhoto.findMany({
        where:{
            status:RoomPhotoStatus.Active
        }
        });
    }

    async getRoomPhotoByIdFromDB (id:string|number){
        id = Number(id)
      const RoomPhoto = await prisma.roomPhoto.findUnique({
        where:{
            id
        }
      })
      if(!RoomPhoto){
        throw new AppError(httpStatus.NOT_FOUND,"RoomPhoto not found")
      }
      return  RoomPhoto
    }
}


export default new  RoomPhotoService()