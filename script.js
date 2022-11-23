// ! ДЗ № 1 Hello user
// За допомогою prompt запитати ім'я користувача.
// За допомогою alert вивести "Hello, John! How are you?"
// Де John це те, що ввів користувач

// firstName = prompt("What is your name?");
// alert(`Hello, ${firstName}! How are you?`);

// ! ДЗ № 2 Математичні операції
// Створити скрипт для додавання, віднімання, множення та поділу двох чисел та виведення результатів.
// Користувач вводить два числа через два промпти, і повідомлення виводиться алертом з таким результатом:
//Користувач ввів 2 і 2:

// 2+2=4
// 2-2=0
// 2*2=4
// 2/2=1

// firstNumber = parseInt(prompt("Enter the number"));
// secondNumber = parseInt(prompt("Enter the number"));
// sum = firstNumber + secondNumber;
// minus = firstNumber - secondNumber;
// multiply = firstNumber * secondNumber;
// divide = firstNumber / secondNumber;

// alert(`Result:
// ${firstNumber} + ${secondNumber} = ${sum}
// ${firstNumber} - ${secondNumber} = ${minus}
// ${firstNumber} * ${secondNumber} = ${multiply}
// ${firstNumber} / ${secondNumber} = ${divide}
// `)

// ! ДЗ № 3 Години в секунди
// Напишіть скрипт, який переводить години в секунди і має робити насутпне:

// запитати у користувача кількість годин;
// порахувати, скільки секунд у цій кількості годин;
// записати обчислене значення у змінну;
// вивести цю змінну користувачеві через alert.

// hour = parseInt(prompt("Enter number of hours"));
// second = hour * 3600;
// alert(`In ${hour} hours, ${second} seconds.`);

// ! ДЗ № 4 Середнє значення
// Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:

// отримати від користувача через три prompt три числа
// показати через alert середнє арифметичне цих чисел

// firstNumder = parseInt(prompt("Enter number"));
// secondNumber = parseInt(prompt("Enter number"));
// thirdNumber = parseInt(prompt("Enter number"));

// arithmetic = Math.floor((firstNumder + secondNumber + thirdNumber) / 3);
// alert(`Среднее арифметическое чисел ${firstNumder}, ${secondNumber}, ${thirdNumber} равно ${arithmetic}.`);

// ! ДЗ № 5 switch...case
// ! С помощью if else

// let numOrStr = prompt('Input number or string (Введите число или строку');
// console.log(numOrStr);

// if(numOrStr === null) {
//     console.log('ви скасували');
//     alert('ви скасували');
// } else if(numOrStr.trim() === '') {
//     console.log('Empty String (Пустая строка)');
//     alert('Empty String (Пустая строка)');
// } else if (isNaN(+numOrStr) ) {
//     console.log('number is Ba_NaN (Не номер)');
//     alert('number is Ba_NaN (Не номер)');
// } else {
//     console.log('OK!');
//     alert('OK!');
// }

// ! С помощью switch case

// let numOrStr = prompt('Input number or string (Введите число или строку)');
// console.log(numOrStr);

// switch ((numOrStr) && ((isNaN(+numOrStr)) || (numOrStr.trim))) {
//       case null:
//         console.log('ви скасували');
//         alert('ви скасували');
//         break;
//     case '':
//         console.log('Empty String (Пустая строка)');
//         alert('Empty String (Пустая строка)');
//         break;
//    case true:
//                console.log('number is Ba_NaN (Не номер)');
//         alert('number is Ba_NaN (Не номер)');
//         break;
//     default:
//         console.log('OK! (Цифры)');
//         alert('OK! (Цифры)');
// }

// ! ДЗ № 6 SIMPLE QUIZ
// Вам нужно сделать простой тест.

// Задайте пользователям несколько вопросов (> 4), используя подсказку.
// Если ответ правильный, добавьте 10 баллов (за каждый правильный ответ).
// Если ответ неверный или пользователь нажал кнопку "Отмена" - баллы не добавляются.
// Когда пользователь ответит на все вопросы, покажите результат с помощью оповещения (например: У вас 30 баллов. Вы ответили правильно на 3/10.).

// Например, какой-то вопрос:
// Сколько будет 2+2?
// Солнце встает на востоке?
// Сколько будет 5/0?
// Какого цвета небо?
// Каков правильный ответ на главный вопрос жизни, Вселенной и всего такого? (42)

