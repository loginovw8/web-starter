/**
 * Простые анимации
 */

class Canvas {
    constructor() {
        this.params = {
            x: 100,
        };
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.fillStyle = 'red';
        this.ctx.beginPath();
        this.ctx.arc(this.params.x, 100, 50, 0, Math.PI * 2);
        this.ctx.fill();

        window.requestAnimationFrame(() => this.animate());
    }
}

new Canvas().animate();
