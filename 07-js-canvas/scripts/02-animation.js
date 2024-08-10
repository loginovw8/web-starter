/**
 * Простые анимации
 */

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2);
    ctx.fill();

    window.requestAnimationFrame(animate);
}

animate();
