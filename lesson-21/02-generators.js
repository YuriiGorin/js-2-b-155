"use strict";

// генератор - это особая разновидность функций, которые могут
// приостанавливать своё исполнение и возвращатся к нему по мере необходимости
// вызов генератора всегда порождает итератор

function* generator() {
    console.log("Первый вызов функции");
    // оператор yield возращает значение функции, приостанавливает её выполнение
    // и при повторном вызове функция продолжит работу уже на том месте, где приостановилась
    yield 3;
    console.log("Второй вызов функции");
    yield 2;
    console.log("Третий вызов функции");
    yield 1;
    console.log("Последний вызов функции");
}

console.log(generator);


for (const value of generator()) {
    console.log(value);
}

console.log(".............");

const it = generator();

while (true) {
    const result = it.next();
    if (result.done) {
        break;
    }

    console.log("Итерируем значения генератора: " + result.value);
}

console.log(".............");
const it2 = generator();
let { value } = it2.next();
console.log(value);

let { value: value2 } = it2.next();
console.log(value2);