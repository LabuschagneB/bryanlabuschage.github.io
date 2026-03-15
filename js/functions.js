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
        $('.header-bar').on('click', function () {
            $(this).toggleClass('active');
            $('.overlay').toggleClass('active');
            $('.menu').toggleClass('active');
        });

        $('.menu li a').on('click', function () {
            $('.header-bar').removeClass('active');
            $('.menu').removeClass('active');
        });

        //Menu smooth scroll
        //======================

        // lightcase 
        $('a[data-rel^=lightcase]').lightcase();

        //animate on scroll initialize
        AOS.init();

        // Header Section Menu Part
        $("ul li ul").parent("li").addClass("menu-item-has-children");

        // drop down menu width overflow problem fix
        $('ul').parent().on('hover', function () {
            var menu = $(this).find("ul");
            var menupos = $(menu).offset();
            if (menupos.left + menu.width() > $(window).width()) {
                var newpos = -$(menu).width();
                menu.css({
                    left: newpos
                });
            }
        });

        // scroll up start here
        $(function () {
            //Check to see if the window is top if not then display button
            $(window).scroll(function () {
                if ($(this).scrollTop() > 300) {
                    $('.scrollToTop').css({
                        'bottom': '2%',
                        'opacity': '1',
                        'transition': 'all .5s ease'
                    });
                } else {
                    $('.scrollToTop').css({
                        'bottom': '-30%',
                        'opacity': '0',
                        'transition': 'all .5s ease'
                    })
                }
            });
            //Click event to scroll to top
            $('.scrollToTop').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        });

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
        var swiper = new Swiper('.testi-slider', {
            slidesPerView: 1,
            autoplay: {
                delay: 10000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.testi-next',
                prevEl: '.testi-prev',
            },
            loop: true,
        });
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
$(document).ready(function () {
    var AFFIX_TOP_LIMIT = 300;
    var AFFIX_OFFSET = 49;

    $(".menu").each(function () {
        var $affixNav = $(this),
            $container = $affixNav.parent(),
            affixNavfixed = false,
            originalClassName = this.className,
            current = null,
            $links = $affixNav.find("a");

        function getClosestHeader(top) {
            var last = $links.first();

            if (top < AFFIX_TOP_LIMIT) {
                return last;
            }

            for (var i = 0; i < $links.length; i++) {
                var $link = $links.eq(i),
                    href = $link.attr("href");

                if (href.charAt(0) === "#" && href.length > 1) {
                    var $anchor = $(href).first();

                    if ($anchor.length > 0) {
                        var offset = $anchor.offset();

                        if (top < offset.top - AFFIX_OFFSET) {
                            return last;
                        }

                        last = $link;
                    }
                }
            }
            return last;
        }
        $(window).on("scroll", function (evt) {
            var top = window.scrollY,
                height = $affixNav.outerHeight(),
                max_bottom = $container.offset().top + $container.outerHeight(),
                bottom = top + height + AFFIX_OFFSET;

            var $current = getClosestHeader(top);

            if (current !== $current) {
                $affixNav.find(".current").removeClass("current");
                $current.addClass("current");
                current = $current;
            }
        });
    });
});

//auto year
const year = new Date().getFullYear();
document.querySelectorAll('.year').forEach((el) => {
    el.textContent = year;
});
// auto year end