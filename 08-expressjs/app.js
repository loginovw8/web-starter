const express = require('express');
const path = require('path');
const fs = require('fs');
const app = express();

// Путь к директории файлов ресурсов (css, js, images)
app.use(express.static('public'));

// Настройка шаблонизатора
app.set('view engine', 'ejs');

// Путь к директории файлов отображения контента
app.set('views', path.join(__dirname, 'views'));

// Запуск веб-сервера по адресу http://localhost:3000
app.listen(3000);

/**
 * Маршруты
 */
app.get('/', (req, res) => {
    let data = fs.readFileSync('./public/items.json', 'utf8');

    res.render('home', {
        'items': JSON.parse(data),
    });
});

app.get('/items/:id', (req, res) => {
    let file = fs.readFileSync('./public/items.json', 'utf8');
    let data = JSON.parse(file);

    let id = Number(req.params.id);

    let item = data.find(item => item.id === id);

    res.render('item', {
        'item': item,
    });
});

app.get('/about-us', (req, res) => {
    res.render('about-us');
});

app.get('/contacts', (req, res) => {
    res.render('contacts');
});
