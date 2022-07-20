const express = require("express");
const path = require("path");
// https://www.npmjs.com/package/bcrypt
const bcrypt = require("bcrypt");
// https://www.npmjs.com/package/multer
const multer = require("multer");
const fs = require("fs");
const app = express();

// Путь к директории для загрузок
const upload = multer({ dest: "./public/img/" });

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
  res.render("home");

  // Пароль пользователя
  let password = "12345";

  // Соль
  // https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%BB%D1%8C_(%D0%BA%D1%80%D0%B8%D0%BF%D1%82%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F)
  let salt = 10;

  // Шифруем и записываем в БД
  bcrypt.hash(password, salt, (err, hash) => {
    console.log(hash);
  });

  // Извлеченный из БД хэш
  let hash = "$2b$10$g8QYamUl7dDVg3ZQj5z7duMZMrB4kwSCqEBVXknCxcOpxmZDk524q";

  // Сравниваем хэш и пользовательский пароль
  bcrypt.compare(password, hash, (err, result) => {
    console.log(result);
  });
});

app.post("/upload", upload.single("image"), (req, res) => {
  const tempPath = req.file.path;
  const targetPath = path.join(
    __dirname,
    "./public/img/" + req.file.originalname
  );

  fs.rename(tempPath, targetPath, (err) => {
    if (err) console.log(err);
    
    res.redirect('/');
  });
});
