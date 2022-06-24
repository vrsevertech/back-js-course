import * as dgram from 'dgram'

const port = 4444;
const host = '127.0.0.1';
const server = dgram.createSocket('udp4');

server.on('listening', function () {
    const address = server.address();
    console.log('UDP Server listening on ' + address.address + ":" + address.port);
});

server.on('message', function (message, remote) {
    console.log(remote.address + ':' + remote.port +' - ' + message);
    server.send(message, 0, message.length, remote.port, remote.address, function(err, bytes) {
        if (err) throw err;
        console.log('UDP server message sent to ' + remote.address +':'+ remote.port);
    });
});

server.bind(port, host);