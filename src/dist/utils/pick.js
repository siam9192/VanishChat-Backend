"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pick = (obj, keys) => {
    const finalObj = {};
    for (const key of keys) {
        if (obj && Object.hasOwnProperty.call(obj, key) && obj[key]) {
            finalObj[key] = obj[key];
        }
    }
    return finalObj;
};
exports.default = Pick;
