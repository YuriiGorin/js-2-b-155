"use strict";

const data = {
    x: "test",
    y: "something else",
    z: 100,
    // в этом свойстве должна храниться функция, которая возвращает объект итератора
    [Symbol.asyncIterator]() {
        const iterableProps = ["z", "x"];
        let current = 0;
        let self = this;
        return {
            next() {
                return Promise.resolve({
                    value: self[iterableProps[current++]],
                    done: current > iterableProps.length,
                });
            },
        };
    },
};

(async () => {
    for await (const item of data) {
        console.log("Значение, полученное через итератор: " + item);
    }
})();