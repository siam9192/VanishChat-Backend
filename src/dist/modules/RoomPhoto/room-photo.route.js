"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const room_photo_validation_1 = __importDefault(require("./room-photo.validation"));
const room_photo_controller_1 = __importDefault(require("./room-photo-controller"));
const router = (0, express_1.Router)();
router.post('/', (0, validateRequest_1.default)(room_photo_validation_1.default.createRoomPhoto), room_photo_controller_1.default.createRoomPhoto);
router.post('/many', (0, validateRequest_1.default)(room_photo_validation_1.default.createManyRoomPhoto), room_photo_controller_1.default.createManyRoomPhoto);
router.get('/', room_photo_controller_1.default.getAllRoomPhoto);
router.get('/:id', room_photo_controller_1.default.getRoomPhotoById);
const roomPhotoRouter = router;
exports.default = roomPhotoRouter;
