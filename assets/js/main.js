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

    $(document).on('click', '.tablink li a', function() {
        
        $(".tabData .tabDetails").hide();
        $(this).addClass("active").parent("li").siblings("li").find("a").removeClass("active");
        var indexe = $(this).parent().index();
        alert(indexe);
        $(this).parents(".tabsWrap").find(".tabData .tabDetails").eq(e).fadeIn()
    });

});