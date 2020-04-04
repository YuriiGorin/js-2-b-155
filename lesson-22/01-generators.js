"use strict";

// генератор - это особая разновидность функций, которые могут
// приостанавливать своё исполнение и возвращатся к нему по мере необходимости
// вызов генератора всегда порождает итератор

const testGen = function* (n) {
    for (let i=0; i<n; i++) {
        yield ~~(Math.random() * 100);
    }
};

const arr = [...testGen(10)];
console.log(arr);

const arr2 = [];

const it = testGen(5);
while(true) {
    const result = it.next(100);
    if (result.done) {
        break;
    }

    arr2.push(result.value);
}

console.log(arr2);