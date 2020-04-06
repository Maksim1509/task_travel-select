const openBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.menu__icon-close');
const menu = document.querySelector('.menu-wrap');
const main = document.querySelector('.page__main');

openBtn.addEventListener('click', () => {
    menu.classList.add('menu-wrap--show');
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('menu-wrap--show');
})