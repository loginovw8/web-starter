const express = require('express')
const mysql = require('mysql');
const path = require('path');
const session = require('express-session');
const app = express();

// Соединение с базой данных
const connection = mysql.createConnection({
    host: "127.0.0.1",
    database: "nature",
    user: "root",
    password: "secret",
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

// Инициализация сессии
app.use(session({ secret: "Secret", resave: false, saveUninitialized: true }));

// Middleware
function isAuth(req, res, next) {
    if (req.session.auth) {
        next();
    } else {
        res.redirect('/');
    }
};

// Запуск веб-сервера по адресу http://localhost:3000
app.listen(3000);

/**
 * Маршруты
 */
app.get('/', (req, res) => {
    connection.query("SELECT * FROM items", (err, data, fields) => {
        if (err) {
            console.log(err);
        }

        res.render('home', {
            items: data,
            auth: req.session.auth,
        });
    });
});

app.get('/add', isAuth, (req, res) => {
    res.render('add', {
        auth: req.session.auth,
    });
});

app.post('/store', isAuth, (req, res) => {
    connection.query(
        "INSERT INTO items (title, image) VALUES (?, ?)",
        [[req.body.title], [req.body.image]],
        (err, data, fields) => {
            if (err) {
                console.log(err);
            }

            res.redirect('/');
        }
    );
});

app.get('/auth', (req, res) => {
    res.render('auth', {
        auth: req.session.auth,
    });
});

app.post('/register', (req, res) => {
    connection.query(
        "INSERT INTO users (name, password) VALUES (?, ?)",
        [[req.body.name], [req.body.password]],
        (err, data, fields) => {
            if (err) {
                console.log(err);
            }

            req.session.auth = true;

            res.redirect('/');
        }
    );
});

app.post('/logout', isAuth, (req, res) => {
    req.session.auth = false;

    res.redirect('/');
});
