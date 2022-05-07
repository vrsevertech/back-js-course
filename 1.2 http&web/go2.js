// этот файл надо будет дописать...

// не обращайте на эту функцию внимания 
// она нужна для того чтобы правильно читать входные данные
function readHttpLikeInput(){
    var fs = require("fs");
    var res = "";
    var buffer = Buffer.alloc ? Buffer.alloc(1) : new Buffer(1);
    let was10 = 0;
    for(;;){ 
        try { fs.readSync(0 /*stdin fd*/, buffer, 0, 1); } catch (e) {break; /* windows */}
        if(buffer[0] === 10 || buffer[0] === 13) {
            if (was10 > 10) 
                break;
            was10++;
        } else 
           was10 = 0;
        res += new String(buffer);
    }

    return res;
}

let contents = readHttpLikeInput();



function outputHttpResponse(statusCode, statusMessage, headers, body) {
    console.log(
`HTTP/1.1 ${statusCode} ${statusMessage}
Date: ${new Date().toLocaleString('ua')}
Server: Apache/2.2.14 (Win32)
Content-Length: ${body.length}
Connection: Closed
Content-Type: text/html; charset=utf-8
    
${body}`);
}

function processHttpRequest(method, uri, reqHeaders, reqBody) {
    let statusCode, statusMessage, resHeaders, resBody;
    if (method !== 'POST' || reqHeaders['Content-Type'] !== 'application/x-www-form-urlencoded') {
        statusCode = 400;
        statusMessage = 'Bad Request';
        resBody = 'bad request'
    } else if (uri.indexOf('/api/checkLoginAndPassword') !== 0) {
        statusCode = 404;
        statusMessage = 'Not Found';
        resBody = 'not found'
    } else {
        let filePassword;
        try {
            filePassword = require('fs').readFileSync('./password.txt', 'utf-8');
        } catch {
            statusCode = 500;
            statusMessage = 'Internal Server Error';
        }
        passwords = filePassword
                        .split('\r')
                        .join('')
                        .split('\n')
                        .map(s => s.split(':'));
        passwords = passwords.reduce((o, p) => {
            o[p[0]] = p[1];
            return o;
        }, {})
        userParams = reqBody
                        .split('\n')
                        .join('')
                        .split('&')
                        .map(p => p.split('='));
        userParams = userParams.reduce((o, p) => {
            o[p[0]] = p[1];
            return o;
        }, {})
        if (passwords[userParams.login] == userParams.password) {
            statusCode = 200;
            statusMessage = 'OK';
            resBody = '<h1 style="color:green">FOUND</h1>';
        } else {
            statusCode = 403;
            statusMessage = 'Forbidden';
            resBody = '<h1 style="color:red">NOT FOUND</h1>';
        }
    }
    outputHttpResponse(statusCode, statusMessage, resHeaders, resBody);
}



function parseTcpStringAsHttpRequest(string) { 

    bodyNhead = string.split('\n\n');

    head = bodyNhead[0].split('\n');
    body = bodyNhead[1];

    methodNuri = head.splice(0,1)[0].split(' ');

    method = methodNuri[0];
    uri = methodNuri[1];

    let headers = Object.create(null);
    head.forEach(element => {
        keyNvalue = element.split(': ');
        key = keyNvalue[0];
        value = keyNvalue[1];
        headers[key] = value;
    });

    return { 
        method: method, 
        uri : uri, 
        headers:  headers, 
        body : body, 
    };
}

http = parseTcpStringAsHttpRequest(contents);
processHttpRequest(http.method, http.uri, http.headers, http.body);
