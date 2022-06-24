import nodeFetch from 'node-fetch';

//1

//nodeFetch('https://api.ipify.org/?format=json').then(r => r.json()).then(r => console.log('my ip: ' + r.ip));

//2

async function getIp() {
    const response = await nodeFetch('https://api.ipify.org/?format=json');
    const json = await response.json();
    return json.ip;
}
//getIp().then(r => console.log('my ip: ' + r));

//3

function now() {
    const d = new Date();
    return d.getMinutes() + '.' + d.getSeconds() + '.' + d.getMilliseconds();
}

async function g() {
    const start = now();
    const responce = await nodeFetch('https://random-data-api.com/api/name/random_name');
    const json = await responce.json();
    const end = now();
    console.log('request name started in: ' + start + ' request name ended in: ' + end);
    return json.name;
}

async function one(parr: Promise<string>[]) {
    return await Promise.all(parr);
}

async function two(parr: Promise<string>[]) {
    let a = await parr[0];
    let b = await parr[1];
    let c = await parr[2];
    return [a,b,c];
}

function three(parr: Promise<string>[]) {
    return new Promise((resolve) => {
        let res:string[] = [];
        parr.forEach((p) => {
            p.then((r) => {
                res.push(r);
                if(res.length === parr.length) {
                    resolve(res);
                }
            });
        });
    });
}

//one([g(),g(),g()]).then(r => console.log('all of names: ' + r));
//two([g(),g(),g()]).then(r => console.log('all of names: ' + r));
three([g(),g(),g()]).then(r => console.log('all of names: ' + r));

//4
const url = 'https://random-data-api.com/api/users/random_user';

async function withAsyncAwait() {
   let gender, i = 0;
   while(gender!='Female') {
       console.log(now() + ' search gender..')
       let response = await nodeFetch(url);
       let json = await response.json();
       gender = json.gender;
       console.log(now() + ' gender is: ' + gender)
       i++;
   }
   console.log('female searched for ' + i + ' requests');
}
//withAsyncAwait();

function without() {
    nodeFetch(url).then(r => r.json()).then(r => r.gender == 'Female' ? console.log(r.first_name) : without());
}
without();

//5

async function $1(c: Function) {
    c(await getIp());
}

async function $2() {
    $1((ip:string) => console.log(ip));
}

//$2();

//6

async function name(param:Function) {
    const ip = await getIp();
    param(ip);
}
name((ip:string) => console.log(ip))