$(function(){


    $('.header__menu a, .footer__menu a').on('click', function() {

        let href = $(this).attr('href');
    
        $('html, body').animate({
            scrollTop: $(href).offset().top
        }, {
            duration: 400,  
            easing: "linear" 
        });
    
        return false;
    });

    $('[data-fancybox]').fancybox({
        youtube : {
            controls : 0,
            showinfo : 0
        },
        vimeo : {
            color : 'f00'
        }
    });

    $('.header__btn').on('click', function(){
        $('.header__nav').toggleClass('header__nav--active')
    });
    $('.header__close').on('click', function(){
        $('.header__nav').removeClass('header__nav--active')
    });

    $('.aside__subtitle').click(function() { 
      var $this = $(this);
    
        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('.aside__text').removeClass('show');
            $this.parent().parent().find('.aside__text').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });

    $('.aside__subtitle').on('click', function(){
        $(this)
        .toggleClass('close')
        .siblings('div')
        .slideToggle();  
    });

    // $(window).scroll(function(){
    //     if ( $(window).scrollTop() >= 300){
    //         $('.header__top').css('background-color', 'rgb(33, 30, 28)');
    //     }
    //     else {
    //         $('.header__top').css('background-color', 'transparent');
    //     }
    // });

    $(window).scroll(function () {
        var height = $('.header__top').outerHeight();
        
         if($(this).scrollTop() > 700){
             $('.header__top').addClass('sticky');    
         }else{
             $('.header__top').removeClass('sticky');
         }
             
     });


});