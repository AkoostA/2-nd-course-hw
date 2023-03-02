function mango(quantity, price) {
    let free = quantity / 3;
    if (free % quantity !== 0) free = Math.floor(free);
    const notFree = quantity - free;
    const result = notFree * price

    return result;
}

console.log(mango(2, 3)); // returns 6
console.log(mango(5, 3)); // returns 12
console.log(mango(9, 5)); // returns 30
console.log(mango(5, 9)); // returns 36

// Арифметические операторы, условное ветвление