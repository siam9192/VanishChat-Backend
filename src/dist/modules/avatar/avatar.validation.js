"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createAvatar = zod_1.z.object({
    url: zod_1.z.string({ required_error: 'url is required' }).url('invalid url'),
});
const createManyAvatar = zod_1.z.object({
    urls: zod_1.z
        .array(zod_1.z.string({ required_error: 'url is required' }).url('invalid url'))
        .min(1, 'Minimum 1 url is required'),
});
exports.default = {
    createAvatar,
    createManyAvatar,
};
