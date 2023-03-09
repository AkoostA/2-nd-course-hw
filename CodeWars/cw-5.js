function addLength(str) {
    const spl = str.split(' ');
    const result = spl.map(i => {
        return i + " " + i.length;
    });

    return result;
    }

console.log(addLength("apple ban"));  // returns ["apple 5", "ban 3"]
console.log(addLength("you will win")); // returns ["you 3", "will 4", "win 3"]