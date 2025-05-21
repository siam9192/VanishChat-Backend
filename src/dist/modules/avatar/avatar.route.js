"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const avatar_controller_1 = __importDefault(require("./avatar.controller"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const avatar_validation_1 = __importDefault(require("./avatar.validation"));
const router = (0, express_1.Router)();
router.post('/', (0, validateRequest_1.default)(avatar_validation_1.default.createAvatar), avatar_controller_1.default.createAvatar);
router.post('/many', (0, validateRequest_1.default)(avatar_validation_1.default.createManyAvatar), avatar_controller_1.default.createManyAvatar);
router.get('/', avatar_controller_1.default.getAllAvatar);
router.get('/:id', avatar_controller_1.default.getAvatarById);
const avatarRouter = router;
exports.default = avatarRouter;
