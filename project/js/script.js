/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const promoAdv = document.querySelector('.promo__adv'),
    promoBlock = promoAdv.querySelectorAll('img'),
    promoContent = document.querySelector('.promo__content'),
    promoBg = promoContent.querySelector('.promo__bg'),
    promoGenre = promoBg.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list'),
    movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

promoBlock.forEach(item => {
    item.remove();
});
promoBg.style.cssText = "background: url('img/bg.jpg') center center/cover no-repeat;";
promoGenre.textContent = "драма";

movieList.innerHTML = '';

movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});