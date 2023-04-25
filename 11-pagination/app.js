const express = require('express')
const mysql = require('mysql');
const path = require('path')
const app = express()

// Соединение с базой данных
const connection = mysql.createConnection({
  host: "127.0.0.1",
  database: "nature",
  user: "root",
  password: "secret"
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    }
});

// Путь к директории файлов ресурсов (css, js, images)
app.use(express.static('public'));

// Настройка шаблонизатора
app.set('view engine', 'ejs');

// Путь к директории файлов отображения контента
app.set('views', path.join(__dirname, 'views'));

// Обработка POST-запросов из форм
app.use(express.urlencoded({ extended: true }));

// Запуск веб-сервера по адресу http://localhost:3000
app.listen(3000);

/**
 * Маршруты
 */
app.get('/', (req, res) => {
  const itemsPerPage = 4;
  let page = parseInt(req.query.page); // localhost?page=4
  if (!page) page = 1;

  connection.query("SELECT * FROM items LIMIT ? OFFSET ?", [itemsPerPage, itemsPerPage * (page - 1)], (err, data, fields) => {
    if (err) throw err;

    res.render('home', {
      'items': data,
    });
  });
})

app.get('/items/:id', (req, res) => {
  connection.query("SELECT * FROM items WHERE id=?", [req.params.id],
    (err, data, fields) => {
      if (err) throw err;

      res.render('item', {
        'item': data[0],
      })
    });
});

app.get('/add', (req, res) => {
  res.render('add')
});

app.post('/store', (req, res) => {
  connection.query(
    "INSERT INTO items (title, image) VALUES (?, ?)",
    [[req.body.title], [req.body.image]], (err, data, fields) => {
      if (err) throw err;

      res.redirect('/')
    });
});
