"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
let outMess;
http_1.default.request({ method: 'POST', port: 8080 }, (res) => {
    res.on('data', (inMess) => {
        if (inMess == outMess.toString())
            console.log('тот же ответ');
        console.log(Number.parseInt(outMess) - new Date().getMilliseconds());
    });
}).write(outMess = new Date().getMilliseconds().toString());
