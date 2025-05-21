"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const http_1 = __importDefault(require("http"));
const response_1 = require("./utils/response");
const routes_1 = __importDefault(require("./routes"));
const socket_io_1 = require("socket.io");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)({ origin: '*' }));
exports.server = http_1.default.createServer(app);
const io = new socket_io_1.Server(exports.server, {
    cors: {
        origin: '*',
    },
});
app.use(routes_1.default);
app.use((err, req, res, next) => {
    console.log(err);
    (0, response_1.sendErrorResponse)(res, {
        statusCode: err.statusCode || 500,
        message: err.message || 'Something went wrong',
    });
});
app.use((req, res) => {
    if (req.url === '/') {
        res.status(200).json({
            message: 'Hey welcome to the vanish chat  server',
        });
    }
    else {
        res.status(404).json({
            success: false,
            statusCode: 404,
            message: 'Not Found',
        });
    }
});
// io.on('connection', (socket) => {
//   console.log('a user connected',socket.id);
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   });
// });
exports.default = app;
