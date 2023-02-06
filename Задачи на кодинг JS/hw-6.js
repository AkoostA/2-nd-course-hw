// Задание 1
console.log("Задание 1");

const checkArr = [1, 5, 4, 10, 0, 3];

for (const item of checkArr) {
    console.log(item);

    if (item === 10) {
        break;
    }
}

// Задание 2
console.log("Задание 2");

console.log(`Позиция числа 4 в check массиве - ${checkArr.indexOf(4)}`);

// Задание 3
console.log("Задание 3");

const joinArr = [1, 3, 5, 10, 20];

console.log(joinArr.join(' '))

// Задание 4
console.log("Задание 4");

const tenArr = new Array(10);
const evenArr = [];

for (let i = 0; i < tenArr.length; i++) {
    tenArr[i] = Math.round(Math.random() * 11);
    if (tenArr[i] % 2 === 0) {
        evenArr.push(tenArr[i]);
    }
}

console.log(tenArr);
console.log(evenArr);

// Задание 5
console.log("Задание 5");

const nestedArr = [];

for (let i = 0; i < 3; i++) {
    nestedArr[i] = [];

    for (let j = 0; j < 3; j++) {
        nestedArr[i].push(1);
    }
}

console.log(nestedArr);

// Задание 6
console.log("Задание 6");

const pushArr = [1, 1, 1];

pushArr.push(2, 2, 2);

console.log(pushArr);

// Задание 7
console.log("Задание 7");

const sortArr = [9, 8, 7, 'a', 6, 5];

sortArr.sort();
sortArr.pop();

console.log(sortArr);

// Задание 8
console.log("Задание 8");

const promptArr = [9, 8, 7, 6, 5];
const promptNumb = Number(prompt("Введите число от 0 до 10 для проверки, есть ли данное число в массиве."))

if (promptArr.includes(promptNumb)) {
    console.log("Данное число есть в массиве");
} else {
    console.log("Такого числа нет в массиве");
}

// Задание 9
console.log("Задание 9");

const abcdef = "abcdef";
const reverseArr = abcdef.split('');

reverseArr.reverse();

console.log(reverseArr.join(''));

// Задание 10
console.log("Задание 10");

const sixArr = new Array(6);

const randomArr = (arr) => {
    for (let i = 0, min = 1, max = 10; i < arr.length; i++) {
        arr[i] = Math.round(Math.random() * (max - min)) + min;
    }
}

const averageArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

randomArr(sixArr);

console.log(sixArr);
console.log(averageArr(sixArr));

// Задание 11
console.log("Задание 11");

const doubleArr = [
    [1, 2, 3],
    [4, 5, 6]
];

const oneArr = doubleArr.flat();
// const oneArr = [].concat(...doubleArr);

console.log(oneArr);

// Задание 12
console.log("Задание 12");

const fiveArr = new Array(5);

randomArr(fiveArr);

console.log(fiveArr);

for (let i = 0, sum = 0; i < fiveArr.length; i++) {
    if (i === (fiveArr.length - 1)) {
        console.log(`Последний элемент массива - ${fiveArr[i]}`);
    } else {
        sum = fiveArr[i] + fiveArr[i + 1];
        console.log(sum);
    }
}