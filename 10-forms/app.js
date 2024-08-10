import http from 'http';
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

    if (req.url === '/api/v1/items' && req.method === 'GET') {
        let fileContent = fs.readFileSync('./items.json', 'utf8');

        res.setHeader('Content-Type', 'application/json;charset=UTF-8');
        res.end(fileContent);
    }

    if (req.url === '/items' && req.method === 'GET') {
        http.get('http://localhost:8080/api/v1/items', (response) => {
            let rawData = '';

            response
                .on('data', (chunk) => { rawData += chunk; })
                .on('end', () => {
                    try {
                        const parsedData = JSON.parse(rawData);
                        console.log(parsedData);

                        res.writeHead(302, {
                            location: '/',
                        });
                        res.end();
                    } catch (e) {
                        console.error(e.message);
                    }
                });
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

    if (req.url === '/items/create' && req.method === 'GET') {
        ejs.renderFile('./pages/create.ejs', {}, {}, (err, html) => {
            res.end(html);
        });
    }

    if (req.url === '/items/store' && req.method === 'POST') {
        let body = [];

        req
            .on('data', (chunk) => {
                body.push(chunk);
            })
            .on('end', () => {
                body = Buffer.concat(body).toString().split('&');

                body.forEach((e, i) => {
                    let s = e.split('=');
                    body[i] = {
                        key: s[0],
                        value: s[1],
                    };
                });

                let fileContent = fs.readFileSync('./items.json', 'utf8');
                let data = JSON.parse(fileContent);

                data.push({
                    id: Number(body.find((e) => e.key == 'id').value),
                    title: body.find((e) => e.key == 'title').value,
                    image: body.find((e) => e.key == 'image').value,
                });

                fs.writeFile('./items.json',
                    JSON.stringify(data, null, 4),
                    () => {
                        res.writeHead(302, {
                            location: '/',
                        });
                        res.end();
                    }
                );
            });
    };

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
