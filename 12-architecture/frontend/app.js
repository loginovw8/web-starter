const express = require("express");
const path = require("path");
const request = require("request");
const app = express();

// Путь к директории файлов ресурсов (css, js, images)
app.use(express.static("public"));

// Настройка шаблонизатора
app.set("view engine", "ejs");

// Путь к директории файлов отображения контента
app.set("views", path.join(__dirname, "views"));

// Обработка POST-запросов из форм
app.use(express.urlencoded({ extended: true }));

// Запуск веб-сервера по адресу http://localhost:3000
app.listen(3000);

/**
 * Маршруты
 */
app.get("/", (req, res) => {
    let url = "http://127.0.0.1:8080";

    request.get(url, (err, response, body) => {
        if (!err && res.statusCode === 200) {
            res.render("home", {
                items: JSON.parse(body),
            });
        } else {
            console.log(err);
        }
    });
});

app.post("/store", (req, res) => {
    let url = "http://127.0.0.1:8080/store";

    request.post(
        {
            url: url,
            json: true,
            body: {
                title: req.body.title,
                image: req.body.image,
            },
        },
        (err, response, body) => {
            if (!err && response.statusCode == 201) {
                res.redirect("/");
            } else {
                console.log(err);
            }
        }
    );
});

app.get("/add", (req, res) => {
    res.render("add");
});
