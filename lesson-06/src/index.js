import isObject from "lodash/isObject";
import axios from "axios";

import { user } from "./data";


// console.table(user);
//
// for (const prop in user) {
//     console.log(prop, user[prop]);
// }

// вовзращает массив имён свойств
// console.log(Object.keys(user.address));
// вернёт массив с парами свойств и значений в виде массива
// console.log(Object.entries(user.address));

// Object.keys(user).forEach(prop => console.log(user[prop]));

let html = "<table border='1'>";

Object.entries(user)
    .filter(([, value]) => !isObject(value))
    .forEach(([key, value]) => {
        html += `<tr>
            <td>${key}</td>
            <td>${value}</td>
        </tr>`;
    });

document.write(html + "</table>");

for (const prop of Object.keys(user)) {
    console.log(prop);
}

html = "<table border='1'>";

for (const [key, value] of Object.entries(user)) {
    if (isObject(value)) continue;

    html += `<tr>
            <td>${key}</td>
            <td>${value}</td>
        </tr>`;
}

document.write(html + "</table>");

axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
    .then(response => {
        // ответ сервера будет здесь в формате объекта
        const data = response.data;
        const arr = Object.entries(data.Valute).map(([code, { Value, Nominal }]) => ({
            code,
            value: (Value / Nominal).toFixed(4)
        }));

        const arr2 = Object.entries(data.Valute).map(([code, { Value, Nominal }]) => ({
            [code]: (Value / Nominal).toFixed(4)
        }));

        const arr3 = [];
        for (const [code, { Value, Nominal }] of Object.entries(data.Valute)) {
            arr3.push({
                code,
                value: (Value / Nominal).toFixed(4)
            });
        }

        console.log(arr, arr2, arr3);


        const arr4 = Object.entries(data.Valute)
            .reduce((acc, [Code, { Value, Nominal, Previous }]) => {
                const obj = { Code, Nominal, Value };
                if (Value > Previous) {
                    acc.push(obj);
                }
                return acc;
            }, []);

        console.log(arr4);
    });