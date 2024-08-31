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
        }
    };
}

function getCanvas(s, ctx) {
    return {
        selector: s,
        ctx: ctx,
        animate: function (t) {
            this.ctx.clearRect(0, 0, this.selector.width, this.selector.height);
            this.ctx.lineWidth = 2;

            window.requestAnimationFrame((t) => this.animate(t));
        }
    };
}

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

getCanvas(canvas, ctx).animate();
