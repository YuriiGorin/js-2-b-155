"use strict";

const factorial = function f(n) {
    if (n === 1) return 1;
    return n * f(n - 1);
};

const fn = function(n) {
    return n === 1 ? 1 : n * fn(n - 1);
};

const nod = function(a, b) {
    if (a === b) return a;
    return (a > b) ? nod(a - b, b) : nod(a, b - a);
};


console.log(nod(25, 15));