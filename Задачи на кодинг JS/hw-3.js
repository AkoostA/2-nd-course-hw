// Задание - 1

let password = 'qwerty';
let checkPassword = prompt('Введите пароль');

if (checkPassword === password) {
    console.log('Пароль введен верно');
} else {
    console.log('Пароль введен неправильно');
}

// Задание - 2

let c = 2;

c > 0 && c < 10 ? console.log('Верно') : console.log('Неверно');

// Задание - 3

let d = 13;
let e = 322;

d > 100 || e > 100 ? console.log('Верно') : console.log('Неверно');

// Задание - 4

let a = Number('2');
let b = Number('3');

alert(a + b);
console.log(a + b);

// Задание - 5

let monthNumber = 12;

switch (monthNumber) {
    case 12:
    case 1:
    case 2:
        console.log('Зима');
        break;
    case 3:
    case 4:
    case 5:
        console.log('Весна');
        break;
    case 6:
    case 7:
    case 8:
        console.log('Лето');
        break;
    case 9:
    case 10:
    case 11:
        console.log('Осень');
        break;
    default: console.log('В году 12 месяцев');
        break;
}

// Задание - 7

let even = prompt('Пожалуйста, введите любое число');

isNaN(even) ? console.log('Это не число') : even % 2 === 0 ? alert('Число четное') : alert('Число нечетное');

// Задание - 8

let clientOS = 0;
let iosLink = 'Установите версию приложения для iOS по ссылке';
let androidLink = 'Установите версию приложения для Android по ссылке';

clientOS === 0 ? console.log(iosLink) : console.log(androidLink);

// Задание - 9

clientOS = 1;
let clientDeviceYear = 2015;
let iosLinkOld = 'Установите облегченную версию приложения для iOS по ссылке';
let androidLinkOld = 'Установите облегченную версию приложения для Android по ссылке';

if (clientOS === 0) {
    clientDeviceYear >= 2015 ? console.log(iosLink) : console.log(iosLinkOld);
} else {
    clientDeviceYear >= 2015 ? console.log(androidLink) : console.log(androidLinkOld);
}