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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_fetch_1 = __importDefault(require("node-fetch"));
//1
//nodeFetch('https://api.ipify.org/?format=json').then(r => r.json()).then(r => console.log('my ip: ' + r.ip));
//2
function getIp() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (0, node_fetch_1.default)('https://api.ipify.org/?format=json');
        const json = yield response.json();
        return json.ip;
    });
}
//getIp().then(r => console.log('my ip: ' + r));
//3
function now() {
    const d = new Date();
    return d.getMinutes() + '.' + d.getSeconds() + '.' + d.getMilliseconds();
}
function g() {
    return __awaiter(this, void 0, void 0, function* () {
        const start = now();
        const responce = yield (0, node_fetch_1.default)('https://random-data-api.com/api/name/random_name');
        const json = yield responce.json();
        const end = now();
        console.log('request name started in: ' + start + ' request name ended in: ' + end);
        return json.name;
    });
}
function one(parr) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield Promise.all(parr);
    });
}
function two(parr) {
    return __awaiter(this, void 0, void 0, function* () {
        let a = yield parr[0];
        let b = yield parr[1];
        let c = yield parr[2];
        return [a, b, c];
    });
}
function three(parr) {
    return new Promise((resolve) => {
        let res = [];
        parr.forEach((p) => {
            p.then((r) => {
                res.push(r);
                if (res.length === parr.length) {
                    resolve(res);
                }
            });
        });
    });
}
//one([g(),g(),g()]).then(r => console.log('all of names: ' + r));
//two([g(),g(),g()]).then(r => console.log('all of names: ' + r));
three([g(), g(), g()]).then(r => console.log('all of names: ' + r));
//4
const url = 'https://random-data-api.com/api/users/random_user';
function withAsyncAwait() {
    return __awaiter(this, void 0, void 0, function* () {
        let gender, i = 0;
        while (gender != 'Female') {
            console.log(now() + ' search gender..');
            let response = yield (0, node_fetch_1.default)(url);
            let json = yield response.json();
            gender = json.gender;
            console.log(now() + ' gender is: ' + gender);
            i++;
        }
        console.log('female searched for ' + i + ' requests');
    });
}
//withAsyncAwait();
function without() {
    (0, node_fetch_1.default)(url).then(r => r.json()).then(r => r.gender == 'Female' ? console.log(r.first_name) : without());
}
without();
//5
function $1(c) {
    return __awaiter(this, void 0, void 0, function* () {
        c(yield getIp());
    });
}
function $2() {
    return __awaiter(this, void 0, void 0, function* () {
        $1((ip) => console.log(ip));
    });
}
//$2();
//6
function name(param) {
    return __awaiter(this, void 0, void 0, function* () {
        const ip = yield getIp();
        param(ip);
    });
}
name((ip) => console.log(ip));
