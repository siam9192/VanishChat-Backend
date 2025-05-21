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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const env_config_1 = __importDefault(require("../../config/env.config"));
const crypto_1 = __importDefault(require("crypto"));
class UserService {
    userInit(req) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.replace('Bearer ', '');
            let decoded;
            let isValidTokenExist;
            if (token) {
                try {
                    decoded = jsonwebtoken_1.default.verify(token, env_config_1.default.jwt.userIdTokenSecret);
                    isValidTokenExist = true;
                }
                catch (error) {
                    isValidTokenExist = false;
                }
            }
            const uuid = crypto_1.default.randomUUID().replace(/-/g, '');
            const tokenPayload = {
                id: uuid
            };
            const generatedToken = jsonwebtoken_1.default.sign(tokenPayload, env_config_1.default.jwt.userIdTokenSecret, {
                expiresIn: "30d"
            });
            return { generatedToken };
        });
    }
}
exports.default = new UserService();
