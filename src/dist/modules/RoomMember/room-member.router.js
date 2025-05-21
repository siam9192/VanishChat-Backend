"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const room_member_controller_1 = __importDefault(require("./room-member.controller"));
const router = (0, express_1.Router)();
router.get("/:id/room", (0, auth_1.default)(), room_member_controller_1.default.getRoomMembers);
const roomMemberRouter = router;
exports.default = roomMemberRouter;
