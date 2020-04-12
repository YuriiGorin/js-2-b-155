"use strict";
const fs = require("fs").promises;

class FileReader {
    constructor(dir) {
        this._src = dir;
        this._count = 0;
        this.list = [];
    }

    async init() {
        const files = await fs.readdir(this._src);
        this._count = files.length;
        for (const file of files) {
            const content = await fs.readFile(`${this._src}/${file}`, "utf-8");
            this.list.push(JSON.parse(content));
        }
    }
}


(async () => {
    const reader = new FileReader("./data/");
    await reader.init();
    let count = 0;
    let totalAge = 0;
    for (const data of reader.list) {
        count++;
        totalAge += data.age;
    }

    console.log((totalAge / count).toFixed(2));
})();