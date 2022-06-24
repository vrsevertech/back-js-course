"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.getItems = exports.addItem = exports.auth = exports.addUser = void 0;
const DBConnect_1 = require("./DBConnect");
function addUser(user) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((yield DBConnect_1.collection.findOne({ login: user.login })) !== null)
            return false;
        user.items = [];
        user.lastId = 0;
        const result = yield DBConnect_1.collection.insertOne(user);
        return { ok: result.acknowledged };
    });
}
exports.addUser = addUser;
function auth(user) {
    return __awaiter(this, void 0, void 0, function* () {
        return { ok: (yield DBConnect_1.collection.findOne({ login: user.login, pass: user.pass })) !== null };
    });
}
exports.auth = auth;
// параллелизм, транзакции, блокировки, атомарность, халатность
function addItem(login, item) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const lastId = (_a = (yield DBConnect_1.collection.findOne({ login: login }))) === null || _a === void 0 ? void 0 : _a.lastId;
        item.id = lastId;
        yield DBConnect_1.collection.updateOne({ login: login }, { $push: { items: item } });
        yield DBConnect_1.collection.updateOne({ login: login }, { $set: { lastId: lastId + 1 } });
        return { id: ((_b = (yield DBConnect_1.collection.findOne({ login: login }))) === null || _b === void 0 ? void 0 : _b.lastId) - 1 };
    });
}
exports.addItem = addItem;
function getItems(login) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield DBConnect_1.collection.findOne({ login: login });
        return { items: user === null || user === void 0 ? void 0 : user.items };
    });
}
exports.getItems = getItems;
function updateItem(login, item) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield DBConnect_1.collection.updateOne({ login: login }, { $set: {
                'items.$[item].text': item.text,
                'items.$[item].checked': item.checked
            } }, { arrayFilters: [{ 'item.id': item.id }] });
        return { ok: res.acknowledged };
    });
}
exports.updateItem = updateItem;
function deleteItem(login, item) {
    return __awaiter(this, void 0, void 0, function* () {
        yield DBConnect_1.collection.updateOne({ login: login }, { $pull: { items: { id: item.id } } });
        return ({ ok: true });
    });
}
exports.deleteItem = deleteItem;
