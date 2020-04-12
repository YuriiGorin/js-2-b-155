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

    async *[Symbol.asyncIterator]() {
        for (let i=1; i<=this._count; i++) {
            const content = await fs.readFile(`${this._src}/${i}.json`, "utf-8");
            yield JSON.parse(content)
        }
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