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
const user_service_1 = __importDefault(require("./user.service"));
class UserController {
    constructor() {
        this.initUser = (0, catchAsync_1.default)((req, res) => __awaiter(this, void 0, void 0, function* () {
            const result = yield user_service_1.default.userInit(req);
            res.cookie("token", result.generatedToken);
            (0, response_1.sendSuccessResponse)(res, {
                message: 'User init successfully!',
                statusCode: http_status_1.default.OK,
                data: result
            });
        }));
    }
}
exports.default = new UserController();
