"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const createRoom = zod_1.z.object({
    name: zod_1.z.string({ required_error: "room name is  required" }).nonempty().max(30),
    photoId: zod_1.z.number().int(),
    user: zod_1.z.object({
        name: zod_1.z.string({ required_error: "user name is required" }).nonempty().max(30).optional(),
        avatarId: zod_1.z.number().optional(),
        isAnonymous: zod_1.z.boolean(),
    }),
});
exports.default = {
    createRoom
};
