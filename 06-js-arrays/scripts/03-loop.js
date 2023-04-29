/**
 * ПЕРЕБОР ЭЛЕМЕНТОВ В МАССИВЕ
 */

let a = [1, 2, -3, 4, 5];

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
}

for (let i = 0; i < a.length; i++) {
    if (a[i] > 0) {
        continue;
    }
    console.log(a[i]);
}

for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
        continue;
    }
    console.log(a[i]);
}

for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
        break;
    }
    console.log(a[i]);
}
