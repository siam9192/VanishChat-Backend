import { Router } from "express";
import userController from "./user.controller";

const router = Router()


router.get('/init',userController.initUser)


const UserRouter = router


export default UserRouter
