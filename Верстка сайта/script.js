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

const words = () => {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);


    words.forEach(words => alert(words));
    const firstWord = prompt("Какое было первое слово?");
    const lastWord = prompt("Какое было последнее слово?");

    if (firstWord.toLowerCase() === words[0].toLowerCase() && lastWord.toLowerCase() === words[6].toLowerCase()) {
        alert("Поздравляю, вы угадали оба слова!");
        return;
    } else if (firstWord.toLowerCase() === words[0].toLowerCase() || lastWord.toLowerCase() === words[6].toLowerCase()) {
        alert("Вы были близки к победе!");
        return;
    } else {
        alert("Вы ответили неверно.");
    }
}