import Net from 'net';
const port = 9856;
const server = new Net.Server();
server.listen(port);
server.on('connection', function(socket) {
    console.log(socket.remoteAddress)

    socket.on('data', function(chunk) {
        const text = chunk.toString();
        console.log(new Date().toDateString() + ' ' + text);
        socket.write(text);
    });
    socket.on('end', function() {
        console.log(new Date().toDateString() + ' соединение закрыто');
    });
    socket.on('error', function() {
        console.log('хана');
    });
});
