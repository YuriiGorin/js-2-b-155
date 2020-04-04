"use strict";

const twoWayGen = function* () {
    console.log("Первый вызов");

    // тут происходит приостановка выполнения функции, НО при следующем вызове
    // в константу сохраняется значение, которое внешний код передаёт в метод next()
    const a = yield 10;
    console.log("a = " + a);

    const b = yield 5;
    console.log("b = " + b);

    const c = yield 0;
    console.log("c = " + c);

    console.log("Генератор завершил работу");
};

const it = twoWayGen();

const result1 = it.next("one");
console.log(result1);

const result2 = it.next("two");
console.log(result2);

const result3 = it.next("three");
console.log(result3);

const result4 = it.next("four");
console.log(result4);

console.log("----------------");
// for of и spread при работе с итератором ничего не передают в метод next()
// поэтому в генератор поступают undefined значения
for (const value of twoWayGen()) {
    console.log(value);
}
console.log("----------------");
console.log([...twoWayGen()]);


// общаться с генератором можно в цикле
const it2 = twoWayGen();
while(true) {
    const result = it2.next(Math.random());
    if (result.done) {
        break;
    }

    console.log(result.value);
}
