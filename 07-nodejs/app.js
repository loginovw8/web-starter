const http = require('http');
const path = require('path');
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

    if (req.url.match('\.jpeg')) {
        let imagePath = path.join(__dirname, 'img', req.url)
        fs.readFile(imagePath, function (err, img) {
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            res.end(img);
        })
    }
});

server.listen(8080, function () {
    console.log('Listening on port 8080');
});
