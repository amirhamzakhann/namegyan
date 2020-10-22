// Custom Function Start Here

$(function () {

    // Banner Slider Start
    $('#banner').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: ('<i class="far fa-chevron-left prev"></i>'),
        nextArrow: ('<i class="far fa-chevron-right next"></i>'),
      });


      $(window).scroll(function(){
        let scrolling = $(this).scrollTop();
        if(scrolling > 100) {
            $('.header').addClass('header-bg');
        }else {
            $('.header').removeClass('header-bg');
        }
    });
    // Banner Slider End

    // About Slider Start
    $('.bottom_stick').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
    // About Slider End

    // Counter Js Start
    $('.counter').counterUp({
        delay: 10,
        time: 1000
      });
    // Counter Js End

    // Our Courses Start
    $('.our_courses').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: ('<i class="far fa-chevron-left prev"></i>'),
        nextArrow: ('<i class="far fa-chevron-right next"></i>'),
        centerMode: true,
        centerPadding: false,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
            }
          },
          
        ]
      });
    // Our Courses End

    // Testimonial Part Start
    $('.testi_line_bottom').slick({
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: ('<i class="far fa-chevron-left prev"></i>'),
      nextArrow: ('<i class="far fa-chevron-right next"></i>'),
      centerMode: true,
      centerPadding: false,
      asNavFor: ".testimonial_txt",
    });
    // Testimonial Part End


    // Testimonial second Part Start
    $('.testimonial_txt').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: ".testi_line_bottom",
    });
    // Testimonial second Part End

    // Footer Slider Start
    $('.footer_sliding').slick({
      dots: false,
      arrows: false,
      infinite: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
    });
    // Footer Slider End

});
// Custom Function End Here