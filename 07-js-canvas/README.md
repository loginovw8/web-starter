# Рисование фигур с помощью canvas

Canvas — это HTML элемент, использующийся для рисования графики средствами языков программирования (обычно это JavaScript). Он может, к примеру, использоваться для рисования графов, создания коллажей или простой анимации.

https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

## Упражнения

-   В файле 01-canvas.js создать фон клеткой с шагом 25 px, нарисовать оси x и y, подписать их. Создать функцию для проверки существования треугольника по 3 точкам {x, y}. Создать функцию построения треугольника по 3 точкам.
-   В файле 02-animation.js создать анимацию движения шара в границах canvas.
-   В файле 03-3d.js отрисовать вершины и ребра куба. Создать анимацию вращения куба в координатах x, y, z.

Примеры реализации анимации

    rotateX(timeDelta) {
        const SPEED_X = 0.05; // rps
        let angle = timeDelta _ 0.001 _ SPEED_X _ Math.PI _ 2;

        for (let vertice of this.vertices) {
            let dy = vertice.y - this.cy;
            let dz = vertice.z - this.cz;
            let y = dy * Math.cos(angle) - dz * Math.sin(angle);
            let z = dy * Math.sin(angle) + dz * Math.cos(angle);
            vertice.y = y + this.cy;
            vertice.z = z + this.cz;
        }
    }

    rotateY(timeDelta) {
        const SPEED_Y = 0.15; // rps
        let angle = timeDelta * 0.001 * SPEED_Y * Math.PI * 2;

        for (let vertice of cube.vertices) {
            let dx = vertice.x - cube.cx;
            let dz = vertice.z - cube.cz;
            let x = dz * Math.sin(angle) + dx * Math.cos(angle);
            let z = dz * Math.cos(angle) - dx * Math.sin(angle);
            vertice.x = x + cube.cx;
            vertice.z = z + cube.cz;
        }
    }

    rotateZ(timeDelta) {
        const SPEED_Z = 0.10; // rps
        let angle = timeDelta * 0.001 * SPEED_Z * Math.PI * 2;

        for (let vertice of this.vertices) {
            let dx = vertice.x - this.cx;
            let dy = vertice.y - this.cy;
            let x = dx * Math.cos(angle) - dy * Math.sin(angle);
            let y = dx * Math.sin(angle) + dy * Math.cos(angle);
            vertice.x = x + this.cx;
            vertice.y = y + this.cy;
        }
    }
