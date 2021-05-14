(function ($) {
    "use strict";
    // header sticky add class js
    $(window).on('scroll', function () {
        var window_top = $(window).scrollTop() + 0;
        if (window_top > 0) {
            $('.drdt_sticky_section').addClass('drdt_sticky_fixed');
        } else {
            $('.drdt_sticky_section').removeClass('drdt_sticky_fixed');
        }
    });

}(jQuery));
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */