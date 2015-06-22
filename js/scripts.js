$(document).ready(function() {




    $('.scroll').click(function (e) {
      e.preventDefault();
      $("html,body").animate({
        scrollTop: $(this.hash).offset().top
      });
    });

    $('.menu-link').on('click', function(){
      $(this).parent('.nav-header').next('.site-nav-collapse').slideToggle(200);
    });


    /*
    $(".section1").height($(window).height()-110);
    $(window).resize(function(){
      $(".section1").height($(window).height());
    });
    $('.nav li').on('click', function(){
        $(this).prev('.strip').addClass('resize');
        $(this).prev('.strip').find('.header-text').addClass('fadeOut');

        $(this).prev('.strip').find('img').addClass('shrinkIt');

        
    });
    */

    $(document).scroll(function() {
        var y = $(this).scrollTop();
        if (y > 10) {
            $('.fixIt').addClass('resize');
            $('.fixIt').find('.header-text').addClass('fadeOut');

            $('.fixIt').find('img').addClass('shrinkIt');
            $('.tab-content').addClass('top-margin');
        }

    });

});

