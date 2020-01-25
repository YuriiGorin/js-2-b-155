"use strict";

const numbers = [10, 3, -3, 1, 0, 10, -4, 3];

// результатом вызова map является НОВЫЙ МАССИВ, созданный на основе элементов исходного массива
// т.е. кол-во элементов square и numbers совпадает, но элементы square созданы вызовом колбэка
const square = numbers.map(x => x**2); // numbers.map(function(x) { return x**2 })
// console.log(square);
const names = ["Иван", "Мария", "Светлана"];
const capsNames = names.map(name => name.toUpperCase()); // names.map(function(name) { return name.toUpperCase(); });
console.log(capsNames);

// метод filter формирует массив из элементов исходного массива, включая в него только те, для которых вызов
// колбэка вернул true
const positiveNumbers = numbers.filter(n => n > 0); // numbers.filter(function(n) { return n > 0; })
const negativeNumbers = numbers.filter(n => n < 0);

console.log(positiveNumbers, negativeNumbers);

// метод reduce возвращает одно значение, используя для его расчета вызовы колбэка
const positiveSum = positiveNumbers.reduce((acc, b) => acc + b);
console.log(positiveSum);

const myMap = function(arr, callback) {
    const newArr = [];
    for (let i=0; i<arr.length; i++) {
        let val = callback(arr[i], i, arr);
        newArr.push(val);
    }
    return newArr;
};

console.log(myMap(numbers, x => x**2));

const myFilter = function(arr, callback) {
    const newArr = [];
    for (let i=0; i<arr.length; i++) {
        if(callback(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
};

// массив отрицательных чисел
console.log(myFilter(numbers, n => n < 0));

const myReduce = function(arr, callback, initialValue) {
    let value = initialValue;
    let startIndex = 0;

    if (typeof initialValue === "undefined") {
        value = arr[0];
        startIndex = 1;
    }

    for (let i=startIndex; i<arr.length; i++) {
        // передаем в колбэк накопленное значение и очередной элемент массива
        value = callback(value, arr[i]);
    }
    return value;
};

console.log(myReduce(positiveNumbers, (acc, n) => acc + n, 100));

const capsNames2 = names.reduce((acc, n) => {
    acc.push(n.toUpperCase());
    return acc;
}, []);

const capsNames3 = names.reduce((acc, n) => (acc.push(n.toUpperCase()), acc), []);

console.log(capsNames2, capsNames3);

const calculate = function(value, ...callbacks) {
    let result = value;
    // for (let i=0; i<callbacks.length; i++) {
    //     result = callbacks[i](result);
    // }

    callbacks.forEach(fn => {
        result = fn(result)
    });
    return result;
};

const calculateReduce = function(value, ...callbacks) {
    return callbacks.reduce((acc, fn) => fn(acc), value);
};

let n = calculate(10.95, Math.ceil, x => x*x, n => n / 2, Math.floor);
let n2 = calculateReduce(10.95, Math.ceil, x => x*x, n => n / 2, Math.floor);
console.log(n, n2);

const isNumber = n => !isNaN(n) && isFinite(n);
const validate = function(value, ...validators) {
    let result = true;
    validators.forEach(fn => {
        if (!fn(value)) {
            result = false;
        }
    });

    // for (let i=0; i<validators.length; i++) {
    //     if (validators[i](value) === false) {
    //         result = false;
    //         break;
    //     }
    // }

    return result;
};

let validateReduce = function(value, ...validators) {
    return validators.reduce((acc, fn) => acc && fn(value), true)
};

let validateEvery = function(value, ...validators) {
    return validators.every(fn => fn(value));
};

const functions = [ isNumber, n => n > 0, function (n) {
    return n % 2 === 0;
} ];

let isValid = validate("10", ...functions);
let isValid2 = validateReduce("10", ...functions);
let isValid3 = validateEvery("10", ...functions);

console.log(isValid, isValid2, isValid3);

const hasOnlyPositiveNumbers = positiveNumbers.every(item => item > 0);
console.log(hasOnlyPositiveNumbers);

console.log(numbers.some(n => n > 0));

const myEvery = function(arr, callback) {
    for (let i=0; i<arr.length; i++) {
        if (!callback(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
};