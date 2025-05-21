import { Router } from "express";
import auth from "../../middlewares/auth";
import roomMemberController from "./room-member.controller";

const router = Router()

router.get("/:id/room",auth(),roomMemberController.getRoomMembers)


const roomMemberRouter =  router


export default roomMemberRouter