"use strict";

const Chance = require("chance");
const fs = require("fs").promises;
const chance = new Chance();

(async () => {
    const count = chance.integer({ min: 95000, max: 140000 });
    for (let i=1; i<=count; i++) {
        const data = {
            firstName: chance.first(),
            lastName: chance.last(),
            age: chance.age(),
        };

        await fs.writeFile(`./data/${i}.json`, JSON.stringify(data));
    }
})();


