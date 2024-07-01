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

/**
 * Альтернативная запись анонимной функции
 */

// loadFile('Loading...', () => {
//     console.log('File loaded.');
// });