// points = 0;
// correctAnswer = 0;

// firstAnswer = parseInt(prompt("Сколько будет 2+2?"));
// if(firstAnswer === 4) {
//     points += 10;
//     correctAnswer += 1;
// } else {
//     alert("Не правильный ответ!!!");
// }

// secondAnswer = prompt("Сколько будет 5/0?");
// if((+secondAnswer === 0) || (secondAnswer.toLowerCase() === "нуль")) {
//       points += 10;
//     correctAnswer += 1;
//  } else {
//         alert("Не правильный ответ!!!");
//     }

// thirdAnswer = prompt("Солнце встает на востоке?");
// if(thirdAnswer.toLowerCase() === "да" || thirdAnswer.toLowerCase() === "yes") {
//     points += 10;
//     correctAnswer += 1;
// } else {
//     alert("Не правильный ответ!!!");
// }

// if (points === 1){
//     alert(`Вы ответили правильно на ${correctAnswer} вопрос и получили ${points} баллов.`)
// } else if (points > 1){
//     alert(`Вы ответили правильно на ${correctAnswer} вопроса и получили ${points} баллов.`)
// } else {
//       alert("Вы полный ЛУЗЕР!!! Вы не ответили ни на один вопрос!!!")
// }

// ! ДЗ № 7 Калькулятор
// 1) С помощью prompt запрашиваем у пользователя что он хочет сделать(+ - / *).
// Спрашиваем до тех пор, пока он не введет допустимое значение

// 2) Запрашиваем сколько операндов он хочет использовать.
// Это должно быть ЧИСЛО больше 1 и меньше 7.
// Спрашиваем пока пользователь не введет допустимое значение

// 3) Запрашиваем у пользователя каждый операнд.
// Это должно быть ЧИСЛО.
// Запрашиваем пока пользователь не введет допустимое значение.

// 4) С помощью alert или console.log выводим финальный результат действия(+ - / *).

// do {
// deystvie = prompt("Введи действие2 (+ - / *)").replaceAll(" ", "");
// } while(deystvie !== "+" && deystvie !== "-" && deystvie !== "/" && deystvie !== "*");

// alert (deystvie);
// do {
// answerNumber = parseInt(prompt("Сколько чисел будем использовать, от 2 до 6? ").replaceAll(" ", ""));
// } while (answerNumber <= 1 || answerNumber >= 7 || isNaN(answerNumber) || answerNumber === null);

// result = 0;

// for(i = 1; i <= answerNumber; i++) {
//     do {
// lubayaCifra = parseInt(prompt(`Введи абсолютно любое ${i}-e число`).replaceAll(" ", ""))
//     } while(lubayaCifra === null || isNaN(lubayaCifra));

//     switch(deystvie) {
// case "+":
//     result = i === 1 ? lubayaCifra : result + lubayaCifra;
//     break;
//     case "-":
//         if (i === 1) {
//             result = lubayaCifra;
//         } else {
//             result = result - lubayaCifra;
//         }
//         //result = i === 1 ? lubayaCifra : result - lubayaCifra;
//         break;
// case "/":
//     result = i === 1 ? lubayaCifra : result / lubayaCifra;
//     break;
//     case "*":
//         result = i === 1 ? lubayaCifra : result * lubayaCifra;
//         break;

//     }
// }
// alert(result);

//!!!!!!!!!!!!!!!!!!!!!!!!

// do {
//     operation = prompt("Выбери операцию (+ - / *)");
// } while (operation !== "+" && operation !== "-" && operation !== "/" && operation !== "*")

// do {
//     countOfOperands = parseInt(prompt("Сколько чисел вы хотите использовать, от 2 до 6?").replaceAll(" ", ""));
// } while (countOfOperands >= 7 || countOfOperands <= 1 || isNaN(countOfOperands));

// result = 0;

// for(i = 1; i <= countOfOperands; i++) {
// do {
//     number = parseInt(prompt(`Введи число ${i}`).replaceAll(" ",""));
// } while (isNaN(number));

// switch(operation) {
//     case "+":
//         result = result + number;
//         break;
//         case "-":
//             result = i === 1 ? number : result - number;
//             break;
//             case "/":
//                 result = i === 1 ? number : result / number;
//                 break;
//                 case "*":
//                     result = result * number;
//                     break;
// }

