import http from 'http';
import cookie from 'cookie';
import ejs from 'ejs';

const server = http.createServer(function (req, res) {
    if (req.url === '/') {
        let cookies = cookie.parse(req.headers.cookie || '');

        ejs.renderFile('./pages/home.ejs', {
            cookie: typeof cookies.accept == 'undefined' ? true : false
        }, {}, (err, html) => {
            res.end(html);
        });
    }

    if (req.url === '/about-us') {
        let cookies = cookie.parse(req.headers.cookie || '');

        ejs.renderFile('./pages/about-us.ejs', {
            cookie: typeof cookies.accept == 'undefined' ? true : false
        }, {}, (err, html) => {
            res.end(html);
        });
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
