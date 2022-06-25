'use strict';
const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');

console.log(btns); // получаем псевдомассив
// чтобы выделить один элемент из массива, используем индекс [1]
// HTMLCollection(5) [button, button, button, button, button]

const circles = document.getElementsByClassName('circle');
console.log(circles); // все равно получаем HTMLCollection

const hearts = document.querySelectorAll('.heart');

// console.log(hearts);

//NodeList(3) [div.heart, div.heart, div.heart]
//здесь уже появляется метод forEaсh

hearts.forEach(item => {
    console.log(item); // выводим все элементы из псевдомассива в консоль
});

const oneHeart = document.querySelector('.heart');
console.log(oneHeart); // получаем один первый элемент из всех на странице