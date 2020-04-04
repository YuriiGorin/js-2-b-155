"use strict";

const fs = require("fs").promises;

const compileCss = async function () {
    let css = "";
    const files = await fs.readdir("./css/");
    console.log(files);

    for (const file of files) {
        css += await fs.readFile("./css/" + file, "utf-8");
    }

    await fs.writeFile("./dist/main.css", css);
};


compileCss();