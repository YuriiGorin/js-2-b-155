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
    }

    _sort() {
        this._items.sort((a, b) => a - b);
    }

    *[Symbol.iterator]() {
        for (let i=0; i<this._items.length; i++) {
            yield this._items[i];
        }
    }
}


const numbers = [10, 2, 8, 3];

const list = new SortedList(numbers);

for (const item of list) {
    console.log(item);
}

list.add(0, 9, 2);

console.log(...list); // 0, 2, 3, 8, 10