"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../../middlewares/auth"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const room_validation_1 = __importDefault(require("./room.validation"));
const room_controller_1 = __importDefault(require("./room.controller"));
const router = (0, express_1.Router)();
router.post('/', (0, auth_1.default)(), (0, validateRequest_1.default)(room_validation_1.default.createRoom), room_controller_1.default.createRoom);
router.get('/public/:code', room_controller_1.default.getPublicRoomByCode);
router.get('/:code', (0, auth_1.default)(), room_controller_1.default.getRoomById);
const roomRouter = router;
exports.default = roomRouter;
