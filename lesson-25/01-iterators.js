"use strict";

class SortedList {
    /**
     *
     * @param arr - произвольный массив
     */
    constructor(arr = []) {
        this._items = [...arr];
        this._sort();
    }

    add(...args) {
        this._items.push(...args);
        this._sort();
        // this._items = [...this._items, ...args].sort();
    }

    _sort() {
        this._items.sort((a, b) => {
            if (a < b) return -1;
            if (a > b) return 1;
            return 0;
        });

        // this._items.sort((a, b) => a - b);
    }

    [Symbol.iterator]() {
        let current = 0;
        let { length } = this._items;
        let { _items } = this;
        return {
          next() {
              if (current < length) {
                  return { done: false, value: _items[current++] }
              }

              return { done: true };
          }
        };
    }
}


const numbers = [10, 2, 8, 3];

const list = new SortedList(numbers);

for (const item of list) {
    console.log(item);
}

list.add(0, 9, 2);

console.log(...list); // 0, 2, 3, 8, 10