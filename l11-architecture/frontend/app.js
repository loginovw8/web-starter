const express = require('express')
const path = require('path')
const request = require('request')
const app = express()

// Путь к директории файлов ресурсов (css, js, images)
app.use(express.static('public'))

// Настройка шаблонизатора
app.set('view engine', 'ejs')

// Путь к директории файлов отображения контента
app.set('views', path.join(__dirname, 'views'))

// Запуск веб-сервера по адресу http://localhost:3000
app.listen(3000)

/**
 * Маршруты
 */
app.get('/', (req, res) => {
  let url = 'http://127.0.0.1:8080'

  request.get(url, (err, response, body) => {
    if (!err && res.statusCode === 200) {

      res.render('home', {
        items: JSON.parse(body),
      })
    } else {
      console.log(err)
    }
  })
})
