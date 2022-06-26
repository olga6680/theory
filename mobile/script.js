// //СОБЫТИЯ НА МОБИЛЬНЫХ УСТРОЙСТВАХ

// // touchstart срабатывает при касании к элементу

// // touchmove срабатывает при движении пальца по элементу

// // tiuchend срабатывает, когда палец отрывается от элемента

// // touchenter срабатывает, когда палец заходит за пределы элемента

// // touchleavt срабатывает, когда палец ушел за пределы элемента не отрываясь от экрана

// // touchcansel когда при серфинге, например палец выходит за пределы браузера

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.touches);
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log('e.targetTouches[0].pageX'); //- получить координаты пальца
    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('end');
    // });
});

// touches - свойство регистрирует сколько пальцев на экране
// targetTouches - все пальцы, которые взаимодействуют непосредственно с элементом
// changedTouches - список пальцев, которые учавствуют в событии