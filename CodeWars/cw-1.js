function strCount(str, letter){
    let result = 0;
    str = str.split('');
    str = str.filter(function (str) {
        if (str === letter) result += 1;
      })

    return result;
}

console.log(strCount("Hello", 'o')); // returns 1
console.log(strCount("Hello", 'l')); // returns 2
console.log(strCount("", 'z')); // returns 0

// split, filter, length?