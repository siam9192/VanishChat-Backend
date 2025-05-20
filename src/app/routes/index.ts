import { IRouter, Router } from "express";
import avatarRouter from "../modules/avatar/avatar.route";
import roomPhotoRouter from "../modules/RoomPhoto/room-photo.route";

type TModuleRoutes = { path: string; router: IRouter }[];
const router = Router();
const moduleRoutes: TModuleRoutes = [
    {
        path:'/avatars',
        router:avatarRouter
    },
     {
        path:'/room-photos',
        router:roomPhotoRouter
    }
]

const routes = moduleRoutes.map((route) => router.use(route.path, route.router));

export default routes;
