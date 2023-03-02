function nearestSq(n) {
    let result = Math.sqrt(n);
    if (n % result === 0) {
        return n;
    } else {
        result = Math.round(result);
        result *= result;
    }

    return result;
}

console.log(nearestSq(1)); // returns 1
console.log(nearestSq(2)); // returns 1
console.log(nearestSq(10)); // returns 9
console.log(nearestSq(111)); // returns 121
console.log(nearestSq(9999)); // returns 10000

// Math.sqrt и условное ветвление