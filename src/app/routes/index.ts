import { IRouter, Router } from 'express';
import avatarRouter from '../modules/avatar/avatar.route';
import roomPhotoRouter from '../modules/RoomPhoto/room-photo.route';
import roomRouter from '../modules/Room/room.route';
import UserRouter from '../modules/user/user.controller.route';
import roomJoinRequestRouter from '../modules/RoomJoinRequest/room-join-request.route';
import roomMemberRouter from '../modules/RoomMember/room-member.router';
import messageRouter from '../modules/Message/message.route';

type TModuleRoutes = { path: string; router: IRouter }[];
const router = Router();
const moduleRoutes: TModuleRoutes = [
  {
    path: '/avatars',
    router: avatarRouter,
  },
  {
    path: '/room-photos',
    router: roomPhotoRouter,
  },
  {
    path: '/rooms',
    router: roomRouter,
  },
  {
    path: '/room-join-requests',
    router: roomJoinRequestRouter,
  },
  {
    path: '/room-members',
    router: roomMemberRouter,
  },
  {
    path: '/messages',
    router: messageRouter,
  },
  {
    path: '/users',
    router: UserRouter,
  },
];

const routes = moduleRoutes.map((route) => router.use(route.path, route.router));

export default routes;
