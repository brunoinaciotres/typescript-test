"use strict";
const items = [
    { name: 'apple', category: 'fruit' },
    { name: 'carrot', category: 'vegetable' },
    { name: 'banana', category: 'fruit' },
    { name: 'broccoli', category: 'vegetable' },
    { name: 'rice', category: 'grain' },
    { name: 'beans', category: 'grain' }
];
const newItems = items.reduce((acc, element) => {
    if (!acc[element.category]) {
        acc[element.category] = [];
        acc[element.category].push(element);
    }
    else {
        acc[element.category].push(element);
    }
    return acc;
}, {});
console.log(newItems);
