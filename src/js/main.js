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
        centerPadding: '0',
        asNavFor: '.sayImgSlider',
    });

    $('.sayImgSlider').slick({
        autoplay: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipe: false,
        variableWidth: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1401,
                settings: {
                    slidesToShow: 3,
                    variableWidth: false,
                    centerPadding: '0',
                }
            },

            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                    centerPadding: '0',
                }
            },
        ],
        asNavFor: '.sayTextSlider',
    });

    $('.expertiseSlider').slick({
        slidesToShow: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: '0',
    });

    $('.teamSlider').slick({
        slidesToShow: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: '0',
    });

    $('.workSlider').slick({
        slidesToShow: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: '0',
    });

    $('.clientSlider').slick({
        slidesToShow: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: '0',
        adaptiveHeight: true
    });

    // $('.mainVideoButton').click(function () {
    // let a = $('.videoCheck').hasClass('autoplay');
    // if (!a == true) {
    //   $('.videoCheck').attr('autoplay');
    // } else {
    //    $('.videoCheck').removeAttr('autoplay');
    // }
    //});

    $('.popupWork').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        mainClass: 'mfp-img-mobile',
        image: {
            verticalFit: true
        }
    });

    $('.myDrop').click(function () {
        $('header').toggleClass('done');
        $('.myDrop').toggleClass('done');
    });
});
