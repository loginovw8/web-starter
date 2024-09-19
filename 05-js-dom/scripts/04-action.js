/**
 * БРАУЗЕРНЫЕ СОБЫТИЯ
 */

let button = document.querySelector('.hello');

button.addEventListener('click', sayClick);

function sayClick() {
    console.log('Click');
}
