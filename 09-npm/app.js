import http from 'http';
// https://stackoverflow.com/questions/36795819/when-should-i-use-curly-braces-for-es6-import
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import fs from 'fs';
import ejs from 'ejs';

const server = http.createServer(function (req, res) {
    if (req.url === '/' && req.method === 'GET') {
        let fileContent = fs.readFileSync('./items.json', 'utf8');
        let data = JSON.parse(fileContent);

        ejs.renderFile('./pages/home.ejs', { title: 'Home', items: data }, {}, (err, html) => {
            res.end(html);
        });
    }

    if (/^\/items\/[0-9]+$/.test(req.url) && req.method === 'GET') {
        let fileContent = fs.readFileSync('./items.json', 'utf8');
        let data = JSON.parse(fileContent);

        let id = Number(req.url.split('/')[2]);
        let item = data.find(item => item.id === id);

        ejs.renderFile('./pages/item.ejs', { title: 'Item', item: item }, {}, (err, html) => {
            res.end(html);
        });
    }

    if (req.url === '/about-us' && req.method === 'GET') {
        ejs.renderFile('./pages/about-us.ejs', {}, {}, (err, html) => {
            res.end(html);
        });
    }

    if (req.url.match('\.jpeg')) {
        let fileName = fileURLToPath(import.meta.url);
        let imagePath = path.join(dirname(fileName), 'img', req.url);

        fs.readFile(imagePath, function (err, img) {
            res.writeHead(200, { 'Content-Type': 'image/jpeg' });
            res.end(img);
        });
    }

    if (req.url.match('\.css')) {
        let fileName = fileURLToPath(import.meta.url);
        let cssPath = path.join(dirname(fileName), '.', req.url);

        fs.readFile(cssPath, function (err, css) {
            res.writeHead(200, { 'Content-Type': 'text/css' });
            res.end(css);
        });
    }
});

server.listen(8080, function () {
    console.log('Listening on port 8080');
});
