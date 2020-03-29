"use strict";
// Promise.resolve(1)
//     .then(console.log);

// then & catch -> всегда возвраащают НОВЫЕ промисы

// Promise.reject() возвращает промис в состоянии rejected
const p1 = Promise.reject();
const p2 = p1.then(console.log);
console.log(p1);
console.log(p2);

console.log(p1 === p2);

p2
    .then(() => console.log("p2", 1))
    .then(() => console.log("p2", 2))
    .then(() => console.log("p2", 3))
    .then(() => console.log("p2", 4))
    .catch(() => console.log("Усё сломалось!"));

p1
    .then(() => console.log("p1", 1))
    .then(() => console.log("p1", 2))
    .then(() => console.log("p1", 3))
    .then(() => console.log("p1", 4))
    .catch(() => console.log("Усё сломалось!"));