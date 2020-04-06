import $ from 'jquery';
import datepicker from '../../../node_modules/air-datepicker/dist/js/datepicker.min.js';

const input = $('.date-dropdown__field');
input.datepicker({
    inline: true,
    range: true,
    navTitles: {
        days: 'MM <i>yyyy</i>',
    },
    prevHtml: '<img src="./images/arrowDrop.svg">',
    nextHtml: '<img src="./images/arrowDrop.svg">',
    showOtherMonths: false,
});

const hide = ({ target }) => {
    const dateDropdown = document.querySelector('.date-dropdown');
    const datepiker = document.querySelector('.datepicker-inline');
    const arrow = dateDropdown.querySelector('.date-dropdown__arrow');
    const text = dateDropdown.querySelector('.date-dropdown__text');
        
    

    const item = target.closest('.date-dropdown')
    const dp = target.matches('.datepicker--cell');
    const navTitle = target.matches('.datepicker--nav-title')
    const navAct = target.matches('.datepicker--nav-action, .datepicker--nav-action > img')

    if (!item && !navTitle && !dp && !navAct) {
        datepiker.classList.remove('datepicker-inline--show');
        dateDropdown.classList.remove('date-dropdown--open');
        arrow.classList.remove('dropdown__arrow--reverse');
        text.classList.remove('date-dropdown__text--show')
    }
};
window.addEventListener('click', hide);

const dateDropdowns = document.querySelectorAll('.date-dropdown');
dateDropdowns.forEach((dateDropdown) => {
    const field = dateDropdown.querySelector('.date-dropdown__field')
    field.addEventListener('click', () => {
        const datepicker = dateDropdown.querySelector('.datepicker-inline');

        const calendar = datepicker.querySelector('.datepicker--content');
        dateDropdown.classList.toggle('date-dropdown--open');

        const arrow = dateDropdown.querySelector('.date-dropdown__arrow');
        const text = dateDropdown.querySelector('.date-dropdown__text');
        
        text.classList.toggle('date-dropdown__text--show')
        arrow.classList.toggle('dropdown__arrow--reverse');
        datepicker.classList.toggle('datepicker-inline--show');
        calendar.after(text);
    })
})


