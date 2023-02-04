// Задание 1

const lesser = (a, b) => {
    if (a <= b) {
        return a;
    } else {
        return b;
    }
}

console.log(`Задание 1 - ${lesser(6, 6)}`);

// Задание 2

const evenNotEven = (number) => {
    if (number % 2 == 0) {
        return "Число четное";
    } else {
        return "Число нечетное";
    }
}

console.log(`Задание 2 - ${evenNotEven(6)}`);

// Задание 3.1

const squareLog = (number) => console.log(`Задание 3.1 - ${number ** 2}`);

squareLog(6);

// Задание 3.2

const squareReturn = (number) => number ** 2;

console.log(`Задание 3.2 - ${squareReturn(6) - 36}`);

// Задание 4

const age = prompt("Сколько вам лет?");

const ageHello = (age) => {
    if (isNaN(age) || age < 0 || age == "") {
        return "Вы ввели неправильное значение";
    } else {
        return age < 13 ? "Привет, друг!" : "Добро пожаловать!";
    }
}

alert(ageHello(age));

console.log(`Задание 4 - ${ageHello(age)}`);

// Задание 5

const mult = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return "Одно или оба значения не являются числом";
    } else {
        return a * b;
    }
}

console.log(`Задание 5 - ${mult("Шесть", 6)}`);

// Задание 6

const squarePrompt = prompt("Введите число от 0 до 10");

const square = (num) => {
    if (isNaN(num) || num == "") {
        return `Переданный параметр не является числом`;
    } else if (num < 0 || num > 10) {
        return "Переданный параметр меньше 0 или больше 10";
    } else {
        num **= 2;
        return `${squarePrompt} в кубе равняется ${num}`;
    }
}

alert(square(squarePrompt));

console.log(`Задание 6 - ${square(squarePrompt)}`);