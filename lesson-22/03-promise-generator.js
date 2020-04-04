"use strict";

const fs = require("fs").promises;
const co = require("co");

const compileCss = function* () {
    let css = "";
    const files = yield fs.readdir("./css/");
    console.log(files);

    for (const file of files) {
        css += yield fs.readFile("./css/" + file, "utf-8");
    }

    yield fs.writeFile("./dist/main.css", css);
};

co(compileCss);


// const run = function(gen) {
//     // создаем итератор
//     const it = gen();
//     const runNext = (val) => {
//         // val может быь undefined, если не передано значение или если
//         // у промиса нет значения
//
//         // вызов it.next(val) возвращает промис, но в генератор передаёт значение предыдущего промиса
//         const { value: promise, done } = it.next(val);
//         if (!done) {
//             promise.then(runNext)
//         }
//     };
//
//     // вызываем it.next() для обработки промисов
//     runNext();
// };
//
// run(compileCss);
