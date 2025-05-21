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
const prisma_1 = require("../../../../generated/prisma");
const AppError_1 = __importDefault(require("../../Errors/AppError"));
const prisma_2 = __importDefault(require("../../prisma"));
const http_status_1 = __importDefault(require("../../shared/http-status"));
class RoomJoinRequestService {
    getRoomJoinRequestsFromDB(authUser, id) {
        return __awaiter(this, void 0, void 0, function* () {
            id = Number(id);
            const room = yield prisma_2.default.room.findUnique({
                where: {
                    id,
                    status: prisma_1.RoomStatus.Open
                }
            });
            if (!room)
                throw new AppError_1.default(http_status_1.default.NOT_FOUND, "Room not found");
            const member = yield prisma_2.default.roomMember.findFirst({
                where: {
                    roomId: id,
                }
            });
            if (!member)
                throw new AppError_1.default(http_status_1.default.FORBIDDEN, "Not possible");
            if (member.role !== prisma_1.RoomMemberRole.Owner) {
                throw new AppError_1.default(http_status_1.default.FORBIDDEN, "Only room owner can access this");
            }
            return yield prisma_2.default.roomJoinRequest.findMany({
                where: {
                    roomId: id,
                    status: prisma_1.RoomJoinRequestStatus.Pending
                }
            });
        });
    }
}
exports.default = new RoomJoinRequestService();
