/**
 * ФУНКЦИИ
 *
 * Колбэки
 */

function loadScript(src, callback) {
	let script = document.createElement('script');
	script.src = src;
	script.onload = () => callback(script);
	document.head.append(script);
}

function displayMessage(msg) {
	console.log(msg);
}

loadScript('./scripts/01-obj.js', displayMessage);

//loadScript('./scripts/01-obj.js', (script) => {
	//console.log(script);
//});