// }
// alert(result);

// !!!!!!!!!!!!!!!

// operation = prompt("Какую операцию хочешь сделать + - / * ???");

// while ((operation !== "+") && (operation !== "-") && (operation !== "/") && (operation !== "*")) {
//     operation = prompt("Какую операцию хочешь сделать + - / * ???");
// }
// alert(`Правильно, вы выбрали ${operation}.`)

//     operand = +prompt("сколько операндов он хочет использовать. От 1 до 7");

// while ((operand < 2) || (operand > 6)) {
//     alert("Не правильно, вы ввели число меньше 2 или больше 6");

//     operand = +prompt("сколько операндов он хочет использовать. От 1 до 7");
// }

// alert(`Правильно вы ввели число ${operand}, оно больше 1 и меньше 7`);

// if (operand === 2) {
// firstNumber = +prompt("Вы выбрали 2 операнда, введите число к первому операнду");
// console.log(firstNumber);
//  while (isNaN(firstNumber)) {
//         alert("Это не номер!!!")
//     firstNumber = +prompt("Вы выбрали 2 операнда, введите число к первому операнду");
// }

//    secondNumber = +prompt("Вы выбрали 2 операнда, введите число к второму операнду");
// console.log(secondNumber);
//  while (isNaN(secondNumber)) {
//         alert("Это не номер!!!")
//     secondNumber = +prompt("Вы выбрали 2 операнда, введите число к второму операнду");
// }

//     alert(`Правильно, вы ввели ${firstNumber} и ${secondNumber}`);

//     if (operation === "+") {
//         total = firstNumber + secondNumber;
//     } else if (operation === "-") {
//         total = firstNumber - secondNumber;
//     } else if (operation === "/") {
//         total = firstNumber / secondNumber;
//     } else if (operation === "*") {
//         total = firstNumber * secondNumber;
//     }

// alert(`Итог:
// вы выбрали ${operation}, вы ввели ${firstNumber}, ${secondNumber}
// ${firstNumber} ${operation} ${secondNumber} = (${total})
// `);
// }


// ! ДЗ № 8 Сумма факториалов

// Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом).
// Запустить цикл перебора от a до b с шагом h(ввод с клавиатуры).
// Посчитать сумму факториалов * чисел которые попадаются во время перебора.

// firstNumber = parseInt(prompt("Введите первое число"));
// while (isNaN(firstNumber)) {
//     alert("Это не число")

//     firstNumber = parseInt(prompt("Введите первое число"));
// }
// alert(`Вы ввели ${firstNumber}`)

// secondNumber = parseInt(prompt("Введите второе число"));
// while (isNaN(secondNumber) || firstNumber >= secondNumber) {

//     if (isNaN(secondNumber)) {
//         alert("Это не число");
//     } else if (firstNumber >= secondNumber) {
//         alert(`Первое число обязательно должно быть меньше второго, первое вы ввели "${firstNumber}"`);
//     }
//     secondNumber = parseInt(prompt("Введите второе число"));
// }

// alert(`Вы ввели ${secondNumber}`);


// minStep = secondNumber - firstNumber;

// step = parseInt(prompt("Введите шаг"));
// while (isNaN(step) || step > minStep) {
//     if (isNaN(step)) {
//         alert("Это не число");
//     } else if (step > minStep) {
//         alert(`Шаг должен быть меньше раницы между вторым и первым числом.
//         Вы ввели:
//         первое число "${firstNumber}"
//         второе число "${secondNumber}"
//         шаг должен быть не более "${minStep}"`);
//     }
//     step = parseInt(prompt("Введите шаг"));
// }

// sum = 0;
// for (i = firstNumber; i <= secondNumber; i = i + step) {
//     factorial = 1;
//     console.log(`Итерация числа ${i}`);

//     for (j = 1; j <= i; j++) {
//         factorial = factorial * j;
//     }

//     console.log(`Факториал равен ${factorial}`);

//     sum = sum + factorial;
// }
// console.log(`Сумма факториалов равна ${sum}`);
// alert(`Сумма факториалов равна ${sum}`);

// ! ДЗ № 9 Масив

