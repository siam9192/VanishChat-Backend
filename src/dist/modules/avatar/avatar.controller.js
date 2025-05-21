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
const avatar_service_1 = __importDefault(require("./avatar.service"));
class AvatarController {
    constructor() {
        this.createAvatar = (0, catchAsync_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield avatar_service_1.default.createAvatarIntoDB(req.body);
            (0, response_1.sendSuccessResponse)(res, {
                message: 'Avatar created successfully!',
                statusCode: http_status_1.default.CREATED,
                data: result,
            });
        }));
        this.createManyAvatar = (0, catchAsync_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield avatar_service_1.default.createManyAvatarIntoDB(req.body);
            (0, response_1.sendSuccessResponse)(res, {
                message: 'Avatars  created successfully!',
                statusCode: http_status_1.default.CREATED,
                data: result,
            });
        }));
        this.getAllAvatar = (0, catchAsync_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield avatar_service_1.default.getAllAvatarFromDB();
            (0, response_1.sendSuccessResponse)(res, {
                message: 'All Avatar retrieved   successfully!',
                statusCode: http_status_1.default.OK,
                data: result,
            });
        }));
        this.getAvatarById = (0, catchAsync_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield avatar_service_1.default.getAvatarByIdFromDB(req.params.id);
            (0, response_1.sendSuccessResponse)(res, {
                message: 'Avatar retrieved   successfully!',
                statusCode: http_status_1.default.OK,
                data: result,
            });
        }));
    }
}
exports.default = new AvatarController();
