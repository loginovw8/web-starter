/**
 * ОБЪЕКТЫ
 *
 * Мы можем представить объект в виде ящика с подписанными папками. Каждый
 * элемент данных хранится в своей папке, на которой написан ключ. По ключу
 * папку легко найти, удалить или добавить в неё что-либо.
 */

// Создать пустой объект
let user = {};

// Создать объект с заданными свойствами
let person = {
    name: "Alex",
    age: 15
};

// Получить свойство объекта
let username = person.name;

// Добавить свойство в объект
person.group = "admin";

// Удалить свойство объекта
delete person.group;

// Объект может содержать функции в качестве свойств
const box = {
    label: 'Box with toys',
    getContent: function () {
        return 'toys';
    },
};

console.log(box.getContent());

// this
const rectangle = {
    a: 4,
    b: 5,
    square: function () {
        return this.a * this.b;
    },
};

console.log(rectangle.square());
