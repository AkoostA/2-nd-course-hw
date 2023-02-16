// Задание 1
let a = 10
alert(a)
a = 20
alert(a)

// Задание 2
let iphoneCreator = 2007
alert(yearCreator)

// Задание 3
let nameCreator = "Brendan Eich"
alert(nameCreator)

// Задание 4
let numberTen = 10
let numberTwo = 2
alert(`${numberTen + numberTwo}, ${numberTen - numberTwo}, ${numberTen * numberTwo}, ${numberTen / numberTwo}`)

// Задание 5
let result = 2 ** 5
alert(result)

// Задание 6
a = 9
let b = 2
alert(a / b)

// Задание 7
let num = 1
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

// Задание 8
let age = prompt("Сколько вам лет?")
alert(age)

// Задание 9
let user = {
    name: "akoosta",
    age: 28,
    isAdmin: true
}
// Задание 9.1
user["city of residence"] = "Kazan";
// Задание 9.2
user.age = 29
// Задание 9.3
delete user['city of residence'];
// Задание 9.4
let info = prompt("Какую информацию хотите узнать о пользователе?")
alert(user[info])

// Задание 10
let yourName = prompt("Привет, как вас зовут?")
alert(`Привет, ${yourName}!`)