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
const AppError_1 = __importDefault(require("../../Errors/AppError"));
const prisma_1 = __importDefault(require("../../prisma"));
const http_status_1 = __importDefault(require("../../shared/http-status"));
class MessageService {
    getRoomMessagesFromDB(authUser, roomId) {
        return __awaiter(this, void 0, void 0, function* () {
            roomId = Number(roomId);
            const isMemberExist = yield prisma_1.default.roomMember.findFirst({
                where: {
                    userId: authUser.id,
                    roomId
                }
            });
            if (!isMemberExist) {
                throw new AppError_1.default(http_status_1.default.FORBIDDEN, "Only room owner can access this");
            }
            return yield prisma_1.default.message.findMany({
                where: {
                    roomId
                },
                include: {
                    member: true
                },
                orderBy: {
                    createdAt: 'desc'
                },
            });
        });
    }
}
exports.default = new MessageService();
