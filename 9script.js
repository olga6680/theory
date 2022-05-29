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

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {

    },
    actors: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', ''),
    c = prompt('Один из последних просмотренных фильмов?', ''),
    d = prompt('На сколько оцените его?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;


//Условия 

if (4 == 4) {
    console.log('ok');
} else {
    console.log('error');
}

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
for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue;     //пропускает этот шаг в цикле
    }
    console.log(i);
   
}
