import http from 'http';
http.createServer(function (req, res) {
    req.on('data', chunk => {
        console.log(chunk.toString());
        res.end(chunk.toString())
    });
}).listen(8080);