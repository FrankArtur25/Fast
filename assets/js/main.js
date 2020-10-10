jQuery(function ($) {
    'use strict';
    AOS.init();
    $(window).on('load', function () {
        if ($('#preloader').length) {
            $('#preloader').delay(100).fadeOut('slow', function () {
                $(this).remove();
            });
        }
        $('.circle-container').find('a').click(function(event) {
            event.preventDefault();
          });
          $('.circle-container').find('li').hover(function() {
            $('.circle-container').find('li').removeClass('active');
            $(this).addClass('active');
            $('.services-container').find('li.active').removeClass('active animated fadeIn');
        
            $(".services-container").find('li').eq($(this).data('id')).addClass('active animated fadeIn');
        });
        $(".videos").slick({
            dots : true,
            vertical : true,
            slidesToShow : 1,
            infinite : true,
            adaptiveHeight: true
        })
        var list_modelo = $("#niveles-modelo>div")
        var inicio_modelo = 225
        var duration_aos = 300
        let x_d = 300
        let size_scren_w = $(window).width()
        list_modelo.each(function(){
            if(size_scren_w>991){
                let i = $(this)
                i.css("margin-top",inicio_modelo)
                i.attr("data-aos-duration",duration_aos)
                i.attr("data-aos-delay",x_d)
                x_d+=duration_aos
                inicio_modelo-=35
                    
            }   
        })
        list_modelo.on("click",function(){
            let i = $(this),
            atributo = i.find("div").attr("nivel")
            list_modelo.each(function(){
                $(this).find("div").removeClass("active")
            })
            i.find("div").addClass("active")
            let info = $(".info-modelo>div")
            info.each(function(){
                let o = $(this)
                o.css("display","none")
                if(o.attr("data-nivel")===atributo){
                    o.fadeIn()
                }
            })
        })
    })
})