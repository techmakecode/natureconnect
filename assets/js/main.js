$(function () {
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


    $(".playbtn").click(function () {
        var ytubelink = $(this).find('a').attr('rel');
        $(".popupBox").fadeIn();
        $(".videopopup .videobox").find('iframe').attr('src', ytubelink);

    });
    $(".videopopup .videobox").click(function () {

        $(".popupBox").hide();
        $(".videopopup .videobox").find('iframe').attr('src', '');
    });

    var swiper = new Swiper(".pagislider", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
    var swiper = new Swiper(".teamsSlider", {
        // slidesPloop: true,
        centeredSlides: true,
        slidesPerView: 3,
        // erView: 'auto',
        autoHeight: true,
        // loop: true,
        // autoplay: {
        //     delay: 3000,
        //     disableOnInteraction: true,
        // },
        breakpoints: {
            375: {
                slidesPerView: 1,
                spaceBetween: 0
                // centeredSlides: true,
            }
        },
    });
});