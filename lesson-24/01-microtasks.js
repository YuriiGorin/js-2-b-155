"use strict";

// любой JS движок знает 2 типа задач:
// макротаски и микротаски

/* к макротаскам относят:
  - сами скрипты
  - обработчики событий
  - таймеры (timeout, interval)

  к микротаскам:
  - promise then / catch
  - queueMicrotask()
 */

console.log(1);
setTimeout(() => console.log(2), 0);
Promise.resolve(3).then(console.log);

Promise.resolve(4)
    .then(console.log)
    .then(() => console.log(5))
    .then(() => console.log(6));

setTimeout(() => {
    console.log("-----------------------");
    Promise.resolve(10)
        .then(console.log)
        .then(() => console.log(11));
}, 0);

Promise.resolve(7)
    .then(console.log)
    .then(() => console.log(8))
   // .then(() => setTimeout(() => console.log(8), 0))
    .then(() => console.log(9));

