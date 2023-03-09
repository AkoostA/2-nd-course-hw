function squareSum(numbers) {
    let result = numbers.map((num) => num ** 2);
    const init = 0;
    result = result.reduce(
        (acc, curr) => acc + curr,
        init
    );

    return result;
}

console.log(squareSum([1, 2])); // returns 5
console.log(squareSum([0, 3, 4, 5])); // returns 50
console.log(squareSum([])); // returns 0