// Створити масив, довжину та елементи якого задає користувач.
// Відсортувати масив за зростанням.
// Видалити елементи з масиву з 2 по 4(включно!).
// У міру змін виводити вміст масиву на сторінку.

// !newMas.push("asd"); добавляет в конце
// !newMas.unshift(123); добавляет в начале

// color = [];

// lengthArrey = parseInt(prompt("Введите длину массива."));
// while (isNaN(lengthArrey)) {
//     alert("Это не номер")
//     lengthArrey = parseInt(prompt("Введите длину массива."));
// }

// color[lengthArrey - 1] = undefined;

// console.log(`Вы ввели длину массива равную ${color.length}`);

// for (i = 0; i <= lengthArrey - 1; i++) {

//     element = parseInt(prompt(`Введите наименование ${lengthArrey} элементов`));
//     while (element === null || element === "" || isNaN(element)) {
//         alert("Ошибка")
//         element = parseInt(prompt(`Введите наименование ${lengthArrey} элементов`));
//     }
//     color[i] = element;
// }

// console.log(`Наш массив до сортировки ${color}`);

// for (i = 0; i < (color.length - 1); i++) {
//     flag = false;
//     for (j = 0; j < (color.length - i); j++) {
//         if (color[j] > color[j + 1]) {
//             [color[j], color[j + 1]] = [color[j + 1], color[j]];
//             flag = true;
//         }
//     }
//     if (!flag) break;
// }

// console.log(`Наш массив после сортировки ${color}`);

// newColor = color.splice(2, 3);

// console.log(`Наш массив после того как мы вырезали с 2 по 4 элемент (включительно), мы считаем от нуля.
//  ${color}`);

// ! ДЗ № 10 Рендер карточки товара

// Дано:

// Три товара с категории vegetables:
// cabbage = 8;
// avocado = 30;
// tomato = 10;

// Три товара с категории fruits:
// grapes = 20;
// raspberry = 25;
// coconut = 50;

// Задача: в зависимости от выбранного пользователем периода(winter или summer), категории(vegetables или fruits), товара с выбранной категории(vegetables: cabbage, avocado, tomato или fruits: grapes, raspberry, coconut), и количества единиц выбранного товара – посчитать финальную стоимость покупки и вывести всю информацию о выбранном товаре в html.
// Порядок действий:

// cabbage = 8;
// avocado = 30;
// tomato = 10;
// vegetables = [cabbage, avocado, tomato];

// grapes = 20;
// raspberry = 25;
// coconut = 50;
// fruits = [grapes, raspberry, coconut];

//1 Запрашиваем у пользователя период, в которой он совершает покупку: winter или summer.
// Если пользователь вводит winter, то финальное значение стоимости покупки будет умножаться на 2
// Если пользователь вводит summer, то финальное значение стоимости покупки будет умножаться на 0.8
// Важно:
// Продолжаем запрашивать у пользователя название периода до тех пор, пока не будет введено слово ‘winter’ либо ‘summer’.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до / внутри слова.
// !!!!!!!!!!!!!!!!!!!
// period = prompt('Выберите и введите время года, в которое вы совершаете покупку "winter" или "summer".').replaceAll(" ", "").toLowerCase();
// console.log(period);

// while (period !== "winter" && period !== "summer") {
//     alert('Не верно, введите "winter" или "summer".');
//     period = prompt('Выберите и введите время года, в которое вы совершаете покупку "winter" или "summer".').replaceAll(" ", "").toLowerCase();
// }

// alert(`Верно. Вы ввели "${period}".`);
// console.log(`Верно. Вы ввели "${period}".`);
// !!!!!!!!!!!!!!!!!!!!!
//2 Запрашиваем у пользователя категорию, с которой он будет далeе выбирать товар: vegetables или fruits.
//     Важно:
// Продолжаем запрашивать у пользователя название категории до тех пор, пока не будет введено слово ‘vegetables’ либо ‘fruits’.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до / внутри слова.
// !!!!!!!!!!!!!!!!!!
// category = prompt('Выберите и введите категорию с товаром, "vegetables" или "fruits".').replaceAll(" ", "").toLowerCase();
// console.log(category);

