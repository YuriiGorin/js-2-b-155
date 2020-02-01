import isString from "lodash/isString";

const dictionary = {
    en: "Hello World",
    es: "Hola Mundo",
    ru: "Привет, мир!",
    de: "Hallo Welt",
};

export const random = function(max) {
    return Math.floor(Math.random() * max);
};

export const greetings = function(lang = "ru") {
    if (isString(lang)) {
        const key = lang.toLowerCase();
        if (dictionary[key]) {
            return dictionary[key];
        }

        return "";
    }

    // к созданию и "выбросу" ошибки, т.е. выполнение и функции и всего скрипта прекращается
    throw new TypeError("Параметр lang должен быть строкой");
};

