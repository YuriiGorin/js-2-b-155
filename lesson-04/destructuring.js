"use strict";

const user = {
    name: "John",
    age: 15,
    address: {
        city: "Spb",
        country: "Russia",
        zip: 121002,
    },
    phones: ["+79111231231", "88123121212"]
};

// для email задано значение по умолчанию, если такого свойства в объекте нет, то у переменной будет это значение,
// а не undefined
let { name, age, email = ""} = user;
// let name = user.name;
// let age = user.age;
console.log(name, age, email);


// при деструктуризации возможно использование псевдонимом
let { name: name2 } = user;
console.log(name2);


let { email: myEmail = "..." } = user;
console.log(myEmail);

// деструктуризация может быть вложенной
// объявлена только одна переменная
let { address: { zip } } = user;
// = {} - если самого адреса нет, то он будет принят за пустой объект
// let { address: { zip = "" } = {} } = user;

console.log(zip);
let { address: { city = "" } = {} } = { name: "George", age: 15 };
console.log(city); // empty string


let { phones: [, phone = null] = [] } = user;
console.log(phone);
