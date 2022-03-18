$(function() {
    $(".header__items").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({scrollTop: top-102}, 1500);
});
    
    $('.menu__btn, .menu a').on('click', function(){
        $('.header__items').toggleClass('header__items--active');
    });
});

