"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const room_join_request_controller_1 = __importDefault(require("./room-join-request.controller"));
const router = (0, express_1.Router)();
router.get('/:id/room', room_join_request_controller_1.default.getRoomJoinRequests);
const roomJoinRequestRouter = router;
exports.default = roomJoinRequestRouter;
