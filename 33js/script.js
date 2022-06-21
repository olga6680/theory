'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);

// if (block) {   //делается условие наличия элемента, чтобы в случае его отсутствия, 
//     console.log(block.textContent); // код работал дальше
// }

// console.log(block?.textContent);// это идентично верхнему: если нет, то идет дальше
// при этом выводит undefined

// block?.textContent = '123'; //так не будет работать, потому что в undefined ничего не положишь

// console.log(1 + 2);

const userData = {
    name: 'Ivan',
    age: null
}

// if (userData && userData.skills && userData.skills.js) { //чтобы избавиться от таких больших проверок
//     console.log(userData.skills.js); //был создан оператор опционной цепочки
// }

console.log(userData.skills ? .js); //оператор проверит код слева от себя..если не существует,
// пойдет дальше