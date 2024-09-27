/**
 * Простые анимации
 */

function ellipse(cx, cy, r) {
    return {
        cx: cx,
        cy: cy,
        r: r,
        vx: 3,
        vy: 2,
        draw: function (ctx) {
            ctx.beginPath();
            ctx.arc(this.cx, this.cy, this.r, 0, Math.PI * 2);
            ctx.fill();
        }
    };
}

function getCanvas(s, ctx, obj = []) {
    return {
        selector: s,
        ctx: ctx,
        objects: obj,
        animate: function () {
            this.ctx.clearRect(0, 0, this.selector.width, this.selector.height);

            this.ctx.fillStyle = 'red';

            for (let i = 0; i < this.objects.length; i++) {
                this.objects[i].draw(this.ctx);
            }

            window.requestAnimationFrame(() => this.animate());
        }
    };
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let el = ellipse(canvas.width / 2, canvas.height / 2, 50);

getCanvas(canvas, ctx, [el]).animate();
