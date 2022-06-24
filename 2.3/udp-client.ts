import * as dgram from 'dgram'

const outMess = new Date().getMilliseconds();
const client = dgram.createSocket('udp4');

client.send(outMess.toString(), 0, outMess.toString().length, 4444, '127.0.0.1', function(err, bytes) {
    if (err) throw err;
});

client.on('message', function (inMess, remote) {
    if (inMess.toString() == outMess.toString()) console.log('текст тотже')
    console.log('прошло: ' + (new Date().getMilliseconds() - outMess) + 'ms')
    client.close();
});
