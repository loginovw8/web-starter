/**
 * Холст
 *
 * https://developer.mozilla.org/ru/docs/Web/API/Canvas_API
 */

// <canvas id="canvas"></canvas>

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
