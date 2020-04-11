"use strict";

const p = Promise.reject(4);

p.then(console.log)
    .then(() => console.log(5))
    .then(() => console.log(6))
    .catch(() => console.log("Ooopps!"));

setTimeout(() => p.then(console.log));


