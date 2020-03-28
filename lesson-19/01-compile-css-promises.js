"use strict";

const fs = require("fs").promises;

// const readFiles = (files) => {
//     let css = "";
//
//     let promise = fs.readFile("./css/" + files[0], "utf-8")
//         .then(data => css += data);
//
//     for (let i=1; i<files.length; i++) {
//         promise = promise
//             .then(() => fs.readFile("./css/" + files[i], "utf-8"))
//             .then(data => css += data);
//     }
//
//     return promise;
// };

// const readFiles = (files) => {
//     let css = "";
//
//     // let promise = new Promise(function (resolve) {
//     //     resolve();
//     // });
//
//     // краткая запись для создания промиса в состоянии Fulfilled
//     // это нужно, чтобы в начале цепочки промисов оказался такой, который гарантирует
//     // начало её исполнения, но не влияет на результаты работы
//     let promise = Promise.resolve();
//
//     for (const file of files) {
//         promise = promise
//             .then(() => fs.readFile("./css/" + file, "utf-8"))
//             .then(data => css += data);
//     }
//
//     return promise;
// };

const readFiles = (files) => {
    let css = "";

    return files.reduce((acc, file) => {
        return acc
            .then(() => fs.readFile("./css/" + file, "utf-8"))
            .then(data => css += data);
    }, Promise.resolve());
};

const readFilesAll = (files) => {
    return Promise.all(
        files.map(file => fs.readFile("./css/" + file, "utf-8"))
    );
};


// fs.readdir("./css/")
//     .then(readFiles)
//     .then((data) => fs.writeFile("./dist/main.css", data));

fs.readdir("./css/")
    .then(readFilesAll)
    .then((data) => fs.writeFile("./dist/main.css", data.join("")));

// функция readdir планирует чтение списка файлов из папки
// но не читает их мгновенно
// поэтому можно считать, что здесь происходит обработка события
// т.е. указанный callback будет вызван, когда движок произведет чтение всего списка файлов
// console.log(1);
// fs.readdir("./css/", (err, files) => {
//     if (err) return console.error(err);
//     let css = "";
//     const readFile = function fn(index) {
//         if (index === files.length) {
//             return fs.writeFile("./output/main.css", css, (err) => {
//                 if (err) return console.error(err);
//                 console.log("Запись файла успешно завершена");
//             });
//         }
//         fs.readFile("./css/" + files[index], "utf-8", (err, content) => {
//             if (err) return console.error(err);
//             css += content;
//             fn(index + 1);
//         });
//     };
//
//     readFile(0);
// });
// console.log(2);
