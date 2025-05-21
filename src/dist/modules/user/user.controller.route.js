"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = __importDefault(require("./user.controller"));
const router = (0, express_1.Router)();
router.get('/init', user_controller_1.default.initUser);
const UserRouter = router;
exports.default = UserRouter;
