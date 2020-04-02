const openBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.menu__icon-close');
const menu = document.querySelector('.menu');
const main = document.querySelector('.page__main');

openBtn.addEventListener('click', () => {
    menu.classList.add('menu--show');
    main.classList.add('page__main--hide');
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('menu--show');
    main.classList.remove('page__main--hide');
})