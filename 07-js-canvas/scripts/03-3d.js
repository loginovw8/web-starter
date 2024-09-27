/**
 * 3D-объекты
 */

function point(x, y, z, r = 5) {
    // z axis positive direction towards me
    return {
        x: x, y: y, z: z, r: r,
        draw: function (ctx) {
            //
        }
    };
}

function cube(cx, cy, cz, r) {
    return {
        cx: cx, cy: cy, cz: cz, r: r,
        vertices: [],
        edges: [],
        createVertices: function () {
            let s = 0; // axis shift

            this.vertices = [
                /**
                 * back
                 */
                // point(),
                // point(),
                // point(),
                // point(),
                /**
                 * front
                 */
                // point(),
                // point(),
                // point(),
                // point(),
            ];
        },
        createEdges: function () {
            this.edges = [
                [], [], [], [], // back
                [], [], [], [], // front
                [], [], [], [], // connection
            ];
        },
        drawVertices: function (ctx) {
            //
        },
        drawEdges: function (ctx) {
            //
        },
        draw: function (ctx) {
            //
        }
    };
}

function getCanvas(s, ctx, obj = []) {
    return {
        selector: s,
        ctx: ctx,
        objects: obj,
        animate: function (t) {
            this.ctx.clearRect(0, 0, this.selector.width, this.selector.height);
            this.ctx.lineWidth = 2;

            for (let i = 0; i < this.objects.length; i++) {
                this.objects[i].draw(this.ctx);
            }

            window.requestAnimationFrame((t) => this.animate(t));
        }
    };
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let c = cube(canvas.width / 2, canvas.width / 2, 0, 100);

getCanvas(canvas, ctx, [c]).animate();
