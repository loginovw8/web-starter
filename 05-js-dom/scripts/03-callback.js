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

/**
 * Колбэк с параметрами
 */

// function loadFile(msg, callback) {
//     console.log(msg);
//     const status = 200;
//     const result = 'success';

//     setTimeout(() => {
//         callback(status, result);
//     }, 1000);
// }

// loadFile('Loading...', function (status, result) {
//     console.log('File loaded.');
//     console.log('Status: ' + status);
//     console.log('Result: ' + result);
// });
