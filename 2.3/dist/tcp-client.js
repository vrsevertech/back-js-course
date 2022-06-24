"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const net_1 = __importDefault(require("net"));
let outMess;
const client = new net_1.default.Socket();
client.connect({ port: 9856, host: 'localhost' }, function () {
    outMess = new Date().getMilliseconds();
    client.write(outMess.toString());
});
client.on('data', function (chunk) {
    const inMess = chunk.toString();
    if (outMess.toString() === inMess)
        console.log('да, одинаково');
    console.log(outMess - new Date().getMilliseconds());
    client.end();
});
client.on('end', function () {
    console.log('соединение закрыто');
});
