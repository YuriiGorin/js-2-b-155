"use strict";

const promise = new Promise((resolve, reject) => {
    // ~~ - двойная побитовая инверсия приводит число к целому
    const n = ~~(Math.random() * 10);
    if (n < 4) {
        return reject(new Error("Слишком маленькое число!"));
    }

    resolve(n);
});

// promise
//     // в then можно передать два колбэка: первый для fulfilled, второй для rejected
//     .then(
//         n => console.log("Получили число: " + n),
//         // этот обработчик не перехватит ошибки из соседнего  (выше onFulfilled)
//         err => console.log("Произошла ошибка", err)
//     );

// .catch это краткая запись для .then(null, onRejected)
// promise.catch(err => console.log("Произошла ошибка", err));

promise
    .then(n => console.log("Получили число: " + n))
    // catch в конце цепочки перехватит любые ошибки во всех предыдущих промисах
    .catch(err => console.log("Произошла ошибка", err));