// while (category !== "vegetables" && category !== "fruits") {
//     alert('Не верно, введите "vegetables" или "fruits".');
//     category = prompt('Выберите и введите категорию с товаром, "vegetables" или "fruits".').replaceAll(" ", "").toLowerCase();
// }
// alert(`Верно. Вы ввели "${category}".`);
// console.log(`Верно. Вы ввели "${category}".`);

// !!!!!!!!!!!!!!!!!!!!!!!!
//3 Запрашиваем у пользователя товар в зависимости от выбранной ранее категории.
// Для категории vegetables пользователь может ввести название товара cabbage или avocado или tomato.
// Для категории fruits пользователь может ввести название товара grapes или raspberry или coconut.
//     Важно:
// Продолжаем запрашивать у пользователя название товара до тех пор, пока не будет введено название одного из трех допустимых товаров.
// Введенное пользователем значение может быть в любом регистре и с любым количеством пробелов до / внутри слова.
// !!!!!!!!!!!!!!!!
// if (category === "vegetables") {

//     product = prompt(`Вы выбрали категорию vegetables.
// Выберите и введите товар: "cabbage", "avocado" или "tomato".`).replaceAll(" ", "").toLowerCase();
//     console.log(product);

//     while (product !== "cabbage" && product !== "avocado" && product !== "tomato") {
//         alert('Не верно, введите "cabbage", "avocado" или "tomato".');
//         product = prompt(`Вы выбрали категорию vegetables.
// Выберите и введите товар: "cabbage", "avocado" или "tomato".`).replaceAll(" ", "").toLowerCase();
//     }
//     alert(`Верно. Вы ввели "${product}".`);
//     console.log(`Верно. Вы ввели "${product}".`);

// !!!!!!!!!!!!!!!!!
// } else if (category === "fruits") {
//     product = prompt(`Вы выбрали категорию fruits.
// Выберите и введите товар: "grapes", "raspberry" или "coconut".`).replaceAll(" ", "").toLowerCase();
//     console.log(product);

//     while (product !== "grapes" && product !== "raspberry" && product !== "coconut") {
//         alert('Не верно, введите "grapes", "raspberry" или "coconut".');
//         product = prompt(`Вы выбрали категорию fruits.
// Выберите и введите товар: "grapes", "raspberry" или "coconut".`).replaceAll(" ", "").toLowerCase();
//     }
//     alert(`Верно. Вы ввели "${product}".`);
//     console.log(`Верно. Вы ввели "${product}".`);
// }

// !!!!!!!!!!!!!!!!!!!!!!!!
//4 Запрашиваем у пользователя количество единиц ранее выбранного товара.
//     Важно:
// Введенное значение должно быть числом и не меньше 1.
// !!!!!!!!!!
// amount = parseInt(prompt(`Вы выбрали категорию ${category}.
// Вы выбрали товар ${product}.
// Введите колличество товара, не менее 1.`));
// console.log(amount);

// while (amount < 1 || isNaN(amount)) {

//     if (isNaN(amount)) {
//         alert('Не верно, это не цифра, введите колличество товара, не менее 1.');
//     } else if (amount < 1) {
//         alert('Не верно, вы ввели меньше 1, введите колличество товара, не менее 1.');
//     }

//     amount = parseInt(prompt(`Вы выбрали категорию ${category}.
// Вы выбрали товар ${product}.
// Введите колличество товара, не менее 1.`));
// }
// alert(`Верно. Вы ввели ${amount} шт.`);
// console.log(`Верно. Вы ввели ${amount} шт.`);

// if (category === "vegetables") {
//     if (product === "cabbage") {
//         sum = amount * vegetables[0];
//     } else if (product === "avocado") {
//         sum = amount * vegetables[1];
//     } else if (product === "tomato") {
//         sum = amount * vegetables[2];
//     }

// } else if (category === "fruits") {
//     if (product === "grapes") {
//         sum = amount * fruits[0];

//     } else if (product === "raspberry") {
//         sum = amount * fruits[1];
//     } else if (product === "coconut") {
//         sum = amount * fruits[2];
//     }
// }
// console.log(`Сумма до времени года ${sum} грн`);

// if (period === "winter") {
//     sum = sum * 2;
// } else if (period === "summer") {
//     sum = sum * 0.8;
// }

// console.log(`Сумма после времени года ${sum} грн`);
// !!!!!!!!!!!!!!!!!!

