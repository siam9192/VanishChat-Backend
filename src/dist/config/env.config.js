"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const node_path_1 = __importDefault(require("node:path"));
dotenv_1.default.config({ path: node_path_1.default.join((process.cwd(), '.env')) });
const envConfig = {
    jwt: {
        userIdTokenSecret: process.env.JWT_USER_ID_TOKEN_SECRET,
        userIdTokenExpireTime: process.env.JWT_USER_ID_TOKEN_EXPIRE_TIME,
    },
};
exports.default = envConfig;
