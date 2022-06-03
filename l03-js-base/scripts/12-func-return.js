/**
 * ФУНКЦИИ
 *
 * Возврат значения
 */

function showGreeting(inputName) {
    let message = 'Hello, ' + inputName;
    return message;
}

let username = 'Alex';
let string = showGreeting(username);
console.log(string);

