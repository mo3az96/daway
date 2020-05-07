$(window).on('load', function () {
    $('.pre-loader').removeClass('pre-in');
    $('.pre-loader').fadeOut("500", function () {
        $('body').css("overflow", "visible");
        $(this).remove();
    });
});
$(document).ready(function () {
    new WOW().init();
    /////////Main Slider/////////
    $('.main-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        loop: true,
        dots: true,
        nav: true,
        navText: ["<span class='lnr lnr-chevron-right'></span>", "<span class='lnr lnr-chevron-left'></span>"],
    });
    /////////news Slider/////////
    $('.Product-slider').owlCarousel({
        items: 1,
        margin: 30,
        rtl: document.dir == 'rtl' ? true : false,
        dots: true,
        mouseDrag: false,
        touchDrag: false,
    });

    /////////QTY/////////
    var minVal = 1, maxVal = 100; // Set Max and Min values
    // Increase product quantity on cart page
    $(".qty-increas").on('click', function () {
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function () {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qtyValue").val();
        if (value < maxVal) {
            value++;
        }
        $parentElm.find(".qtyValue").val(value);
    });
    // Decrease product quantity on cart page
    $(".qty-decreas").on('click', function () {
        var $parentElm = $(this).parents(".qtySelector");
        $(this).addClass("clicked");
        setTimeout(function () {
            $(".clicked").removeClass("clicked");
        }, 100);
        var value = $parentElm.find(".qtyValue").val();
        if (value > 1) {
            value--;
        }
        $parentElm.find(".qtyValue").val(value);
    });
    ///////////////menu
    if ($(window).width() <= 767) {
        $('.mo-menu-icon').click(function () {
            $("nav").fadeIn(300);
            $(".mo-navbar").addClass("nav-in");
            $('.lang').addClass("lang-in");
            $("body").addClass("overflow");
        });

        $('nav').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $('.lang').removeClass("lang-in");
            $("body").removeClass("overflow");
        });
        $('.mo-navbar').click(function (e) {
            e.stopPropagation();
        });
        $('.close-btn').click(function () {
            $("nav").fadeOut(400);
            $(".mo-navbar").removeClass("nav-in");
            $('.lang').removeClass("lang-in");
            $("body").removeClass("overflow");
        });
    }

});