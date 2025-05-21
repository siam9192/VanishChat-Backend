"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const prisma_1 = require("../../../../generated/prisma");
const AppError_1 = __importDefault(require("../../Errors/AppError"));
const prisma_2 = __importDefault(require("../../prisma"));
const http_status_1 = __importDefault(require("../../shared/http-status"));
class RoomService {
    createRoomIntoDB(authUser, payload) {
        return __awaiter(this, void 0, void 0, function* () {
            const roomPhotoExist = yield prisma_2.default.roomPhoto.findUnique({
                where: {
                    id: payload.photoId,
                },
            });
            if (!roomPhotoExist)
                throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Room photo not found');
            const avatarExist = yield prisma_2.default.avatar.findUnique({
                where: {
                    id: payload.user.avatarId,
                },
            });
            if (!avatarExist)
                throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Avatar  not found');
            let code = generateCode();
            // Generate unique code
            while (!(yield prisma_2.default.room.findUnique({ where: { code } }))) {
                code = generateCode();
            }
            const result = yield prisma_2.default.$transaction((txClient) => __awaiter(this, void 0, void 0, function* () {
                const roomData = {
                    name: payload.name,
                    photoId: payload.photoId,
                    code,
                };
                //   Create room
                const createdRoom = yield txClient.room.create({
                    data: roomData,
                });
                //   Create  1st room member  as owner role
                const user = payload.user;
                const memberData = {
                    userId: authUser.id,
                    role: prisma_1.RoomMemberRole.Owner,
                    roomId: createdRoom.id,
                };
                if (user.isAnonymous) {
                    memberData.isAnonymous = true;
                }
                else {
                    user.name = user.name;
                }
                memberData.avatarId = user.avatarId;
                yield txClient.roomMember.create({
                    data: memberData,
                });
                return createdRoom;
            }));
            return result;
        });
    }
    getPublicRoomByCodeFromDB(code) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!zod_1.z
                .string()
                .regex(/^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/)
                .safeParse(code).success) {
                throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid room code');
            }
            const room = yield prisma_2.default.room.findUnique({
                where: {
                    code,
                    status: prisma_1.RoomStatus.Open,
                },
            });
            if (!room) {
                throw new AppError_1.default(http_status_1.default.NOT_FOUND, 'Room not found');
            }
            return room;
        });
    }
    getRoomByCodeFromDB(authUser, code) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!zod_1.z
                .string()
                .regex(/^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/)
                .safeParse(code).success) {
                throw new AppError_1.default(http_status_1.default.BAD_REQUEST, 'Invalid room code');
            }
            const room = yield prisma_2.default.room.findUnique({
                where: {
                    code,
                },
            });
            return room;
        });
    }
}
exports.default = new RoomService();
