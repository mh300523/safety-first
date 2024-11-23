(function ($) {
    $(document).ready(function() {
        ///////// **mobile size** /////////
        $('.menu-bar').click(function () {
        $(this).toggleClass("nav_btn");
        $('.main-nav').toggleClass('open-nav');
        $('body').toggleClass('active-sidenav');
        });

        Fancybox.bind("[data-fancybox]" , {});
        // Fancybox.bind('[data-fancybox]:not(.swiper-slide-duplicate [data-fancybox])', {});
        
        // Smooth scroll to top on arrow click
        $('.arrow-up').on('click', function(e) {
            e.preventDefault();
            $('html, body').animate({ scrollTop: 0 }, 'slow');
        });
        ///////// **main Slider** /////////
        var mainSlider = new Swiper('.main-slider .swiper', {
            loop: true,
            autoplay: true,
            slidesPerView: 1,
            preloadImages: false,
            updateOnWindowResize: true,
            speed: 1000,
            
            // If we need pagination
            pagination: {
                el: '.main-slider .swiper-pagination',
                clickable: true,
            },
            // Navigation arrows   
            navigation: {
                nextEl: '.main-slider .swiper-button-next',
                prevEl: '.main-slider .swiper-button-prev',
            },
            on: {
                init: function (swiper) {
                    lazyLoad();
                },
                },
        });

        ///////// ** Services Slider** /////////
        var services = new Swiper('.services-row .swiper', {
            loop: true,
            autoplay: {
                    delay: 4000,
                },
            speed: 1000,
            updateOnWindowResize: true,
            observer: true,
            observeParents: true,
            pagination: {
                el: '.services-row .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.services-row .swiper-button-next',
                prevEl: '.services-row .swiper-button-prev',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1199: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                },
            },
            on: {
              init: function (swiper) {
                lazyLoad();
              },
            },
        });

    ///////// ** gallery Slider** /////////
      var gallery = new Swiper('.gallery-row .swiper', {
        // loop: true,
        autoplay: {
                delay: 4000,
            },
        speed: 1000,
        updateOnWindowResize: true,
        observer: true,
        observeParents: true,
        pagination: {
            el: '.gallery-row .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.gallery-sec .swiper-button-next',
            prevEl: '.gallery-sec .swiper-button-prev',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1300: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        },
        on: {
          init: function (swiper) {
            lazyLoad();
          },
        },
      });

        // lazy load
        lazyLoad();
    });

    
    /**********lazy load ***********/
    function lazyLoad() {
        const images = document.querySelectorAll(".lazy-img");
    
        const optionsLazyLoad = {
            //  rootMargin: '-50px',
            // threshold: 1
        };
    
        const imageObserver = new IntersectionObserver(function (enteries) {
            enteries.forEach(function (entery) {
            if (!entery.isIntersecting) {
                return;
            } else {
                preloadImage(entery.target);
                imageObserver.unobserve(entery.target);
            }
            });
        }, optionsLazyLoad);
        
        images.forEach(function (image) {
            imageObserver.observe(image);
        });
        }
        
        function preloadImage(img) {
        img.src = img.getAttribute("data-src");
        img.onload = function () {
            img.parentElement.classList.remove("loading-img");
            img.parentElement.classList.add("loaded-img");
            // img.parentElement.parentElement.classList.add("lazy-head-img");
        };
        }
})(jQuery)