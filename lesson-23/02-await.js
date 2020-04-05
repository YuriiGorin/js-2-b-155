"use strict";

// IIFE - Immediately Invoked Function Expression
(async function() {
    // await работает как yield в обычных генераторах:
    // т.е. приостанавливает выполнение функции и позволяет его возобновлять
    // с передачей значений
    try {
        const a = await Promise.reject(5);
        // такое тоже возможно, но не имеет особого смысла
        const b = await 10;
        console.log(a * 2 * b);
        if (5 < await Promise.resolve(15)) {
            console.log("так тоже работает")
        }
    } catch(err) {
        console.error("Что-то пошло не так, но мы уже работаем над проблемой...")
    }
})();