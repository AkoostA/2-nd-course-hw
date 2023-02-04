// Задание 1
let hi = 0;

do {
    console.log("Привет");
    hi++;
} while (hi < 2);

// Задание 2

let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}

// Задание 3

for (let index = 7; index <= 22; index++) {
    console.log(index);
}

// Задание 4

const obj = {
    'Коля': 200,
    'Вася': 300,
    'Петя': 400
}

for (let cash in obj) {
    console.log(`${cash} — зарплата ${obj[cash]} долларов`);
}

// Задание 5

let n = 1000;
let num = 0;

for (; n > 50; num++) {
    n /= 2;
}

console.log(`Получилось число - ${n}. Количество итераций - ${num}`);

// Задание 6

const friday = 6;

for (let i = 1; i <= 31; i++) {
    if (i == friday) {
        console.log(`Сегодня ${i}-e число. Необходимо подготовить отчет.`);
    } else if (i - 7 == friday || i - 14 == friday || i - 21 == friday || i - 28 == friday) {
        console.log(`Сегодня ${i}-e число. Необходимо подготовить отчет.`);
    }
}