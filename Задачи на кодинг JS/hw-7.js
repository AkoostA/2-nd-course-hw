// Задание 1
console.log("Задание 1");

const strJS = "js";

console.log(`Было - ${strJS}`);
console.log(`Стало - ${strJS.toUpperCase()}`);

// Задание 2
console.log("Задание 2");

const searchStart = (arr, str) => {
    let newArr = [];
    arr.forEach((item) => {
        if (item.toLowerCase().startsWith(str.toLowerCase())) {
            newArr.push(item) 
        }
    });
    return newArr;
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));

// Задание 3
console.log("Задание 3");

const numb32 = 32.58884;

console.log(`Число - ${numb32}`);
console.log(`Округляем до меньшего целого числа - ${Math.floor(numb32)}`);
console.log(`Округляем до большего целого числа - ${Math.ceil(numb32)}`);
console.log(`Округляем до ближайшего целого числа - ${Math.round(numb32)}`);

// Задание 4
console.log("Задание 4");

console.log("Данны числа 52, 53, 49, 77, 21, 32");
console.log(`Наименьшее число ${Math.min.apply(null, [52, 53, 49, 77, 21, 32])}`);
console.log(`Наибольшее число ${Math.max.apply(null, [52, 53, 49, 77, 21, 32])}`);

// Задание 5
console.log("Задание 5");

const randomNumb = () => {
    const min = 1;
    const max = 10;
    console.log(Math.round(Math.random() * (max - min) + min));
}

randomNumb();

// Задание 6
console.log("Задание 6");

const getRandomArrNumbers = (numb) => {
    const numbArr = new Array(Math.floor(numb / 2));
    for (let i = 0; i < numbArr.length; i++) {
        numbArr[i] = Math.floor(Math.random() * (numb + 1));
    }
    return numbArr;
}

console.log(getRandomArrNumbers(7));

// Задание 7
console.log("Задание 7");

const randomNumbRange = (a, b) => Math.round(Math.random() * (a - b) + b);

console.log(randomNumbRange(0, 10));

// Задание 8
console.log("Задание 8");

const myDate = new Date();

console.log(myDate);

// Задание 9
console.log("Задание 9");

const currentDate = new Date();

console.log(`Сегодня - ${currentDate}`);

currentDate.setDate(currentDate.getDate() + 73);

console.log(`Через 73 дня - ${currentDate}`);

// Задание 10
console.log("Задание 10");

const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];

const dateFull = (date) => {
    const hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    const dateRu = date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear() + " - это " + days[date.getDay()];

    if (minute < 10) {
        minute = "0" + minute;
    }
    if (second < 10) { 
        second = "0" + second; 
    }

    const result = (`Дата: ${dateRu} \nВремя: ${hour}:${minute}:${second}`);

    return result;
}

console.log(dateFull(myDate));