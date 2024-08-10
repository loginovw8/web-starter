import http from 'http';
import fs from 'fs';
import cookie from 'cookie';
import Mustache from 'mustache';

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        let template = fs.readFileSync('./pages/home.html').toString();

        let cookies = cookie.parse(req.headers.cookie || '');

        res.end(
            Mustache.render(template, {
                cookie: typeof cookies.accept == 'undefined' ? true : false,
            })
        );
    }

    if (req.url === '/about-us') {
        let template = fs.readFileSync('./pages/about-us.html').toString();

        let cookies = cookie.parse(req.headers.cookie || '');

        res.end(
            Mustache.render(template, {
                cookie: typeof cookies.accept == 'undefined' ? true : false,
            })
        );
    }

    if (req.url === '/cookie' && req.method === 'POST') {
        res.setHeader('Set-Cookie', cookie.serialize('accept', true, {
            httpOnly: true,
            maxAge: 60 * 2,
        }));
        res.writeHead(302, { location: '/' });
        res.end();
    }
});

server.listen(8080, function () {
    console.log('Listening on port 8080');
});
