/**
 * DOM-дерево
 *
 * В соответствии с объектной моделью документа («Document Object Model»,
 * коротко DOM), каждый HTML-тег является объектом. Вложенные теги являются
 * «детьми» родительского элемента. Текст, который находится внутри тега, также
 * является объектом.
 */

// Обратиться к объекту в HTML
let button = document.querySelector('.hello');

// Изменить CSS свойства объекта
// button.style.fontSize = "24px";

// Создать объект p
let p = document.createElement('p');

// Добавить класс paragraph к элементу p
p.classList.add('paragraph');

// Создать текстовый элемент для p
let text = document.createTextNode('Привет');

// Вставить текст в p
p.appendChild(text);

// Вставить текст в body
document.body.appendChild(p);

// Удалить элемент из HTML
p.remove();
