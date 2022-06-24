"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
http_1.default.createServer(function (req, res) {
    req.on('data', chunk => {
        console.log(chunk.toString());
        res.end(chunk.toString());
    });
}).listen(8080);
