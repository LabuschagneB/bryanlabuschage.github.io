//type js
document.addEventListener('DOMContentLoaded', function () {
    var typed2 = new Typed('#typed2', {
        strings: ["I'm a front-end Web Developer",
            "I make Professional Website",
            "I'm a Web Designer",
            "I make fully responsive Website",
            "I am a freelancer"
        ],
        typeSpeed: 40,
        backSpeed: 40,
        startDelay: 1000,
        backDelay: 1500,
        loop: true,
        smartBackspace: true,
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const headerBar = document.querySelector('.header-bar');
    const menuArea = document.querySelector('.menu');
    const menuLinks = document.querySelectorAll('.menu li a');

    headerBar.addEventListener('click', () => {
        headerBar.classList.toggle('active');
        menuArea.classList.toggle('active');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            headerBar.classList.remove('active');
            menuArea.classList.remove('active');
        });
    });


    const testiSlider = document.querySelector('.testi-slider');

    if (testiSlider) {
        const swiper = new Swiper(testiSlider, {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 10000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: '.testi-next',
                prevEl: '.testi-prev'
            }
        });
    };




    const scrollBtn = document.querySelector('.scrollToTop');

    window.addEventListener('scroll', () => {
        scrollBtn.classList.toggle('active', window.scrollY > 300);
    });

    scrollBtn.addEventListener('click', e => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    AOS.init();
});




























(function ($) {
    "use strict";
    $(window).on('load', function () {
        $('.preloader').fadeOut(1000);
    })

    $(document).ready(function () {
        //sticky menu
        var fixed_top = $(".header-1");
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 100) {
                fixed_top.addClass("animated fadeInDown header-fixed");
            } else {
                fixed_top.removeClass("animated fadeInDown header-fixed");
            }
        });


        //Menu smooth scroll
        //======================

        // lightcase 
        $('a[data-rel^=lightcase]').lightcase();

        //animate on scroll initialize
        //AOS.init();

        // Header Section Menu Part
        //$("ul li ul").parent("li").addClass("menu-item-has-children");

        // drop down menu width overflow problem fix
        // $('ul').parent().on('hover', function () {
        //     var menu = $(this).find("ul");
        //     var menupos = $(menu).offset();
        //     if (menupos.left + menu.width() > $(window).width()) {
        //         var newpos = -$(menu).width();
        //         menu.css({
        //             left: newpos
        //         });
        //     }
        // });

        // // scroll up start here
        // $(function () {
        //     $(window).scroll(function () {
        //         if ($(this).scrollTop() > 300) {
        //             $('.scrollToTop').css({
        //                 'bottom': '2%',
        //                 'opacity': '1',
        //                 'transition': 'all .5s ease'
        //             });
        //         } else {
        //             $('.scrollToTop').css({
        //                 'bottom': '-30%',
        //                 'opacity': '0',
        //                 'transition': 'all .5s ease'
        //             })
        //         }
        //     });
        //     $('.scrollToTop').on('click', function () {
        //         $('html, body').animate({
        //             scrollTop: 0
        //         }, 500);
        //         return false;
        //     });
        // });

        // Initialize Isotope after images are loaded
        imagesLoaded('.grid', function () {
            var $grid = $('.grid').isotope({
                itemSelector: '.grid-item',
                masonry: {
                    columnWidth: 0
                }
            });
        });

        //******* Testi-slider *******

    });
    //progressbar
    window.addEventListener('DOMContentLoaded', function () {
        const circle = new CircularProgressBar('pie');
        setInterval(() => {
            const options = {
                index: 0,
                percent: Math.floor((Math.random() * 100) + 1)
            }
            circle.animationTo(options);
        }, 2000);

    });
}(jQuery));


//section scroll active nav

//auto year
const year = new Date().getFullYear();
document.querySelectorAll('.year').forEach((el) => {
    el.textContent = year;
});
// auto year end