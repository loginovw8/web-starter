/**
 * Простые анимации
 */

function ellipse(px, py, r) {
    return {
        px: px,
        py: py,
        r: r,
        draw: function (ctx) {
            ctx.beginPath();
            ctx.arc(this.px, this.py, this.r, 0, Math.PI * 2);
            ctx.fill();
        }
    };
}

function getCanvas(s, ctx) {
    return {
        selector: s,
        ctx: ctx,
        animate: function () {
            this.ctx.clearRect(0, 0, this.selector.width, this.selector.height);

            this.ctx.fillStyle = 'red';

            let el = ellipse(this.selector.width / 2, this.selector.height / 2, 50);
            el.draw(this.ctx);

            window.requestAnimationFrame(() => this.animate());
        }
    };
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

getCanvas(canvas, ctx).animate();
