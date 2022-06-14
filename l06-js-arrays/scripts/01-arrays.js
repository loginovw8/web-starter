/**
 * МАССИВЫ
 *
 * Структура данных для хранения упорядоченных коллекций
 *
 */

// Объявление

let b = [];

// Объявление с указанием начальных значений элементов

let fruits = ["Яблоко", "Апельсин", "Слива"];

/**
 * Элементы массива нумеруются, начиная с нуля. Для получения значения
 * элемента массива необходимо использоват индекс
 */

console.log(fruits[0]);

// Замена элемента

fruits[1] = "Груша";

// Добавление нового элемента

fruits[3] = "Малина";

// Количество элементов в массиве

let count = fruits.length;

// Добавление нового элемента в конец массива

fruits.push("Клубника");

// Удалить первый элемент массива

fruits.shift();

// Удалить последний элемент массива

fruits.pop();
