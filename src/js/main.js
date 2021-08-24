'use strict'

$(document).ready(function () {
    $('.mainSlider').slick({
        arrows: false,
        autoplay: true,
        dots: true,

    });

    $('.sayTextSlider').slick({
        autoplay: true,
        arrows: false,
        centerMode: true,
        asNavFor: '.sayImgSlider',
    });

    $('.sayImgSlider').slick({
        autoplay: true,
        slidesToShow: 5,
        centerMode: true,
        slidesToScroll: 1,
        swipe: false,
        variableWidth: true,
        asNavFor: '.sayTextSlider',
    });

    $('.mainVideoButton').click(function () {
        let a = $('.videoCheck').hasClass('autoplay');
        if (!a == true) {
            $('.videoCheck').attr('autoplay');
        } else {
            $('.videoCheck').removeAttr('autoplay');
        }
    });
});
