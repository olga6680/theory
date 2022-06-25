// const btn = document.querySelector('button');

// btn.onclick = function() { // такой код не используется
//     alert('click');
// };

// btn.addEventListener('click', () => {
//     alert('click');
// });

// btn.addEventListener('mouseenter', () => {
//     alert('Hover');
// });

//чтобы отловить событие или координаты элемента event (называть можно, как угодно)

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e);
// });

//script.js:18 MouseEvent {isTrusted: true, screenX: 140, screenY: 128, clientX: 140, clientY: 57, …}

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target); // на каком элементе произошло событие
// });

// <button id="bth">Нажми меня</button>

// btn.addEventListener('click', (e) => {
//     e.target.remove(); // удаляется при клике
// });

// const deleteElement = (e) => {
//     e.target.remove();
// };

// btn.addEventListener('click', deleteElement);

// const deleteElement = (e) => {
//     console.log(e.target);
// };

// btn.addEventListener('click', deleteElement);

// btn.removeEventListener('click', deleteElement);

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i = 1) {  // событие произойдет только 1 раз
//         btn.removeEventListener('click', deleteElement);
//     }
// };

// btn.addEventListener('click', deleteElement);

// const btn = document.querySelector('button'),
//     overlay = document.querySelector('.overlay');

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     console.log(e.type);
// };

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// событие  сначала произойдет на том элементе, который вложеннее -
// это называется всплытие событий

//чтобы это подправить используется свойство currentTarget

// const btn = document.querySelector('button'),
//     overlay = document.querySelector('.overlay');

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.currentTarget);
//     console.log(e.type);
// };

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

// //Отмена стандартного поведения браузера

// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//     event.preventDefault(); // отмена стандартного поведения браузера всегда вначале

//     console.log(event.target);
// });

// как навесить одно событие на несколько элементов сразу

const btns = document.querySelectorAll('button'),
    overlay = document.querySelector('.overlay');

let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget);
    console.log(e.type);
};

// btns.forEach(btn => {
//     btn.addEventListener('click', deleteElement);
// });

// опции события 
// addEventlistener(type, listener, option)

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, { once: true }); // {once: true} -опция срабатывания один раз
});