var a, b, x;
function calculate(a, b, x) {
    let result;

    if (x > -2 && x <= 4) {
        result = Math.cos(x);
    } else if (x > 4 && x < 9) {
        if (a * x + b < 0) {
            console.log('Помилка');
            return undefined;
        } else {
            result = Math.sqrt(a * x + b);
        }
    } else if (x === 9) {
        result = Math.pow(x, 3) - b * x + 3;
    } else {
        console.log('Помилка');
        return undefined;
    }

    {
          console.log(`Відповідь коли f(${a,b,x}) = ${result}`);
          return result;
        }
}
calculate(3, 7, 4);
calculate(-1, 10, 0);
calculate(10, 15, 7);
calculate(52, 33, 8);