"use strict";
const p1 = Promise.resolve(1);
const p2 =  new Promise(resolve => {
    setTimeout(() => resolve(2), 2400);
});

p1.then(result => {
    console.log(result);
    return p2;
})
.then(console.log);
