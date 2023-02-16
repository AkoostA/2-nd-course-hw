// Задание 1
console.log("Задание 1\n ");

const arrMult = (arr) => {
    let sum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        sum = sum * arr[i];
    }
    return sum;
};

const arrAdd = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
};

const each = (arr, call) => call(arr);

console.log(each([3, 4, 1, 9], arrMult));
console.log(each([3, 4, 1, 9], arrAdd));

// Задание 2
console.log("\nЗадание 2\n ");

const users = [
    { name: 'Jon', age: 22 },
    { name: 'Richard', age: 18 },
    { name: 'Anton', age: 32 },
    { name: 'Lida', age: 23 },
    { name: 'Bob', age: 44 }
];

const sortAge = (a, b) => a.age - b.age;

const getSortedArrayObj = (obj) => obj.sort(sortAge);

console.log(getSortedArrayObj(users));

// Задание 3
console.log("\nЗадание 3\n ");

const arrTestRevers = [1, '4', 9, 'two'];
const arrTestNumber = [1, '4', false, 9, 'two'];

const reversArr = (arr) => arr.reverse();

const toNumberArr = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != Number) arr[i] = Number(arr[i]);
        if (isNaN(arr[i])) arr.splice(i, 1);
    }
    return arr;
};

console.log(each(arrTestRevers, reversArr));
console.log(each(arrTestNumber, toNumberArr));

// Задание 4
console.log("\nЗадание 4\n ");

const timer = () => {
    let date = new Date();
    console.log(date);
    const interval = setInterval(() => {
        date = Date();
        console.log(date);
    }, 3 * 1000);

    setTimeout(() => {
        clearInterval(interval);
        console.log('30 секунд прошло');
    }, 30 * 1000)
};

timer();

// Задание 5
setTimeout(() => {
    console.log("\nЗадание 5\n ");
}, 30 * 1000);

function calling() {
    console.log('Звоню!')
};

function beeps(call) {
    setTimeout(() => {
        console.log('Идут гудки...')
        call();
    }, 1000);
}

function talk() {
    console.log('Разговор')
}

setTimeout(() => {
    calling();
    beeps(talk);
}, 30 * 1000);