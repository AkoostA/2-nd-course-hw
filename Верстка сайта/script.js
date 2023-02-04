const seasons = () => {
    const date = Number(prompt("Введите номер месяца (от 1 до 12) и вы узнаете к какому времени года он относится"));

    if (isNaN(date) || date == "" || date < 1 || date > 12) {
        console.log("Вы ввели не корректное значение, попробуйте еще раз");
        alert("Вы ввели не корректное значение, попробуйте еще раз");
    } else if (date < 3 || date == 12) {
        console.log("Зима");
        alert("Зима");
    } else if (date > 2 && date < 6) {
        console.log("Весна");
        alert("Весна");
    } else if (date > 5 && date < 9) {
        console.log("Лето");
        alert("Лето");
    } else {
        console.log("Осень");
        alert("Осень");
    }
    return;
}

// const seasons = () => {
//     const date = Number(prompt("Введите номер месяца (от 1 до 12) и вы узнаете к какому времени года он относится"));

//     switch (date) {
//         case 12:
//         case 1:
//         case 2:
//             console.log("Зима");
//             alert("Зима");
//             break;
//         case 3:
//         case 4:
//         case 5:
//             console.log("Весна");
//             alert("Весна");
//             break;
//         case 6:
//         case 7:
//         case 8:
//             console.log("Лето");
//             alert("Лето");
//             break;
//         case 9:
//         case 10:
//         case 11:
//             console.log("Осень");
//             alert("Осень");
//             break;
//         default:
//             console.log("Вы ввели не корректное значение, попробуйте еще раз");
//             alert("Вы ввели не корректное значение, попробуйте еще раз");
//             break;
//     }
// }