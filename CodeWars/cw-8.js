function invert(array) {
    const result = array.map(n => {
        if (n >= 0) {
            return -n;
        } else {
            return n * -1;
        }
    });
    return result;
 }

 console.log(invert([1,2,3,4,5])); // [-1,-2,-3,-4,-5]
 console.log(invert([1,-2,3,-4,5])); // [-1,2,-3,4,-5]
 console.log(invert([])); // []
 console.log(invert([0])); // -0

// map(), условный оператор