import { Router } from "express";
import auth from "../../middlewares/auth";
import messageController from "./message.controller";

const router =  Router()


router.get('/:code/room',auth(),messageController.getRoomMessages)



const messageRouter = router


export default messageRouter


