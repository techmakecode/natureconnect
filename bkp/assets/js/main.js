$(function () {
    AOS.init();

    $(window).on("scroll", function () {
        var bodyScroll = $(window).scrollTop(),
            navbar = $(".navbar"),
            logo = $(".navbar .logo> img");
        if (bodyScroll > 50) {
            navbar.addClass("nav-scroll");
        } else {
            navbar.removeClass("nav-scroll");
        }
    });

    $(".contactlink").click(function () {
        console.log($('.navbar').height() + 40)
        $('html, body').animate({
            scrollTop: $('.contactSec').offset().top - ($('.navbar').height() + 40)
        }, 1000);
    });

    $(".playbtn a").click(function () {
        var ytubelink = $(this).attr('rel');
        $(".popupBox").fadeIn();
        $(".videopopup .videobox").find('iframe').attr('src', ytubelink);

    });
    $(".videopopup .videobox").click(function () {

        $(".popupBox").hide();
        $(".videopopup .videobox").find('iframe').attr('src', '');
    });

    var swiper = new Swiper(".pagislider", {
        grabCursor: true,
        loop: true,
        autoHeight: false,
        effect: "creative",
        creativeEffect: {
          prev: {
            shadow: true,
            origin: "left center",
            translate: ["-5%", 0, -100],
            rotate: [0, 100, 0],
          },
          next: {
            origin: "right center",
            translate: ["5%", 0, -100],
            rotate: [0, -100, 0],
          },
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        keyboard: {
            enabled: true,
        },
    });
    var swiper = new Swiper(".teamsSlider", {
        spaceBetween: 0,
        centeredSlides: true,
        slidesPerView: 3,
        // erView: 'auto',
        //autoHeight: true,
        slidesPloop: true,
        erView: 'auto',
        autoHeight: true,
        loop: true,
        keyboard: {
            enabled: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.1,
                spaceBetween: 0,
                centeredSlides: true,
                pagination: {
                    el: ".teampagination",
                    clickable: true
                }
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1.1,
                spaceBetween: 0,
                centeredSlides: true,
            },
            // when window width is >= 640px
            768: {
                spaceBetween: 0,
                centeredSlides: true,
                slidesPerView: 3,
            }
        }
    });

    var swiper = new Swiper(".infoSlider", {
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }, 
        keyboard: {
            enabled: true,
        },
    });

    // $(document).on('click', '.tablink li', function() {

    //     $(".tabData .tabDetails").hide();
    //     $(this).addClass("active").siblings("li").removeClass("active");
    //     var indexe = $(this).index(); 
    //     $(this).parents(".tabsWrap").find(".tabData .tabDetails").eq(indexe).show()
    // });

});