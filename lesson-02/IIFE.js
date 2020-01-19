"use strict";
// IIFE - Immediately Invoked Function Expression

// объявили безымянную функцию, обернули её в круглые скобки и ещё одними скобками вызвали
(function() {
    let a = 5;
    console.log(a);
})();

// альтернативно

(function() {
    let a = 10;
    console.log(a);
}());

// в современном коде встречается в основном вот такой вариант
// (async function() {
//    const data = await toDoSomething(); 
// }());