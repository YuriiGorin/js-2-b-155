"use strict";

// Итератор - вспомогательный объект, который позволяет перебирать другой объект
// т.е. перебирать значения в циклах или специальных методах, в т.ч. с оператором ...spread + for of
// нужен для создания итерабельного объекта

// множество всегда содержит только уникальные значения
const uniqueNames = new Set(["Ivan", "Maria", "Svetlana"]);

uniqueNames.add("Ivan");
uniqueNames.add("Petr");

for (const item of uniqueNames) {
    console.log(item);
}

const arr = [...uniqueNames];
console.log(arr);

// Symbol.iterator - глобальный символ, который используется для объявления итераторов
// Symbol.asyncIterator, Symbol.toStringTag, Symbol.species - well-known symbols
const data = {
    x: "test",
    y: "something else",
    z: 100,
    // в этом свойстве должна храниться функция, которая возвращает объект итератора
    [Symbol.iterator]() {
        const iterableProps = ["z", "x"];
        let current = 0;
        let self = this;
        return {
            next() {
                return {
                    value: self[iterableProps[current++]],
                    done: current > iterableProps.length,
                };
            },
        };
    },
};

for (const item of data) {
    console.log("Значение, полученное через итератор: " + item);
}

const list = [...data];
console.log(list);

console.log(".............");

// как работает for of и spread


// 1. Формируется объект с итератором, если Symbol.iterator - функция, то всё ок, иначе - ошибка
const iterator = uniqueNames[Symbol.iterator]();

// 2. Запускается бесконечный цикл
while (true) {
    // 3. на каждой итерации вызывается метод next() у объекта-итератора
    const result = iterator.next();
    if (result.done) {
        break;
    }

    // 4. в переменную цикла попадает значение result.value
    console.log("Имитируем итератор", result.value);
}

