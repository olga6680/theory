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
let num = 20;

function showFirstMessage(text) {  // function declaration создается до начала выполнения кода
    console.log(text);
    let num = 10;
    console.log(num);
}

showFirstMessage('Hello World!');
console.log(num);
 
// function calc(a, b) {
//     return (a + b);  // return - заканчивает функцию. Все, что дальше уже не сработает
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;  // return возвращает результат работы функции. выводит наружу
}

const anotherNum = ret(); 
console.log(anotherNum);

const logger = function() {  // function expression создается только после объявления
    console.log('Hello!');
};                              // после такой функции ставим ;

logger();

// Стрелочные функции

// const calc = (a, b) =>  a + b ; //если стрелочная функция в одну строку, можно опускать фигурные скобки

const calc = (a, b) => {
    console.log('1');
    return a + b;
};
