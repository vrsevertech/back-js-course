import http from 'http'
let outMess:string;
http.request({ method: 'POST', port: 8080 }, (res) => {
    res.on('data', (inMess:string) => {
        if (inMess == outMess.toString()) console.log('тот же ответ')
        console.log(Number.parseInt(outMess) - new Date().getMilliseconds())
    })
}).write(outMess = new Date().getMilliseconds().toString())