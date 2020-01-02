const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type':'text/plain'
    })
    res.end('hurray')
});

server.listen(3002, () => {
    console.log('listening on port 3002');
});