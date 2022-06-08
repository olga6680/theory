/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {

//     },
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцените его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


// //Условия 

// if (4 == 4) {
//     console.log('ok');
// } else {
//     console.log('error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('error');
// } else if (num > 100) {
//     console.log('много');
// } else {
//     console.log('ok');
// }

// // тернарный оператор 

// (num === 50) ? console.log('ok') : console.log('error');

// switch комбинация 
// const num = 50;

// switch (num) {
//     case 49:
//         console.log('неверно');
//         break;
//     case 100:
//         console.log('неверно');
//         break;
//     case 50:
//         console.log('в точку');
//         break;
//     default:
//         console.log('не в этот раз');
//         break;
// }

// Циклы

// let num = 50;

// while (num <= 55) { //Будет показывать пока выполняется условие
//     console.log(num);
//     num++;  //увеличивать на 1
// }


//*** */
// do {
//     console.log(num);
//     num++;
// }

// while (num < 55);


//*** */
// for (let i = 1; i < 8; i++) { //начальное условие; конечное условие; в каких промежутках
//     console.log(i);
// }


//****
// let num = 50;

// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }


//*** */
// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;     //прервет цикл на этом условии
//     }
//     console.log(i);

// }

//*** */
// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue; //пропускает этот шаг в цикле
//     }
//     console.log(i);

// }


//Практика 

// const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {

//     },
//     actors: {},
//     genres: [],
//     privat: false
// };


// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его?', '');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');

//         i--; //Если это условие не выполнилось, мы вернемся на одно повторение
//     }

//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// console.log(personalMovieDB);

// ФУНКЦИИ
// let num = 20;

// function showFirstMessage(text) { // function declaration создается до начала выполнения кода
//     console.log(text);
//     let num = 10;
//     console.log(num);
// }

// showFirstMessage('Hello World!');
// console.log(num);

// // function calc(a, b) {
// //     return (a + b);  // return - заканчивает функцию. Все, что дальше уже не сработает
// // }

// // console.log(calc(4, 3));
// // console.log(calc(5, 6));
// // console.log(calc(10, 6));

// function ret() {
//     let num = 50;
//     return num; // return возвращает результат работы функции. выводит наружу
// }

// const anotherNum = ret();
// console.log(anotherNum);

// const logger = function() { // function expression создается только после объявления
//     console.log('Hello!');
// }; // после такой функции ставим ;

// logger();

// // Стрелочные функции

// // const calc = (a, b) =>  a + b ; //если стрелочная функция в одну строку, можно опускать фигурные скобки

// const calc = (a, b) => {
//     console.log('1');
//     return a + b;
// };

// МЕТОДЫ И СВОЙСТВА СТРОК
// методы - это вспомогательные функции
// свойства - вспомогательные значения

// const str = "test";
// // const arr = [1, 2, 4];

// // console.log(str.length); // length - количество символов внутри строки. Это свойство
// // console.log(arr.length); // length - количество символов внутри массива. Вызывается через .

// // получить свойства и методы можно в браузере, введя в консоли console.dir(Number);

// // console.log(str[2]); // 2 - индекс элемента в строке

// // метод изменения регистра

// // console.log(str[2] = 'd');  //так ничего не поменяет !!

// // console.log(str[2].toUpperCase()); 
// // console.log(str.toLowerCase()); 
// // console.log(str);

// const fruit = "Some fruit";

// console.log(fruit.indexOf("fruit")); // этот метод находит с какого индекса начинается нужный кусочек
// console.log(fruit.indexOf("q")); // получим -1  - значит нет такой буквы в строке


// // метод slice()
// const logg = "Hello World";

// console.log(logg.slice(6, 11)); // обрезает часть строки. Первая цифра начало, вторая - конец

// console.log(logg.slice(6)); // обрезает до конца

// console.log(logg.slice(-5, -1)); // обрезает с нумерацией индекса с конца строки

// // метод substring()
// console.log(logg.substring(6, 11)); // такой же, как slice(), но не поддерживает отрицательные аргументы

// //метод substr()
// console.log(logg.substr(6, 5)); // вторая цифра - количество символов, которое нужно вырезать

// //МЕТОДЫ И СВОЙСТВА ЧИСЕЛ

// //Можно посмотреть в консоли браузера введя Math.

// // Округление

// const num = 12.2;

// console.log(Math.round(num));

// // Перевод строки в число

// const test = "12.2px";

// // console.log(parseInt(test)); // получим целое число 12

// console.log(parseFloat(test)); // получим просто число 12.2


//Практика 

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) { // isNaN() проверка, что введено не число
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//     }
// }

// start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {

//     },
//     actors: {},
//     genres: [],
//     privat: false
// };




// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');

//             i--; //Если это условие не выполнилось, мы вернемся на одно повторение
//         }
//     }
// }

// // rememberMyFilms();


// function detectPersonalLevel() {

//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// // detectPersonalLevel();




// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         // const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         // personalMovieDB.genres[i - 1] = genre;
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenres();

// CALLBACK FUNCTIONS

// function first() {
//     //Do something
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// // Если функции идут в коде одна за другой, это не начит, что они выполняются также

// // function learnJS(lang, callback) {
// //     console.log(`я учу: ${lang}`);
// //     callback();
// // }

// // learnJS('JavaScript', function() {
// //     console.log('Я прошел этот урок');
// // });

// function learnJS(lang, callback) {
//     console.log(`я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок');
// }

// learnJS('JavaScript', done);

// МАССИВЫ И ПСЕВДОМАССИВЫ

// const arr = [1, 2, 3, 6, 8];
// arr[99] = 0; // Задаем число 0 в массив с индексом 99
// console.log(arr.length); // Вопрос на собеседовании:
// // Как соотносится length с индексом элементов массива?
// // Ответ: Последний индекс + 1
// console.log(arr);


// arr.pop(); // Удаляет последний элемент из массива
// arr.push(10); // Добавляет элкмент в конец массива


// console.log(arr);

// Перебор массива

// for (let i =0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// Этот метод перебора ↓ используется, когда нужно прервать цикл, т.е. breack и continue

// for (let value of arr) {
//     console.log(value);
// }

// forEach() - самый часто используемый метод перебора

// const arr = [1, 2, 3, 6, 8];

// arr.forEach(function(item, i, arr) {  // item - условное обозначение элементов (назвать можно по-любому)
//     // i - порядковый номер лементов
//     console.log(`${i}: ${item} внутри массива ${arr}`);

// });

// split() представьте, что есть список огромный через запятую. Мы сделаем список по порядку

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products);

// // join() и наоборот из списка делаем список через запятую

// console.log(products.join('; '));

// sort() сортировка в алфавитном порядке. Всегда сортирует только, как строки

const arr = [1, 13, 26, 6, 8];

arr.sort(compareNum);

console.log(arr);

function compareNum(a, b) {
    return a - b;
}

// ↑ а вот так числа отсортируются по порядку