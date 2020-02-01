import shuffle from "lodash/shuffle";
import isObject from "lodash/isObject";
import Vue from "vue/dist/vue.esm.browser.min";

// содержимое экспорта по умолчанию будет загружено в переменную test
import test from "./data";
// загрузили только функцию из модуля
import { greetings } from "./helpers";

const arr = [5, 9, 1, 3, 5, 7];
console.log(shuffle(test.numbers));

console.log(isObject(test.numbers));

console.log("test");

const students = test.students.map(({name, age}) => ({ name, isAdult: age >= 18 }));

console.log(students);

console.log(greetings("ru"));
// console.log(greetings(null));

window.addEventListener("load", () => {
   new Vue({
       el: "#app",
       data: {
           studentsList: students,
           title: "Список студентов",
           onlyAdults: false,
       },
       computed: {
           // краткое объявление метода
           students() {
               const { studentsList: students, onlyAdults } = this;
               return students
                   .filter(item => onlyAdults && item.isAdult || !onlyAdults)
           },
       }
   });
});