# Рисование фигур с помощью canvas

Canvas — это HTML элемент, использующийся для рисования графики средствами языков программирования (обычно это JavaScript). Он может, к примеру, использоваться для рисования графов, создания коллажей или простой анимации.

https://developer.mozilla.org/ru/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes

## Упражнения

-   В файле 01-canvas.js создать фон клеткой с шагом 25 px, нарисовать оси x и y, подписать их. Создать функцию для проверки существования треугольника по 3 точкам {x, y}. Создать функцию построения треугольника по 3 точкам.
-   В файле 02-animation.js создать анимацию движения шара в границах canvas.
-   В файле 03-3d.js отрисовать вершины и ребра куба. Создать анимацию вращения куба в координатах x, y, z.

Примеры реализации анимации

    /assets/7-1.png

    rotateX(t) {
        let angle = 0.0003 * t * Math.PI * 2;

        for (let v of this.vertices) {
            let dy = v.y - this.cy;
            let dz = v.z - this.cz;
            let y = dy * Math.cos(angle) - dz * Math.sin(angle);
            let z = dy * Math.sin(angle) + dz * Math.cos(angle);
            v.y = y + this.cy;
            v.z = z + this.cz;
        }
    }

    rotateY(t) {
        let angle = 0.0002 * t * Math.PI * 2;

        for (let v of this.vertices) {
            let dx = v.x - this.cx;
            let dz = v.z - this.cz;
            let x = dz * Math.sin(angle) + dx * Math.cos(angle);
            let z = dz * Math.cos(angle) - dx * Math.sin(angle);
            v.x = x + this.cx;
            v.z = z + this.cz;
        }
    }

    rotateZ(t) {
        let angle = 0.0001 * t * Math.PI * 2;

        for (let v of this.vertices) {
            let dx = v.x - this.cx;
            let dy = v.y - this.cy;
            let x = dx * Math.cos(angle) - dy * Math.sin(angle);
            let y = dx * Math.sin(angle) + dy * Math.cos(angle);
            v.x = x + this.cx;
            v.y = y + this.cy;
        }
    }
