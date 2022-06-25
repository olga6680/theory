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

// Цикл в цикле
// for (let i = 0; i < 3; i++) {
//     console.log(i);
//     for (let j = 0; j < 3; j++) {
//         console.log(j);
//     }
// }

// классический пример цикла - пирамидка из звездочек

//*
//**
//***
//****
//*****

// let result = '';
// const lengths = 7;

// for (let i = 1; i < lengths; i++) {

//     for (let j = 0; j < 1; j++) {
//         result += "*";
//     }

//     result += "\n";
// }

// console.log(result);

////////// Метки в циклах

// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k == 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }

// }

//получим 
// First level: 0
// Second level: 0
// Third level: 0
// Third level: 1
// First level: 1
// Second level: 0
// Third level: 0
// Third level: 1
// First level: 2
// Second level: 0
// Third level: 0
// Third level: 1


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k == 2) break first;
//             console.log(`Third level: ${k}`);
//         }
//     }

// }

//Получим 
// First level: 0
// Second level: 0
// Third level: 0
// Third level: 1


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

//аргументы функции

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
//     // return function() {}
// }

// // promotion(convert(500, usdCurr));
// const res = convert(500, usdCurr);
// promotion(res);

// convert(500, usdCurr);
// convert(500, eurCurr);

// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('Done');
// }

// test();

// // получится
// // 0
// // 1
// // 2
// // 3

// function doNothing() {};
// console.log(doNothing() === undefined);

//любая функция, которая не содержит return будет выдавать undefined (пример с console.log)
//после return нельзя ставить перенос строки. Дальше код не пойдет

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

// Если функции идут в коде одна за другой, это не начит, что они выполняются также

// function learnJS(lang, callback) {
//     console.log(`я учу: ${lang}`);
//     callback();
// }

// learnJS('JavaScript', function() {
//     console.log('Я прошел этот урок');
// });

// function learnJS(lang, callback) {
//     console.log(`я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок');
// }

// learnJS('JavaScript', done);

// ОБЪЕКТЫ

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// // console.log(options.name);

// // // удаляем какое-нибудь свойство

// // delete options.name;

// // console.log(options);

// // перебор свойств

// // for (let key in options) {
// //     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// // }

// //выдаст в консоли
// // Свойство name имеет значение test
// // Свойство width имеет значение 1024
// // Свойство height имеет значение 1024
// // Свойство colors имеет значение [object Object] - это объект внутри объекта
// //чтобы его достать используется цикл в цикле

// // for (let key in options) {
// //     if (typeof(options[key]) === 'object') {
// //         for (let i in options[key]) {
// //             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// //             //например так проще понять
// //             // console.log(options["colors"]["bg"])
// //         }
// //     } else {
// //         console.log(`Свойство ${key} имеет значение ${options[key]}`);
// //     }

// // }

// // //как подсчитать сколько свойств у объекта
// // let counter = 0;
// // for (let key in options) {
// //     if (typeof(options[key]) === 'object') {
// //         for (let i in options[key]) {
// //             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// //             counter++;
// //             //например так проще понять
// //             // console.log(options["colors"]["bg"])
// //         }
// //     } else {
// //         console.log(`Свойство ${key} имеет значение ${options[key]}`);
// //         counter++;
// //     }

// // }

// // console.log(counter);


// // более простой метод узнать количество свойств


// //console.log(Object.keys(options)); // получаем массив со всеми ключами

// console.log(Object.keys(options).length); // получаем количество элементов в массиве

// такие методы мы можем создавать вручную

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log("Test");
//     }
// };

// options.makeTest();

// // деструктиризация объекта

// // console.log(options["colors"]["bg"]) // Такая запись не очень верная и громозская

// //с помощью деструктуризации можно вытаскивать элементы объекта в качестве отдельных структур

// const {border, bg} = options.colors;

// console.log(border);

// console.log(NaN || 2 || undefined);

// console.log(NaN && 2 && undefined);

// console.log(1 && 2 && 3);
// console.log(!1 && 2 || !3);

// console.log(25 || null && !3);

// console.log(NaN || null || !3 || undefined || 5);

// console.log(NaN || null && !3 && undefined || 5);

