import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import roomValidation from "./room.validation";
import roomController from "./room.controller";

const router =  Router()



router.post('/',auth(),validateRequest(roomValidation.createRoom),roomController.createRoom)

router.get('/public/:code',roomController.getPublicRoomByCode)

router.get('/:code',auth(),roomController.getRoomById)




const roomRouter =  router


export default roomRouter