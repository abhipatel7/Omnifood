$(document).ready(function () {

    // Sticky Navigation

    $(".js--section-features").waypoint(function (direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    }, {
        offset: "60px"
    });

    // Scroll on Buttons

    $(".js--scroll-to-plan").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-plans").offset().top}, 1000);
    });

    $(".js--scroll-to-start").click(function () {
        $("html, body").animate({scrollTop: $(".js--section-features").offset().top}, 1000);
    });

    //Animations on Scroll

    $(".js--wp-1").waypoint(function (direction) {
        $(".js--wp-1").addClass("animated fadeIn");
    }, {
        offset: "50%"
    });

    $(".js--wp-2").waypoint(function (direction) {
        $(".js--wp-2").addClass("animated fadeInUp");
    }, {
        offset: "50%"
    });

    $(".js--wp-3").waypoint(function (direction) {
        $(".js--wp-3").addClass("animated fadeIn");
    }, {
        offset: "50%"
    });

    $(".js--wp-4").waypoint(function (direction) {
        $(".js--wp-4").addClass("animated pulse");
    }, {
        offset: "50%"
    });

    // Mobile Navigation

    $(".js--nav-icon").click(function () {
        var nav = $(".js--main-nav");

        nav.slideToggle(200);

        if($(".js--nav-icon ion-icon").attr("name") === "menu") {
            $(".js--nav-icon ion-icon").attr("name","close");
        } else {
            $(".js--nav-icon ion-icon").attr("name","menu");
        }

    });


});