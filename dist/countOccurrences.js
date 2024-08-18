"use strict";
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple', 'grape', 'grape', 'orange'];
const fruitCount = fruits.reduce((acc, fruit) => {
    if (!acc[fruit]) {
        acc[fruit] = 1;
    }
    else {
        acc[fruit]++;
    }
    return acc;
}, {});
console.log(fruitCount);
