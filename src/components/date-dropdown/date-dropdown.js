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

const dateDropdowns = document.querySelectorAll('.date-dropdown');
dateDropdowns.forEach((dateDropdown) => {
    const field = dateDropdown.querySelector('.date-dropdown__field')
    field.addEventListener('click', ({ target }) => {
        const datepicker = dateDropdown.querySelector('.datepicker-inline');
        const arrow = dateDropdown.querySelector('.date-dropdown__arrow');
        const text = dateDropdown.querySelector('.date-dropdown__text');
        text.classList.toggle('date-dropdown__text--show')
        arrow.classList.toggle('dropdown__arrow--reverse');
        datepicker.classList.toggle('datepicker-inline--show');
    })
})
