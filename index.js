$(document).ready(function () {
    $(window).scroll(function () {
        var a = document.getElementsByClassName('nav-bar-fullwidth')
        console.log(a);
        if ($(this).scrollTop() > 100) {
            $('.nav-bar-fullwidth').addClass('sticky')
        } else {
            $('.nav-bar-fullwidth').removeClass('sticky')
        }
    });
});