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
const room_service_1 = __importDefault(require("./room.service"));
class RoomController {
    constructor() {
        this.createRoom = (0, catchAsync_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield room_service_1.default.createRoomIntoDB(req.user, req.body);
            (0, response_1.sendSuccessResponse)(res, {
                message: 'Room  created successfully!',
                statusCode: http_status_1.default.CREATED,
                data: result,
            });
        }));
        this.getPublicRoomByCode = (0, catchAsync_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield room_service_1.default.getPublicRoomByCodeFromDB(req.params.code);
            (0, response_1.sendSuccessResponse)(res, {
                message: 'Room retrieved   successfully!',
                statusCode: http_status_1.default.OK,
                data: result,
            });
        }));
        this.getRoomById = (0, catchAsync_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield room_service_1.default.getRoomByCodeFromDB(req.user, req.params.id);
            (0, response_1.sendSuccessResponse)(res, {
                message: 'Room  retrieved   successfully!',
                statusCode: http_status_1.default.OK,
                data: result,
            });
        }));
    }
}
exports.default = new RoomController();