//5 Выводим в html информацию о выбранном товаре с финальной стоимостью покупки.Вариант вывода:

// document.write(`
// <div class="product" align="center">
//  <img src="images/${product}.svg" alt="${product}" width="100" height="100">
//   <p>Selected product: <b>${product}</b></p>
//   <p>Count of cabbages: <b>${amount}</b></p>
//   <p>Selected period: <b>${period}</b></p>
//   <p>Selected category: <b>${category}</b></p>
//   <p>Final sum: <b>${sum} UAH</b></p>
// </div>
// `);
// !!!!!!!!!!!!!!!!!!!!!!!!





// ! Простые числа

// from = 3;
// to = 99;

// for(; from <= to; from++) {
//     //console.log(startNumber);

// flag = true;

// for(i = 2; i < from && flag; i++) {
//     //if(startNumber % i === 0) flag = false;
//     if(!(from%i)) flag = false;
// }

//     if(!flag) {
//         console.log(`Число ${from} не простое`);
//     } else {
//         console.log(`Число ${from} простое`);
//     }


// }




// from = 3;
// to = 99;

// for (; from <= to; from++) {
//     flag = true;
//     for (i = 1; i < from; i++) {
// if(from%i)


//     }
// }





// from = 3;
// to = 50;

// for (from = 3; from <= to; from++) {
//     flag = true;
//     for (i = 2; i < from && flag; i++) {
//         //if ((from%i) === 0) flag = false;
//         if (!(from%i)) flag = false;
//     }
//     //if (flag === false) {
//         if (!flag) {
//         console.log(`Число ${from} не простое`);
//     } else {
//         console.log(`Число ${from} простое`);
//     }
// }

//!!!!!!!!!!!!!!!!!

// from = 3;
// to = 99;

// blabla: for (from = 3; from <= to; from++) {

//     for (i = 2; i < from; i++) {
//         if ((from % i) === 0) continue blabla;
//     }
//     console.log(`Число ${from} простое`);



// ! ДЗ 11. Rainbow render

// hero = ['Ivan'];
// native = ['York', 'Of'];
// destination = ['Poltava', 'In'];
// // Используя циклы, if/else, switch/case и методы.push(), .pop(), .unshift(), .shift(), .concat(), .splice(), .reverse().join():

// // 1. Объединить массивы destination, native, hero в общий массив rainbow.

// rainbow = hero.concat(native);
// rainbow = rainbow.concat(destination);
// console.log(`Соединили три массива в один ${rainbow}`);
// // Ivan, York, Of, Poltava, In

// // 2. Сделать реверс элементов полученного массива rainbow.
// rainbow.reverse();
// console.log(`Массив после реверса ${rainbow}`);
// //In, Poltava, Of, York, Ivan

// // 3. Изменить / добавить элементы массива rainbow так, что бы в итоге получился массив вида
// // ['Richard', 'Of', 'York', 'Gave', 'Battle', 'In', 'Vain'];

// rainbow.splice(0, 2); //вырезаем с 0 2 элемента
// rainbow.splice(2, 1); //вырезаем с 2 1 элемент
// rainbow.unshift("Richard"); // вставляем в начале
// // Richard, Of, York,
// rainbow.push("Gave"); // добавляем в конце
// rainbow.push("Battle");
// rainbow.push("In");
// rainbow.push("Vain");
// // Richard, Of, York, Gave, Battle, In, Vain
// console.log(`Массив ${rainbow}`);
// console.log(rainbow);

// newRainbow = rainbow.slice();

// // 4. Вывести элементы полученного массива в html в виде, который представлен в прикрепленном рисунке rainbow.png.
// blablaRainbow = [];
// for (i = 0; i < rainbow.length; i++) {
//     rainbow[i] = (rainbow[i]).toLowerCase();
//     // console.log(rainbow[i]);
//     blablaRainbow.push(`<div class="item">
// <div class="circle ${rainbow[i]}"></div>
// <div class="title">${newRainbow[i]}</div>
// </div>
//     `);
// }
// document.write(`
//     <div class="container">
// ${blablaRainbow.join("")}
//     </div>
//     `)


//         document.write(`
// <div class="item">
// <div class="circle ${rainbow[i]}"></div>
// <div class="title">${newRainbow[i]}</div>
// </div>
//     `)



