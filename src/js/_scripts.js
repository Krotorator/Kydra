window.onload = function () {

    $('.burger').on('click', function () {

        $('.burger').toggleClass('burger--active');
        $('.nav').toggleClass('nav--active');
        $('.nav__item').toggleClass('nav__item--active');
        setTimeout(close, 3000);
    })

    function close() {
        $('.burger').removeClass('burger--active');
        $('.nav').removeClass('nav--active');
        $('.nav__item').removeClass('nav__item--active');
    }


};