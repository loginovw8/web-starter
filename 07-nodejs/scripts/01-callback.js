/**
 * ФУНКЦИИ
 *
 * Колбэки
 */

function loadFile(msg, callback) {
    console.log(msg);
    setTimeout(callback, 1000);
}

loadFile('Loading...', function () {
    console.log('File loaded.');
});
