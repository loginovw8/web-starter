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

// Обработка POST-запросов из форм
app.use(express.urlencoded({ extended: true }));

// Запуск веб-сервера по адресу http://localhost:3000
app.listen(3000);

/**
 * Маршруты
 */
app.get('/', (req, res) => {
    let data = fs.readFileSync('./public/items.json', 'utf8')

    res.render('home', {
        'items': JSON.parse(data),
    })
});

app.get('/items/:id/show', (req, res) => {
    let file = fs.readFileSync('./public/items.json', 'utf8')
    let data = JSON.parse(file)

    let id = Number(req.params.id)

    let item = data.find(item => item.id === id)

    res.render('item', {
        'item': item,
    })
});

app.get('/items/create', (req, res) => {
    res.render('create')
})

app.post('/items/store', (req, res) => {
    let file = fs.readFileSync('./public/items.json', 'utf8')
    let data = JSON.parse(file)

    data.push({
        id: req.body.id,
        title: req.body.title,
        image: req.body.image,
    })

    fs.writeFile(
        './public/items.json',
        JSON.stringify(data, null, 4),
        (err) => {
            if (err) {
                console.log(err)
            }

            res.redirect('/')
        },
    );
});
