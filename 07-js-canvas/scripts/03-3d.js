/**
 * 3D-объекты
 */

class Point {
    // z axis positive direction towards me
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}

class Cube {
    constructor(cx, cy, cz, r) {
        this.cx = cx;
        this.cy = cy;
        this.cz = cz;
        this.r = r;

        this.vertices = this.createVertices();
        this.edges = this.createEdges();
    }

    createVertices() {
        let s = 0; // axis shift

        return [
            // back
            new Point(), // lb
            new Point(), // rb
            new Point(), // rt
            new Point(), // lt
            // front
            new Point(), // lb
            new Point(), // rb
            new Point(), // rt
            new Point(), // lt
        ];
    }

    createEdges() {
        return [
            // [a, b], [a, b], [a, b], [a, b], // back
            // [a, b], [a, b], [a, b], [a, b], // front
            // [a, b], [a, b], [a, b], [a, b], // connection
        ];
    }

    drawDots(ctx) {
        //
    }

    drawEdges(ctx) {
        //
    }
}

class Canvas {
    constructor() {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.ctx.lineWidth = 2;
        this.ctx.lineCap = 'round';

        this.cubes = [];

        this.animation = {
            timeDelta: 0,
            timeLast: 0,
        }
    }

    recordTimeDelta(t) {
        this.animation.timeDelta = t - this.animation.timeLast;
        this.animation.timeLast = t;
    }

    addCube(cube) {
        this.cubes.push(cube);
    }

    animate(t = 0) {
        this.recordTimeDelta(t);

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let cube of this.cubes) {
            cube.drawDots(this.ctx);
            cube.drawEdges(this.ctx);
        }

        window.requestAnimationFrame((t) => this.animate(t));
    }
}

let canvas = new Canvas();
let cube = new Cube(250, 250, 0, 100);

canvas.addCube(cube);

canvas.animate();
