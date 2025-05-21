import { Request } from "express"
import jwt, { JwtPayload } from "jsonwebtoken";
import envConfig from "../../config/env.config";
import { IAuthUser } from "../../utils/type";
import crypto from 'crypto'
import AppError from "../../Errors/AppError";
import httpStatus from "../../shared/http-status";
class UserService {
  async userInit (req:Request){
     const token = req.headers.authorization?.replace('Bearer ', '');
      let decoded;
      let isValidTokenExist;
   if(token){     
    try {
      decoded = jwt.verify(token as string, envConfig.jwt.userIdTokenSecret as string) as IAuthUser &
        JwtPayload;
      isValidTokenExist = true
    } catch (error) {
     isValidTokenExist =  false
    }
   }

  if(!isValidTokenExist){
     const uuid = crypto.randomUUID().replace(/-/g, '');
  
   const tokenPayload = {
    id:uuid
   }
   const  generatedToken =  jwt.sign(tokenPayload,envConfig.jwt.userIdTokenSecret as string,{
    expiresIn:"30d"
   })
   return {generatedToken}
  }
  else {
    throw new AppError(httpStatus.FORBIDDEN,"not possible")
  }
  }

}


export default new UserService()