// Шрифт надписей на картинке Quicksand.Вы можете взять любой))
// Использовать все методы не обязательно! Берем только те, которые помогут вам привести массив к такому виду, что бы вывести его как на прикрепленной картинке rainbow.png.


// ! ДЗ 12. Print right arrays

// Задача:
// sports = [
//     ['skier', '⛷'],
//     ['snowboarder', '🏂'],
//     ['apple', '🍎'],
//     ['hockey', '🏒'],
//     ['ice skate', '⛸'],
//     ['swimmer', '🏊'],
//     ['surfer', '🏄‍'],
//     ['watermelon', '🍉'],
//     ['lemon', '🍋'],
//     ['rowboat', '🚣'],
//     ['bicyclist', '🚴‍']
// ];

// console.log(sports);

// // 1. С массива sports с помощью метода.slice() скопировать в новый массив summer_sports массивы, которые относятся к летним видам спорта.
// summerSports = sports.slice(5, 11);
// console.log(summerSports);
// // 2. С массива sports с помощью метода.slice() скопировать в новый массив winter_sports массивы, которые относятся к зимним видам спорта.
// winterSports = sports.slice(0, 5);
// console.log(winterSports);
// // 3. С полученных массивов summer_sports и winter_sports вырезать в новый массив fruits те массивы, которые относятся к фруктам.
// fruits = [];

// fruits = fruits.concat(winterSports.splice(2, 1));
// fruits = fruits.concat(summerSports.splice(2, 2));
// console.log(fruits);

// // 4. Вывести все элементы полученных массивов summer_sports, winter_sports, fruits в консоль в виде, который изображен на рисунке console.png.

// console.log("");
// console.log("*** Winter ***");
// for(i = 0; i < winterSports.length; i++) {
// console.log(winterSports[i].join(": "));
// }

// console.log("");
// console.log("*** Summer ***");
// for(i = 0; i < summerSports.length; i++) {
// console.log(summerSports[i].join(": "));
// }

// console.log("");
// console.log("*** Fruits ***");
// for(i = 0; i < fruits.length; i++) {
// console.log(fruits[i].join(": "));
// }

// Способ 2!!!!!!!!!!!!

// newWinterSports = [];
// for (i = 0; i < winterSports.length; i++) {
//     newWinterSports.push(`${winterSports[i].join(": ")}\n`)
// }

// newSummerSports = [];
// for (i = 0; i < summerSports.length; i++) {
//     newSummerSports.push(`${summerSports[i].join(": ")}\n`)
// }

// newFruits = [];
// for (i = 0; i < fruits.length; i++) {
//     newFruits.push(`${fruits[i].join(": ")}\n`)
// }

// console.log(`
// *** Winter Sports ***
// ${newWinterSports.join("")}

// *** Summer Sports ***
// ${newSummerSports.join("")}

// *** Fruits ***
// ${newFruits.join("")}
// `);

// Способ 3!!!!!!!!!!!

// newWinterSports = [];
// for (i = 0; i < winterSports.length; i++) {
//     newWinterSports.push(`<p class="descriptiondz11">${winterSports[i].join(": ")}</p>`)
// }

// newSummerSports = [];
// for (i = 0; i < summerSports.length; i++) {
//     newSummerSports.push(`<p class="descriptiondz11">${summerSports[i].join(": ")}</p>`)
// }

// newFruits = [];
// for (i = 0; i < fruits.length; i++) {
//     newFruits.push(`<p class="descriptiondz11">${fruits[i].join(": ")}</p>`)
// }

// document.write(`
// <div class="itemdz11">
// <h1 class="titledz11">*** Winter Sports ***</h1>
// ${newWinterSports.join("")}
// </div>

// <div class="itemdz11">
// <h1 class="titledz11">*** Summer Sports ***</h1>
// ${newSummerSports.join("")}
// </div>

// <div class="itemdz11">
// <h1 class="titledz11">*** Fruits ***</h1>
// ${newFruits.join("")}
// </div>
// `);

// !ДЗ 13. Gaming cards ♠️♣️♥️♦️

// Рисуем колоду карт, которая состоит из:

// карт номиналом 2 - 10 всех мастей
// карт jack, queen, king всех мастей
// карт тузов всех мастей

// В макете используется:

