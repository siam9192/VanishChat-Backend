import { AvatarStatus } from "../../../../generated/prisma";
import AppError from "../../Errors/AppError";
import prisma from "../../prisma";
import httpStatus from "../../shared/http-status";
import { ICreateAvatarPayload, ICreateManyAvatarPayload } from "./avatar.interface";

class AvatarService {
    async createAvatarIntoDB (payload:ICreateAvatarPayload) {
      return await prisma.avatar.create({
        data:payload
      })
    }

     async createManyAvatarIntoDB (payload:ICreateManyAvatarPayload) {
      return await prisma.avatar.createMany({
        data:payload.urls.map(_=>({url:_}))
      })
    }
    
    async getAllAvatarFromDB (){
        return await prisma.avatar.findMany({
        where:{
            status:AvatarStatus.Active
        }
        });
    }

    async getAvatarByIdFromDB (id:string|number){
        id = Number(id)
      const avatar = await prisma.avatar.findUnique({
        where:{
            id
        }
      })
      if(!avatar){
        throw new AppError(httpStatus.NOT_FOUND,"Avatar not found")
      }
      return  avatar
    }

}


export default new AvatarService()



