"use strict";
const obj = {};
// в строгом режиме будет ошибка, а в нестрогом просто не работает
// undefined = 100500;

if (obj.prop === undefined) {
    console.log("Данные отсутствуют");
}

const fn = function() {
  let undefined = 100500;
  // if (typeof obj.prop === "undefined") { ...
  if (obj.prop === undefined) {
      console.log("Данные отсутствуют");
  } else {
      console.log("Данные есть");
  }
};

fn();