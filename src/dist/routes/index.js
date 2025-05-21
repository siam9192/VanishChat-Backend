"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const avatar_route_1 = __importDefault(require("../modules/avatar/avatar.route"));
const room_photo_route_1 = __importDefault(require("../modules/RoomPhoto/room-photo.route"));
const room_route_1 = __importDefault(require("../modules/Room/room.route"));
const user_controller_route_1 = __importDefault(require("../modules/user/user.controller.route"));
const router = (0, express_1.Router)();
const moduleRoutes = [
    {
        path: '/avatars',
        router: avatar_route_1.default,
    },
    {
        path: '/room-photos',
        router: room_photo_route_1.default,
    },
    {
        path: '/rooms',
        router: room_route_1.default,
    },
    {
        path: '/users',
        router: user_controller_route_1.default
    }
];
const routes = moduleRoutes.map((route) => router.use(route.path, route.router));
exports.default = routes;
