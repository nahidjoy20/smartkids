(function ($) {
	"use strict";

    jQuery(document).ready(function($){


       
              
        $(".single-slider-item").owlCarousel({
            items:5,
            nav:true,
            dot:true,
            loop:true,
            margin:20,
            autoplay:false,
            autoplayTimeout:3000,
            smartSpeed:1000,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                   
                },
                768:{
                    items:4,
                   
                },
                1000:{
                    items:5,
                   
                }
            }
            
          
        });

        $('.room-slider-area').owlCarousel({
            center: true,
            items:2,
            loop:true,
            margin:20,
            nav:true,
        });


    });


    jQuery(window).load(function(){


    });


}(jQuery));	