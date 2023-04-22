const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        fs.readFile('./pages/home.html', function (err, html) {
            res.end(html);
        });
    }

    if (req.url === '/about-us') {
        fs.readFile('./pages/about-us.html', function (err, html) {
            res.end(html);
        });
    }
});

server.listen(8080, function () {
    console.log('Listening on port 8080');
});
