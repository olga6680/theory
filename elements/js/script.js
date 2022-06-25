'use strict';
const box = document.getElementById('box');
// console.log(box);
const btns = document.getElementsByTagName('button');
// console.log(btns); // получаем псевдомассив
// чтобы выделить один элемент из массива, используем индекс [1]
// HTMLCollection(5) [button, button, button, button, button]
const circles = document.getElementsByClassName('circle');
// console.log(circles); // все равно получаем HTMLCollection
const wrapper = document.querySelector('.wrapper');
// const hearts = document.querySelectorAll('.heart');
const hearts = weapper.querySelectorAll('.heart');
// console.log(hearts);
//NodeList(3) [div.heart, div.heart, div.heart]
//здесь уже появляется метод forEaсh
// hearts.forEach(item => {
//     console.log(item); // выводим все элементы из псевдомассива в консоль
// });
// const oneHeart = document.querySelector('.heart');
const oneHeart = wrapper.querySelector('.heart');
// console.log(oneHeart); // получаем один первый элемент из всех на странице



// console.dir(box); // в консоли браузера увидим все свойства и методы

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px;';
// box.style.cssText = `background-color: blue; width: ${num}px;`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'orange';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут була я)'); // этот метод используется очень редко

div.classList.add('black');

document.body.append(div); // вставляем элемент в конец сраницы

// document.querySelector('.wrapper').append(div);
// wrapper.append(div);
// wrapper.prepend(div); // вставляет перед элементом

// hearts[1].before(div); // вставляет перед элементом
// hearts[1].after(div); // вставляет после элементом

// circles[0].remove(); // удаляет элемент со страницы

// hearts[0].replaceWith(circles[0]); // заменяет элемент элементом

//устаревшие конструкции

// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[0]);

// wrapper.removeChild(hearts[1]);

// wrapper.removeChild(circles[0], hearts[0]);

/////
div.innerHTML = "<h1>Hello</h1>";

// div.textContent = "Hello"; //работает только с текстом

// div.insertAdjacentHTML('beforebegin', '<h2>World!</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>World!</h2>');
// div.insertAdjacentHTML('beforeend', '<h2>World!</h2>');
div.insertAdjacentHTML('afterend', '<h2>World!</h2>');