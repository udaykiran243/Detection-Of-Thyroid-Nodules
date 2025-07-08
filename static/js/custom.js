$(document).ready(function () {
    $(".navbar-toggler").click(function () {
        $('html').toggleClass('show-menu');
    });

    $('.nav-item.dropdown').click(function () {
        $('.nav-item.dropdown').removeClass('active');
        $(this).addClass('active');
    });

    function scrolling() {
        var sticky = $('header'),
            scroll = $(window).scrollTop();

        if (scroll >= 15) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    };
    scrolling();
    $(window).scroll(scrolling);

    $('.hamburger').on('click', function () {
        $(this).toggleClass('open');
    });

    // fade in #back-top
    var btn = $('#myBtn');

    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });

});

/** owl carousel **/
$('#expert_owl').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        370: {
            items: 1.2
        },
        600: {
            items: 2.2
        },
        1000: {
            items: 3.1
        },
        1310: {
            items: 3.8
        }
    }
});
$('#doc-owl-v3').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>"],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
$('#medical-owl').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    navText: ["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>"],
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('#department-detail-owl').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dots: false,
    navText: ["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('#doctor-owl-v3').owlCarousel({
    loop: true,
    margin: 30,
    dots: false,
    nav: true,
    navText: ["<i class='far fa-angle-left'></i>", "<i class='far fa-angle-right'></i>"],
    responsive: {
        0: {
            items: 1
        },
        482: {
            items: 1.6
        },
        600: {
            items: 2.5
        },
        1000: {
            items: 3
        }
    }
})
/** owl carousel **/
/** niceselect **/
$(document).ready(function () {
    $('.my_select').niceSelect();
});
/** niceselect **/

/** Spinner Loader **/
$(window).on('load', function () {
    $("#spinner").fadeOut("1500");
});

/** Spinner Loader **/
$('.slider-for').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    focusOnSelect: true,
    prevArrow: $('.prev-arrow'),
    nextArrow: $('.next-arrow'),
});

/** Spinner Loader **/
/** wow Js **/
wow = new WOW(
    {
        animateClass: 'animated',
        offset: 100,
        callback: function (box) {
            console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
    }
);
wow.init();
/** wow Js **/