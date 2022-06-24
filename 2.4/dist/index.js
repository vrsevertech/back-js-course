"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const session_file_store_1 = __importDefault(require("session-file-store"));
const DBConnect_1 = require("./DBConnect");
const DBTools = __importStar(require("./DBTools"));
const FileStore = (0, session_file_store_1.default)(express_session_1.default);
const app = (0, express_1.default)();
const port = 8000;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.use(express_1.default.static('static'));
app.use((0, express_session_1.default)({
    store: new FileStore({}),
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
}));
app.post('/api/v2/router', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    switch (req.query.action) {
        case 'login':
            if (yield DBTools.auth(req.body)) {
                req.session.login = req.body.login;
                res.send({ ok: true });
            }
            else {
                res.status(400).json({ error: 'not found' });
            }
            break;
        case 'logout':
            req.session.login = undefined;
            res.send({ ok: true });
            break;
        case 'register':
            let result = yield DBTools.addUser(req.body);
            req.session.login = req.body.login;
            res.send({ 'ok': result });
            break;
        case 'getItems':
            req.session.login ? res.send(yield DBTools.getItems(req.session.login)) : res.status(400).json({ error: 'forbidden' });
            break;
        case 'deleteItem':
            req.session.login ? res.send(yield DBTools.deleteItem(req.session.login, req.body)) : res.send(400);
            break;
        case 'createItem':
            req.session.login ? res.send(yield DBTools.addItem(req.session.login, req.body)) : res.send(403);
            break;
        case 'editItem':
            req.session.login ? res.send(yield DBTools.updateItem(req.session.login, req.body)) : res.send(403);
            break;
        default:
            break;
    }
}));
(0, DBConnect_1.DBConnect)()
    .then(() => {
    app.listen(port, () => {
        console.log(`listening on port ${port}`);
    });
})
    .catch((error) => {
    console.error("Database connection failed", error);
    process.exit();
});
