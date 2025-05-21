"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNoAccessResponse = exports.sendDataNotFoundResponse = exports.sendErrorResponse = exports.sendSuccessResponse = void 0;
const http_status_1 = __importDefault(require("../shared/http-status"));
const sendSuccessResponse = (res, responseData) => {
    res.status(responseData.statusCode).json({
        success: true,
        statusCode: responseData.statusCode,
        message: responseData.message,
        data: responseData.data,
        meta: responseData.meta,
    });
};
exports.sendSuccessResponse = sendSuccessResponse;
const sendErrorResponse = (res, responseData) => {
    res.status(responseData.statusCode).json({
        success: false,
        statusCode: responseData.statusCode,
        message: responseData.message,
    });
};
exports.sendErrorResponse = sendErrorResponse;
const sendDataNotFoundResponse = (res) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        statusCode: 404,
        message: 'No Data Found',
        data: [],
    });
};
exports.sendDataNotFoundResponse = sendDataNotFoundResponse;
const sendNoAccessResponse = (res) => {
    res.status(http_status_1.default.UNAUTHORIZED).json({
        success: false,
        statusCode: 401,
        message: 'You have no access to this route',
    });
};
exports.sendNoAccessResponse = sendNoAccessResponse;
