import Net from 'net';

let outMess: number;

const client = new Net.Socket();

client.connect({ port: 9856, host: 'localhost' }, function() {
    outMess = new Date().getMilliseconds();
    client.write(outMess.toString());
});

client.on('data', function(chunk) {
    const inMess = chunk.toString();
    if (outMess.toString() === inMess) console.log('да, одинаково');
    console.log(outMess - new Date().getMilliseconds());
    client.end();
});

client.on('end', function() {
    console.log('соединение закрыто');
});