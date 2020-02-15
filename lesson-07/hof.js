"use strict";

const makeCounter = function (initValue = 0) {
    return function() {
        return ++initValue;
    };
};

const fn = makeCounter();
console.log(fn());
console.log(fn());
console.log(fn());


console.log("--------");

const f2 = makeCounter(5);
console.log(f2());
console.log(f2());
console.log(f2());


const sum = function(n) {
    let acc = 0;
    if (typeof n !== "number") {
        return acc;
    }
    acc += n;

    return function fn(n) {
        if (typeof n !== "number") {
            return acc;
        }
        acc += n;
        return fn;
    }
};

const sum2 = function(n) {
    let acc = 0;

    return (function fn(m) {
        if (typeof m !== "number") {
            return acc;
        }
        acc += m;
        return fn;
    })(n);
};


let n1 = sum(5)(8)(3)(1)();
let n2 = sum2(5)(8)(3)(1)();
console.log("Sum:", n1, n2);