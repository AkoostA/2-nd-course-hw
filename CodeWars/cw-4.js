function solution(str){
    const result = str.split('').reverse().join('');

    return result;
}

console.log(solution('world')); // returns 'dlrow'
console.log(solution('hello')); // returns 'olleh'
console.log(solution('')); // returns ''