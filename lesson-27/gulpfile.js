"use strict";
const { src, dest } = require("gulp");
const less = require("gulp-less");
const cleanCss = require("gulp-clean-css");
const ap = require("gulp-autoprefixer");
const webpackStream = require("webpack-stream");
const webpackProductionConfig = require("./webpack/prod");
const webpackDevelopmentConfig = require("./webpack/common");

const compileCss = () => {
    return src("./src/css/main.less")
        .pipe(less())
        .pipe(ap({
            overrideBrowserslist: "last 3 version",
            grid: "autoplace",
        }))
        .pipe(cleanCss())
        .pipe(dest("./build/"))
};

const compileProdJs = () => {
    return src("./src/js/**/*.js")
        .pipe(webpackStream(webpackProductionConfig))
        .pipe(dest("./build/"));
};

const compileDevJs = () => {
    return src("./src/js/**/*.js")
        .pipe(webpackStream(webpackDevelopmentConfig))
        .pipe(dest("./build/"));
};


module.exports = {
    compileCss,
    compileProdJs,
    compileDevJs,
};