// Шрифт https://fonts.google.com/specimen/Nerko+One
// Зеленый цвет доски #55aa55
// Черный цвет текста #353c4d
// Иконки 4 - x мастей и jack, queen, king в архиве images.zip

// Все теги рендерим с помощью js.

// Внешний вид задания НЕ важен, важен только JS - код))

// !!!!!!!!!!!!!!!!!!
// TRs = [];

// for (tr = 1; tr <= 7; tr++) {
//     TDs = [];
//     mastModel = ["clubs", "spades", "diamonds", "hearts", "clubs", "spades", "diamonds", "hearts"];
//     cardPerson = "";

//     for (td = 1; td <= 8; td++) {
//         data = "";
//         number = 0;
//         if (td >= 1 && td <= 4 && tr === 1) number = 2;
//         if (td >= 5 && td <= 8 && tr === 1) number = 3;
//         if (td >= 1 && td <= 4 && tr === 2) number = 4;
//         if (td >= 5 && td <= 8 && tr === 2) number = 5;
//         if (td >= 1 && td <= 4 && tr === 3) number = 6;
//         if (td >= 5 && td <= 8 && tr === 3) number = 7;
//         if (td >= 1 && td <= 4 && tr === 4) number = 8;
//         if (td >= 5 && td <= 8 && tr === 4) number = 9;
//         if (td >= 1 && td <= 4 && tr === 5) number = 10;
//         if (td >= 5 && td <= 8 && tr === 5) {
//             number = "J";
//             cardPerson = " card--person";
//             data = `<img class="person" src="images/jack.svg" alt="spades">`
//         }
//         if (td >= 1 && td <= 4 && tr === 6) {
//             number = "Q";
//             cardPerson = " card--person";
//             data = `<img class="person" src="images/queen.svg" alt="spades">`
//         }
//         if (td >= 5 && td <= 8 && tr === 6) {
//             number = "K";
//             cardPerson = " card--person";
//             data = `<img class="person" src="images/king.svg" alt="spades">`
//         }
//         if (td >= 1 && td <= 4 && tr === 7) {
//             number = "T";
//             cardPerson = " card--person";
//         }
//         if (td >= 5 && td <= 8 && tr === 7) {
//             number = "T";
//             cardPerson = " card--person";
//         }
//         if (td >= 5 && tr === 7) {
//             break;
//         }
//         if (td === 1 && tr === 7) {
//             data = `<img class="person" src="images/clubs.svg" alt="spades">`
//         }
//         if (td === 2 && tr === 7) {
//             data = `<img class="person" src="images/spades.svg" alt="spades">`
//         }
//         if (td === 3 && tr === 7) {
//             data = `<img class="person" src="images/diamonds.svg" alt="spades">`
//         }
//         if (td === 4 && tr === 7) {
//             data = `<img class="person" src="images/hearts.svg" alt="spades">`
//         }
//         mast = mastModel[td - 1];

//         TDs.push(`<div class="card${cardPerson}">
//     	<div class="card__info">${number}<img src="images/${mast}.svg" alt="${mast}"></div>
//       ${data}
//     	<div class="card__info">${number}<img src="images/${mast}.svg" alt="${mast}"></div>
//     </div>`)
//     }
//     TRs.push(`<div class="wrapper">${TDs.join("")}</div>`)
// }

// document.write(`${TRs.join("")}`);

// ! ДЗ 14. Реалізуйте функцію removeElement

// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

//     Наприклад:
// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5);
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]


// !!!!!!!!!!!!!!!!!!!!!!
// array = [1, 2, 3, 4, 5, 6, 7];
// console.log(`Массив изначально ${array}`)
// number = +prompt("Введите цифру которую хотите удалить, от 1 до 7");
// console.log(`Вы ввели ${number}`)

// indexNumber = array.indexOf(number);
// console.log(`Число ${number} имеет номер индекса ${indexNumber}`);

// array.splice(indexNumber, 1);

// console.log(`Массив потом ${array}`)

// !!!!!!!!!!!!!!!!!!!!!!!!

array = [1, 2, 3, 4, 5, 6, 7];
console.log(`Массив изначально ${array}`);

function removeElement(array, item) {
    indexNumber = array.indexOf(item);
    array.splice(indexNumber, 1);
}
removeElement(array, 3);

console.log(`Массив потом ${array}`);
console.log(array);

