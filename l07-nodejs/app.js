const http = require('http')
const path = require('path')
const fs = require('fs')

const server = http.createServer(function (req, res) {
  if (req.url === '/') {
    fs.readFile('./pages/home.html', function (err, html) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end(html)
    })
  }

  if (req.url === '/about-us') {
    fs.readFile('./pages/about-us.html', function (err, html) {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end(html)
    })
  }

  if (req.url.match('\.css')) {
    fs.readFile('./style.css', function (err, css) {
      res.writeHead(200, { 'Content-Type': 'text/css' })
      res.end(css)
    })
  }

  if (req.url.match('\.jpeg')) {
    let imagePath = path.join(__dirname, 'images', req.url)
    fs.readFile(imagePath, function (err, img) {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' })
      res.end(img)
    })
  }
})

server.listen(8080, function () {
  console.log('Listening on port 8080')
})
