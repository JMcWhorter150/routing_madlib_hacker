const http = require('http');
const faker = require('./faker');


const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type':'text/plain'
    })
    let reqUrl = req.url.split('/');
    let content = "";
    if (req.url === '/') {
        content = "Please enter noun/verb/adjective in the url";
    } else {
        let contentArray = reqUrl.filter(faker.isWordType)
                                 .map(faker.getRandomWord);
        if (contentArray.length > 0) {
            for (let word of contentArray) {
                content += `${word} `;
            }
        } else {
            content = "Only adjective, noun, verb allowed in url request"
        }
    }
    res.end(content);
});

server.listen(3002, () => {
    console.log('listening on port 3002');
});