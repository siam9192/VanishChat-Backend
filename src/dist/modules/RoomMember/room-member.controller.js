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
const http_status_1 = __importDefault(require("../../shared/http-status"));
const catchAsync_1 = __importDefault(require("../../utils/catchAsync"));
const response_1 = require("../../utils/response");
const room_member_service_1 = __importDefault(require("./room-member.service"));
class RoomMemberController {
    constructor() {
        this.getRoomMembers = (0, catchAsync_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield room_member_service_1.default.getRoomMembersFromDB(req.user, req.params.id);
            (0, response_1.sendSuccessResponse)(res, {
                message: 'Room members retrieved  successfully!',
                statusCode: http_status_1.default.OK,
                data: result,
            });
        }));
    }
}
exports.default = new RoomMemberController();
