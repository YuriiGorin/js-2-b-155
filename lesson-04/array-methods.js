"use strict";

const data = [
    { w: 100, h: 200 },
    { w: 90, h: 110 },
    { w: 15, h: 10 },
    { w: 20, h: 20 },
];

// сформировать массив площадей прямоугольников
const squareArr = data.map(({w, h}) => w * h);
console.log(squareArr);
// сформировать массив из прямоугольников, ширина которых меньше 50
const rectangles = data.filter(({w}) => w < 50);
console.log(rectangles);
// найти суммарную площадь всех прямоугольников
const totalSquare = squareArr.reduce((acc, n) => acc + n);
const totalSquare2 = data.reduce((acc, {w, h}) => acc + w * h, 0);
console.log(totalSquare, totalSquare2);
// проверить, есть ли квадраты в массиве
const hasSquare = data.some(item => item.w === item.h);
if (hasSquare) {
    console.log("В массиве есть квадрат");
}

const students = [
    { name: "John", sex: "m", age: 17 },
    { name: "Samantha", sex: "f", age: 19 },
    { name: "Mary", sex: "f", age: 20 },
    { name: "Garfield", sex: "m", age: 13 },
];

// сформировать массив имён
const names = students.map(({ name }) => name);
console.log(names);

// найти средний возраст студентов
const avg = students.reduce((acc, { age }) => acc + age, 0) / students.length;
console.log(avg);

// сформировать массив женских имён
const femNames = students.filter(({ sex }) => sex === "f")
                         .map(({ name }) => name);
console.log(femNames);

// проверить, есть ли среди студентов хоть один несовершеннолетний
if (students.some(({ age }) => age < 18)) {
    console.log("Есть несовершеннолетний");
}

// убедиться, что все студенты совершеннолетние
if (students.every(({ age }) => age >= 18)) {
    console.log("Все совершеннолетние");
}

// найти первую девушку в группе
const firstFem = students.find(({ sex }) => sex === "f");
console.log(firstFem);

// найти старшего студента
const oldest = students.reduce((acc, item) => item.age > acc.age ? item : acc);
console.log(oldest);


const [, { name: secondFem = "not" } = {} ] = students.filter(({ sex }) => sex === "f");
console.log(secondFem);

const numbers = [10, 5, 8, 5, 8, 10, 1, 3, 1, 1];

const uniqueValues = numbers.reduce((acc, n) => acc.includes(n) ? acc : (acc.push(n), acc), []);
const uniqueValues2 = numbers.reduce((acc, n) => {
    if (!acc.includes(n)) {
        acc.push(n);
    }
    return acc;
}, []);

console.log(uniqueValues);