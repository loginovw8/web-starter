const express = require('express')
const mysql = require('mysql');
const path = require('path')
const session = require('express-session');
const app = express()

// Соединение с базой данных
const connection = mysql.createConnection({
  host: "127.0.0.1",
  database: "nature",
  user: "root",
  password: "secret"
});

connection.connect(function (err) { if (err) throw err; });

// Путь к директории файлов ресурсов (css, js, images)
app.use(express.static('public'))

// Настройка шаблонизатора
app.set('view engine', 'ejs')

// Путь к директории файлов отображения контента
app.set('views', path.join(__dirname, 'views'))

// Обработка POST-запросов из форм
app.use(express.urlencoded({ extended: true }))

// Инициализация сессии
app.use(session({secret: "Secret", resave: false, saveUninitialized: true}));

// Middleware
function isAuth(req, res, next) {
  if (req.session.auth) {
    next();
  } else {
    res.redirect('/');
  }
}

// Запуск веб-сервера по адресу http://localhost:3000
app.listen(3000)

/**
 * Маршруты
 */
app.get('/', (req, res) => {
  connection.query("SELECT * FROM items", (err, data, fields) => {
    if (err) throw err;

    res.render('home', {
      items: data,
      auth: req.session.auth
    });
  });
})

app.get('/items/:id', (req, res) => {
  connection.query("SELECT * FROM items WHERE id=?", [req.params.id],
    (err, data, fields) => {
      if (err) throw err;

      res.render('item', {
        item: data[0],
        auth: req.session.auth
      })
  });
})

app.get('/auth', (req, res) => {
  res.render('auth', {
    auth: req.session.auth
  });
});

app.get('/add', (req, res) => {
  res.render('add', {
    auth: req.session.auth
  })
})

app.get('/lock', isAuth, (req, res) => {
  res.render('lock', {
    auth: req.session.auth
  });
});

app.post('/store', (req, res) => {
  connection.query(
    "INSERT INTO items (title, image) VALUES (?, ?)",
    [[req.body.title], [req.body.image]], (err, data, fields) => {
      if (err) throw err;

      res.redirect('/')
  });
})

app.post('/register', (req, res) => {
 connection.query(
    "INSERT INTO users (name, password) VALUES (?, ?)",
    [[req.body.name], [req.body.password]], (err, data, fields) => {
      if (err) throw err;

      req.session.auth = true;

      res.redirect('/')
  });
});
