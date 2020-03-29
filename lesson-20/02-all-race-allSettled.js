"use strict";

const promises = [
    Promise.resolve(5),
    Promise.reject(9),
    Promise.resolve(2),
];

// последовательное исполнение промисов
// promises.reduce((acc, promise) => {
//     return acc
//         .then(() => promise)
//         .then(console.log)
// }, Promise.resolve());


const sumReducer = arr => arr.reduce((acc, item) => acc + item, 0);

// Promise.all() возвращает промис: fulfilled только если ВСЕ промисы перешли в fulfilled
// Promise.all(promises)
//     .then(sumReducer)
//     .then(console.log)
//     .catch(console.error);

const promises2 = [
    new Promise(resolve => {
        setTimeout(() => resolve(5), 1700);
    }),
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(9), 1400);
    }),
    new Promise(resolve => {
        setTimeout(() => resolve(2), 2900);
    }),
];

// Promise.race() ждёт только один промис, тот, который завершится первым
// и возвращает промис
// Promise.race(promises2)
//     .then(console.log)
//     .catch(console.error);

Promise.allSettled(promises)
    // all Settled передаёт в then массив с объектами, которые описывают произошедшее с промисами
    // их статус и значение или причина ошибки
    .then(results => results.filter(item => item.status === "fulfilled"))
    .then(results => results.map(item => item.value))
    .then(sumReducer)
    .then(console.log)
    .catch(console.error);