var a, b, x;
function calculate(a, b, x) {
    let result;
    let error = 0;

    if (x < -2 || x > 9) {
        error = 1;
    } else if (-2 <= x && x <= 4) {
        result = Math.cos(x);
    } else if (4 < x && x < 9) {
        if (a * x + b < 0) {
            error = 2;
        } else {
            result = Math.sqrt(a * x + b);
        }
    } else if (x === 9) {
        result = Math.pow(x, 3) - b * x + 3;
    }

    switch (error) {
        case 1:
            console.log("x не належить області визначення функції.");
        case 2:
            console.log("Вираз підкореневий від'ємний.");
    }
    {
        console.log(`Відповідь коли f(${a, b, x}) = ${result}`);
        return result;
    }
}
calculate(4, 3, 7);
calculate(8, 9, -3);
calculate(1, 2, 3);
calculate(6, 4, 9);