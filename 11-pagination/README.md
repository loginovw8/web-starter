# Пагинация. Разделение запроса выборки на страницы

## Пример запроса выборки записей из таблицы БД с ограничением по количеству выборки и индексом смещения

Рассмотрим пример таблицы:

    +----+----------+--------------+
    | id | title    | image        |
    +----+----------+--------------+
    | 1  | Nature 1 | nature1.jpeg |
    | 2  | Nature 2 | nature2.jpeg |
    | 3  | Nature 3 | nature3.jpeg |
    | 4  | Nature 4 | nature4.jpeg |
    | 5  | Nature 5 | nature5.jpeg |
    | 6  | Nature 6 | nature6.jpeg |
    | 7  | Nature 7 | nature7.jpeg |
    | 8  | Nature 8 | nature8.jpeg |
    | 9  | Nature 9 | nature9.jpeg |
    +----+----------+--------------+

Нижеприведенный запрос выведет 4 записи, пропустив первые 2 элемента

    SELECT * FROM items LIMIT 4 OFFSET 2

Полученный результат:

    +----+----------+--------------+
    | id | title    | image        |
    +----+----------+--------------+
    | 3  | Nature 3 | nature3.jpeg |
    | 4  | Nature 4 | nature4.jpeg |
    | 5  | Nature 5 | nature5.jpeg |
    | 6  | Nature 6 | nature6.jpeg |
    +----+----------+--------------+
