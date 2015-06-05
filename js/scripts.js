$(document).ready(function() {


    //	Scroll to top link
    $.scrollUp();
    $('#scrollUp').html("<i class='fa fa-angle-up'></i>");

    $('.menu-link').on('click', function(){
      $(this).parent('.nav-header').next('.site-nav-collapse').slideToggle(200);
    });

    $(".section1").height($(window).height());
    $(window).resize(function(){
      $(".section1").height($(window).height());
    });

});

