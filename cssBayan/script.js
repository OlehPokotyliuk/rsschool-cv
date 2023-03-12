document.addEventListener("DOMContentLoaded", function (event) {
    const img = document.querySelectorAll('.accordeon-item__img');
    const accordeon = document.querySelectorAll('.accordeon');

    img[0].classList.add('visibleimg');

    accordeon.forEach((e, arr) => {
        e.addEventListener('mouseenter', (event) => {
            img[arr].classList.add('visibleimg');
        });
        e.addEventListener('mouseleave', (event) => {
            img[arr].classList.remove('visibleimg');
        });
    });


})
