function solution(str){
    const result = str.split('');
    result.reverse();

    return result.join('');
}

console.log(solution('world')); // returns 'dlrow'
console.log(solution('hello')); // returns 'olleh'
console.log(solution('')); // returns ''

// Split, reverse, join