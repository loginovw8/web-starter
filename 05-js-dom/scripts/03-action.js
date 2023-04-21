/**
 * БРАУЗЕРНЫЕ СОБЫТИЯ
 */

 let button = document.querySelector('.hello');

 button.addEventListener('click', sayHello);

 function sayHello() {
    let input = document.querySelector('.input');
    console.log(input.value);
 }
