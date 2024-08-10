/**
 * canvas
 */

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(25, 25, 100, 100);

ctx.strokeStyle = 'blue';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.moveTo(150, 75);
ctx.lineTo(200, 50);
ctx.stroke();

ctx.fillStyle = 'red';
ctx.font = 'bold 22px Arial';
ctx.fillText('0', 250, 75);
