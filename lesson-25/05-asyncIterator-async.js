"use strict";
const fs = require("fs").promises;

class FileReader {
    constructor(dir) {
        this._src = dir;
        this._count = 0;
    }

    async init() {
        const files = await fs.readdir(this._src);
        this._count = files.length;
    }

    [Symbol.asyncIterator]() {
        let current = 0;
        let self = this;
        return {
            async next() {
                current++;
                if (current < self._count) {
                    const content = await fs.readFile(`${self._src}/${current}.json`, "utf-8");
                    return {
                        done: false,
                        value: JSON.parse(content),
                    }
                } else {
                    return { done: true };
                }
            },
        };
    }

}


(async () => {
    const reader = new FileReader("./data/");
    await reader.init();
    let count = 0;
    let totalAge = 0;
    for await (const data of reader) {
        count++;
        totalAge += data.age;
    }

    console.log((totalAge / count).toFixed(2));
})();