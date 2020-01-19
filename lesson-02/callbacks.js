"use strict";

const list = ["первое", "что-то ещё", "данные", "тест"];

// list.forEach(console.log);
// list.forEach((item) => console.log(item));

const displayItem = function(value, index) {
    console.log(`Значение элемента ${index} равно ${value}`);
};

// при вызове forEach был перадан callback - т.е. функция обратного вызова
// вызываем её не мы, а движок при переборе массива
list.forEach(displayItem);

setTimeout(function() { console.log("test") }, 1000);

const delay = function(fn) {
    setTimeout(function() {
        fn();
    }, 1000);
};

delay(() => console.log("test 2"));

const myForEach = function(arr, callback) {
    for (let i=0; i<arr.length; i++) {
        // вызываем функцию, передавая в неё значения элементов
        callback(arr[i], i, arr);
    }
};

console.log("----------");
myForEach(list, displayItem);