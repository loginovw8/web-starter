/**
 * МЕТОДЫ МАССИВОВ
 */

// Начиная с позиции 1, удалить один элемент

let a = [1, 2, 3];

a.splice(1, 1);

// Удалить элементы с заменой

a = [1, 2, 3, 4, 5];

a.splice(1, 3, "two", "three", "four");

// Добавить элементы в массив

a = [1, 2, 3, 4, 5];

a.splice(2, 0, "between 2 and 3");
