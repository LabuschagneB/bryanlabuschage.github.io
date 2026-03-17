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

    const fixedTop = document.querySelector(".header");

    if (fixedTop) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
            fixedTop.classList.add("animated", "fadeInDown", "header-fixed");
            } else {
            fixedTop.classList.remove("animated", "fadeInDown", "header-fixed");
            }
        });
    }

    var typed = new Typed('#typed', {
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

    const testimonialSlider = document.querySelector('.testimonial-slider');

    if (testimonialSlider) {
        const swiper = new Swiper(testimonialSlider, {
            slidesPerView: 1,
            loop: true,
            autoplay: {
                delay: 10000,
                disableOnInteraction: false
            },
            navigation: {
                nextEl: '.testimonial-slider-next',
                prevEl: '.testimonial-slider-prev'
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

    const circle = new CircularProgressBar('pie');
    setInterval(() => {
        const options = {
            index: 0,
            percent: Math.floor((Math.random() * 100) + 1)
        }
        circle.animationTo(options);
    }, 2000);

    const year = new Date().getFullYear();
    document.querySelectorAll('.year').forEach((el) => {
        el.textContent = year;
    });
});

window.addEventListener("load", () => {
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    preloader.classList.add("hidden");
    setTimeout(() => {
      preloader.style.display = "none";
    }, 1000);
  }
});

const grid = document.querySelector(".grid");

imagesLoaded(grid, function () {
  const iso = new Isotope(grid, {
    itemSelector: ".grid-item",
    masonry: {
      columnWidth: 0
    }
  });
});


// jQuery
(function ($) {
    $(document).ready(function () {
        $('a[data-rel^=lightcase]').lightcase();
    });
}(jQuery));
