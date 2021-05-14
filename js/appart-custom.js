;(function($){
    "use strict";

    $(document).ready(function () {

        /*--------- Accordion js-----------*/
        function fAqactive(){
            $(".faq_accordian_two .card").on('click', function(){
                $(".faq_accordian_two .card").removeClass("active");
                $(this).addClass('active');
            });
        }
        fAqactive();

    }); // End Document.ready

})(jQuery);
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */