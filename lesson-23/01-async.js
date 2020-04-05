"use strict";

// async превращает функцию в особую разновидность генератора
// но НЕ делает её саму асинхронной
// при вызове функции код в ней начинает выполняться синхронно
// а управление генератором через итератор не требуется
// async-функция всегда возвращает промис
async function test() {
    console.log("1");
}

async function test2() {
    console.log("1");
    return Promise.resolve();
}


const fn = async (x) => x * x;

console.log(test);

setTimeout(() => console.log("2"));
test();
Promise.resolve().then(() => console.log("3"));
console.log("4");


test().then(() => console.log("ololo"));