// console.log(5 === 5 && 3 > 1 || 5);


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger || cola || fries === 3 || nuggets) {
//     console.log('Done!')
// }


// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;

// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!');
// }


//Практика trim() method

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
//         const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
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

// МАССИВЫ И ПСЕВДОМАССИВЫ

// const arr = [1, 2, 3, 6, 10];

// arr.pop(); // удаляет последний элемент массива
// arr.push(11); // добавляет элемент в конец массива

// для работы с началом массива очень редко применяются методы shift(), unshift()
// потому, что изменяется нумерация всех элементов массива
// console.log(arr);

// for (let i = 0; i < arr.length; i++) { // перебор элементов с помощью цикла 
//     console.log(arr[i]); //arr.length - пока не закончатся все элементы
// }

// for (let value of arr) { // идентично предыдущему. 
//     console.log(value);  //value - произвольное условное название всех элементов
// }

// console.log(arr.length); //получим длинну массива 5

// arr[99] = 0; // на 99 позицию добавляем в массив 0

// console.log(arr.length);// теперь получим 100

// console.log(arr); // [ 1, 2, 3, 6, 10, <94 empty items>, 0 ] т.е. 94 пустых ячейки


// метод forEach

// const arr = [1, 2, 3, 6, 10];

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// 0: 1 внутри массива 1,2,3,6,10
// 1: 2 внутри массива 1,2,3,6,10
// 2: 3 внутри массива 1,2,3,6,10
// 3: 6 внутри массива 1,2,3,6,10
// 4: 10 внутри массива 1,2,3,6,10


// метод split() - преображает строку в массив

// const str = prompt("", "");
// const product = str.split(", "); //здесь надо указать, через какой разделитель будут элементы в массиве
// console.log(product);

// (6) ['`22`at', 'xhfd', 'b', 'agre', 'sgseh ', 'sdbhsh']
// 0: "`22`at"
// 1: "xhfd"
// 2: "b"
// 3: "agre"
// 4: "sgseh "
// 5: "sdbhsh"
// length: 6


//метод join() -наоборот преображает массив в строку

// console.log(product.join('; ')); //здесь тоже необходимо указать разделитель

// wrer; sgtg; gyfj; thaiuth; hshsh


//метод sort() - сортирует в алфавитном порядке либо по-порядку, первых цифр в числе

// const str = prompt("", "");
// const product = str.split(", ");
// product.sort();

// console.log(product.join('; ')); 

// dhdrh; eryry; twer; twta; yeye

// const arr = [1, 12, 13, 6, 10];
// arr.sort();
// console.log(arr);

// [ 1, 10, 12, 13, 6 ]

// const arr = [1, 12, 13, 6, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) { // функция для правильной сортировки чисел
//     return a - b;
// }

//  [1, 6, 10, 12, 13]


// ПЕРЕДАЧА ПО ССЫЛКЕ ИЛИ ПО ЗНАЧЕНИЮ

// let a = 5,
//     b = a;

// b = b + 5;    

// console.log(b);
// console.log(a);

// 10
// 5

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // передает ссылку, а не сам обьект

// copy.a = 10; //поэтому здесь мы модифицируем не копию, а сам обьект, т.е. через ссылку на него

// console.log(copy);
// console.log(obj);

// { a: 10, b: 1 }
// { a: 10, b: 1 }

// поэтому для создания копий массивов и обьектов сущществует несколько способов

//1. с помощью цикла


// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10; //поменяет только в копии
// newNumbers.c.x = 10; // поменяет в обоих массивах

// // мы создали поверхностную копию. 
// //Она меняет свойства копий только в родителях, во вложенных структурах нет 
// //(меняет по ссылке на оригинал)

// console.log(newNumbers);
// console.log(numbers);

//2. assign() - помещает обьект в обьект

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const add = {
//     d: 17,
//     e: 20
// };

// // console.log(Object.assign(numbers, add));

// //{ a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 20 }

// //чтобы просто создать копию обьекта можно поместить в него пустой обьект
// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);

// { d: 17, e: 20 }
// { d: 20, e: 20 }

// Копирование массивов
//3. метод slice()

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'dfaj';

// console.log(newArray);
// console.log(oldArray);

// //4. Оператор разворота spreat оператор

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'instagram', 'facebook'];

// console.log(internet);      

// [
//     'youtube',
//     'vimeo',
//     'rutube',
//     'wordpress',
//     'livejournal',
//     'blogger',
//     'instagram',
//     'facebook'
//   ]

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// // 2
// // 5
// // 7

// const array = ["a", "b"];

// const newArray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q };


// ООП

// js при использовании каких-либо методов, переводит строку в обьект

// let str = "some";
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// // string
// // object

// console.dir([1, 2, 3]);

// Array(3)
// 0: 1
// 1: 2
// 2: 3
// length: 3

// const soldier = {  // общий прототип солдата
//     health: 400,    // здоровье
//     armor: 100      // броня
// };

// const jonh = {  // конкретный солдат Джон
//     health: 100
// };  

//теперь нужно сделать, 
// чтобы он обладал свойсвами прототипа солдата 
// и модифицированными методаими (здоровье то слабое)

// jonh.__proto__ = soldier;  //устаревшее свойство, сейчас редко используется

// console.log(jonh);
// console.log(jonh.armor); //взял свойство armor из прототипа солдата

// { health: 100 }
// 100

// если мы, к примеру добавим прототипу какую-нибудь функцию, 
// то она появится и у Джона

// const soldier = {  // общий прототип солдата
//     health: 400,    // здоровье
//     armor: 100,      // броня
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const jonh = {  // конкретный солдат Джон
//     health: 100
// }; 

// jonh.__proto__ = soldier;

// jonh.sayHello();

// __proto__ уже не нужно применять, вместо нее применяются такие команды

// 1. Если объект Джон уже заранее был создан setPrototypeOf()

// const soldier = {  // общий прототип солдата
//     health: 400,    // здоровье
//     armor: 100,      // броня
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const jonh = {  // конкретный солдат Джон
//     health: 100
// }; 

// // jonh.__proto__ = soldier;

// Object.setPrototypeOf(jonh, soldier); // это идентичная устаревшей команда

// jonh.sayHello();


// 2. Если мы еще не знаем, каким Джон будет Object.create()

// const soldier = {  // общий прототип солдата
//     health: 400,    // здоровье
//     armor: 100,      // броня
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const jonh = Object.create(soldier); // мы создаем Джона по прототипу солдата

// jonh.sayHello();


//Практика

// const personalMovieDB = {
//     count: 0,
//     movies: {

//     },
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function() {
//         personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

//         while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) { // isNaN() проверка, что введено не число
//             personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
//         }
//     },
//     rememberMyFilms: function() {
//         for (let i = 0; i < 2; i++) {
//             const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
//                 b = prompt('На сколько оцените его?', '');

//             if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//                 personalMovieDB.movies[a] = b;
//                 console.log('done');
//             } else {
//                 console.log('error');

//                 i--; //Если это условие не выполнилось, мы вернемся на одно повторение
//             }
//         }
//     },
//     detectPersonalLevel: function() {

//         if (personalMovieDB.count < 10) {
//             console.log('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         } else {
//             console.log('Произошла ошибка');
//         }
//     },
//     showMyDB: function(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     },
//     toggleVisibleMyDB: function() {
//         if (personalMovieDB.privat) {
//             personalMovieDB.privat = false;
//         } else {
//             personalMovieDB.privat = true;
//         }
//     },
//     writeYourGenres: function() {
//         // for (let i = 1; i <= 3; i++) {
//         for (let i = 1; i < 2; i++) {
//             // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

//             // if (genre === '' || genre == null) {
//             //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
//             //     i--;
//             // } else {
//             //     personalMovieDB.genres[i - 1] = genre;
//             // }

//             let genres = prompt('Ведите ваши любимые жанры через запятую').toLowerCase();

//             if (genres === '' || genres == null) {
//                 console.log('Вы ввели некорректные данные или не ввели их вовсе');
//                 i--;
//             } else {
//                 // personalMovieDB.genres[i - 1] = genre;
//                 personalMovieDB.genres = genres.split(', ');
//                 personalMovieDB.genres.sort();
//             }
//         }

//         personalMovieDB.genres.forEach((item, i) => {
//             console.log(`Любимый жанр ${i + 1} - это ${item}`);
//         });
//     }
// };

//ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ

//to string

// 1. 
// console.log(typeof(String(null))); //устаревшая конструкция
// console.log(typeof(String(4))); //устаревшая конструкция
// string

//2. Конкотинация - что-то складываем со строкой
// console.log(typeof('5' + ''));
// //string

// const num = 5; 

// console.log("https://facebook/catalog/" + num); //устаревший способ. сейчас 
// //лучше использовать интерпаляцию с бектиками. Просто как пример

// //https://facebook/catalog/5

// const fontsize = 26 + 'px';


//to number

//1.

// console.log(typeof(Number('5'))); // устаревшая команда

// //2. Унарный плюс

// console.log(typeof(+'5')); 

// //3. parseInt
// console.log(typeof(parseInt("15px", 10))); // 10 - десятичная система

//number

// let answ = +prompt("Hello", ""); // переведет строки от пользователя в числа

//потому, что абсолютно все данные, полученные от пользователя, будут строками


// to boolean 

// 0, '', null, undefined, NaN - false

//1.

// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }
// // не работет
// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// //работает

// //2.

// console.log(typeof(Boolean('5'))); //редко пользуются

// //3.

// console.log(typeof(!!"4444")); //
// boolean


//ЗАМЫКАНИЕ И ЛЕКСИЧЕСКОЕ ОКРУЖЕНИЕ

// let number = 5;
// debugger

// function logNumber() {
//     let number = 4;
//     debugger

//     console.log(number);
// }

// number = 6;

// logNumber();
// debugger

// 4

function createCounter() {  // это function declaration выполняется 
                          //еще до объявления переменных
    let counter = 0;

    const myFunction = function() {
        counter = counter + 1;
        return counter;
    }

    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2, c3);

