import { Router } from "express";

import validateRequest from "../../middlewares/validateRequest";
import roomPhotoValidation from "./room-photo.validation";
import roomPhotoController from "./room-photo-controller";


const router = Router()


router.post('/',validateRequest(roomPhotoValidation.createRoomPhoto),roomPhotoController.createRoomPhoto);


router.post('/many',validateRequest(roomPhotoValidation.createManyRoomPhoto),roomPhotoController.createManyRoomPhoto);


router.get('/',roomPhotoController.getAllRoomPhoto)

router.get('/:id',roomPhotoController.getRoomPhotoById)




const roomPhotoRouter =  router

export default roomPhotoRouter