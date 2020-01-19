"use strict";

const sum = function() {
    // arguments - объект, а не массив
    console.log(arguments);
    let total = 0;
    for (let i=0; i<arguments.length; i++) {
        total += arguments[i];
    }
    return total;
};

// console.log(sum.length);

const c = sum(5, 3, 1, 3, 2, 1);
console.log("результат", c);

// ...имяПеременной - здесь используется REST-оператор, который собирает все аргументы в один массив
// и это именно массив, а не простой объект
const sum2 = function(...numbers) {
    let total = 0;
    for (let i=0; i<numbers.length; i++) {
        total += numbers[i];
    }
    return total;
};

console.log(sum2(5, 1, 3));

const sum3 = (...numbers) => numbers.reduce((a, b) => a + b, 0);

console.log(sum3(5, 1, 3));

console.log(sum3());