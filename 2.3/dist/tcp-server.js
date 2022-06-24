"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
const port = 9856;
const server = new net_1.default.Server();
server.listen(port);
server.on('connection', function (socket) {
    console.log(socket.remoteAddress);
    socket.on('data', function (chunk) {
        const text = chunk.toString();
        console.log(new Date().toDateString() + ' ' + text);
        socket.write(text);
    });
    socket.on('end', function () {
        console.log(new Date().toDateString() + ' соединение закрыто');
    });
    socket.on('error', function () {
        console.log('хана');
    });
});
