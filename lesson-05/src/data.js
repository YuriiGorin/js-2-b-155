const arr = [5, 9, 1, 3, 5, 7];
const students = [
    { name: "John", sex: "m", age: 17 },
    { name: "Samantha", sex: "f", age: 19 },
    { name: "Mary", sex: "f", age: 20 },
    { name: "Garfield", sex: "m", age: 13 },
];

console.log("Загружаем модуль");

// задаём значение для экспорта по умолчанию, т.е. именно эти данные можно будет загрузить при импорте
export default {
    numbers: arr,
    students,
}