const http = require('http');

const hostname = '127.0.0.1';
3000
const port = 1337;

const server = http.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello from server</h1>');
    res.end();
});

server.listen(port, hostname, function () {
   console.log(`serveren kører på http://${hostname}:${port}/`);
});