"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const message_controller_1 = __importDefault(require("./message.controller"));
const router = (0, express_1.Router)();
router.get('/:id/room', (0, auth_1.default)(), message_controller_1.default.getRoomMessages);
const messageRouter = router;
exports.default = messageRouter;
