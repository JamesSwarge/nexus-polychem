includeHTML();

$(document).ready(function () {  
  //header
  $("#getInstantQuote").click(function() {
    // alert("hi...");
    $('html, body').animate({
        scrollTop: $(".quote-section").offset().top
    }, 2000);
  });
  $(".level1").mouseover(function(){
    let val = $(this).next().height();
    console.log(val);
    $(this).next().find(".level3").height(val);
  });

  // $(".level1").click(function (e) {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   console.log('e', e);
  //   console.log('e', e.delegateTarget.nextElementSibling);
  // })

  //multi select
  $('.customSelect').selectpicker();

  //owl carousel
  $('.product-cards-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3600,
    autoplayHoverPause: false,
    mouseDrag: true,
    loop: true,
    margin: 10, 
    nav: true,
    dots: true,
    margin: 16,
    items: 3.5,
    navText: ['<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19.5" transform="matrix(-1 0 0 1 40 0)" stroke="white"/><g clip-path="url(#clip0_101_244)"><path d="M29.3711 19.9297H11.3152" stroke="white" stroke-width="1.5" stroke-linecap="square"/><path d="M15.9336 14.8906L10.8947 19.9295" stroke="white" stroke-width="1.5" stroke-linecap="square"/><path d="M15.9336 24.9685L10.8947 19.9297" stroke="white" stroke-width="1.5" stroke-linecap="square"/></g><defs><clipPath id="clip0_101_244"><rect width="19.9963" height="11.8594" fill="white" transform="matrix(-1 0 0 1 30 14)"/></clipPath></defs></svg>', '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19.5" stroke="white"/><g clip-path="url(#clip0_101_252)"><path d="M10.6289 19.9297H28.6848" stroke="white" stroke-width="1.5" stroke-linecap="square"/><path d="M24.0664 14.8906L29.1053 19.9295" stroke="white" stroke-width="1.5" stroke-linecap="square"/><path d="M23.9961 25.0389L29.035 20" stroke="white" stroke-width="1.5" stroke-linecap="square"/></g><defs><clipPath id="clip0_101_252"><rect width="19.9963" height="11.8594" fill="white" transform="translate(10 14)"/></clipPath></defs></svg>'],
    responsive: {
      0: {
        items: 1.3,
        dots: true,
      },
      576: {
        items: 2.5
      },
      768: {
        items: 3
      },
      1000: {
        items: 3.7
      }
    }
  });
  $('.other-product-cards-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 3600,
    autoplayHoverPause: false,
    mouseDrag: true,
    loop: true,
    margin: 10, 
    nav: true,
    dots: true,
    margin: 16,
    items: 3.5,
    navText: ['<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19.5" transform="matrix(-1 0 0 1 40 0)" stroke="white"/><g clip-path="url(#clip0_101_244)"><path d="M29.3711 19.9297H11.3152" stroke="white" stroke-width="1.5" stroke-linecap="square"/><path d="M15.9336 14.8906L10.8947 19.9295" stroke="white" stroke-width="1.5" stroke-linecap="square"/><path d="M15.9336 24.9685L10.8947 19.9297" stroke="white" stroke-width="1.5" stroke-linecap="square"/></g><defs><clipPath id="clip0_101_244"><rect width="19.9963" height="11.8594" fill="white" transform="matrix(-1 0 0 1 30 14)"/></clipPath></defs></svg>', '<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="19.5" stroke="white"/><g clip-path="url(#clip0_101_252)"><path d="M10.6289 19.9297H28.6848" stroke="white" stroke-width="1.5" stroke-linecap="square"/><path d="M24.0664 14.8906L29.1053 19.9295" stroke="white" stroke-width="1.5" stroke-linecap="square"/><path d="M23.9961 25.0389L29.035 20" stroke="white" stroke-width="1.5" stroke-linecap="square"/></g><defs><clipPath id="clip0_101_252"><rect width="19.9963" height="11.8594" fill="white" transform="translate(10 14)"/></clipPath></defs></svg>'],
    responsive: {
      0: {
        items: 1.3,
        dots: true,
      },
      576: {
        items: 2.5
      },
      768: {
        items: 3
      },
      1000: {
        items: 3.7
      }
    }
  })

  // $('.other-product-cards-carousel').owlCarousel({
  //   autoplay: true,
  //   autoplayTimeout: 360000,
  //   autoplayHoverPause: false,
  //   mouseDrag: true,
  //   loop: true,
  //   margin: 10, 
  //   nav: false,
  //   dots: false,
  //   margin: 16,
  //   items: 3.5,
  //   responsive: {
  //     0: {
  //       items: 1.3,
  //       dots: true,
  //     },
  //     576: {
  //       items: 2.5
  //     },
  //     768: {
  //       items: 3
  //     },
  //     1000: {
  //       items: 3.7
  //     }
  //   }
  // })


  //header mobile

  // $('html, body').animate({
  //   scrollTop: ($('.pattern').first().offset().top)
  // }, 500);

  // const navHeight = $('.navbar').height();
  // console.info("asd1", navHeight)
  // var mainbottom = $('.header-nav').offset().top + navHeight + 200;
  // console.info("asd2", mainbottom)
  // $(window).on('scroll', function () {
  //   // console.info("scrolled")
  //   stop = Math.round($(window).scrollTop());
  //   if (stop > mainbottom) {
  //     $('#header-nav').addClass('navbar-fixed-top');
  //     console.info("up")
  //   } else {
  //     $('#header-nav').removeClass('navbar-fixed-top');
  //     console.info("up2")
  //   }
  // });

  function responsive(maxWidth) {
    if (maxWidth.matches) {
      // alert('1')
      const body = document.body;
      let lastScroll = 200;
      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
          body.classList.remove("scroll-up");
          return;
        }
        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
          body.classList.remove("scroll-up");
          if ($("#custom-toggler-bttn").attr('aria-expanded') === 'true' ) {
            $("#custom-toggler-bttn:not(.collapsed)").trigger("click");
          }
          setTimeout(function(){
            body.classList.add("scroll-down")
          }, 100);
        } else if (
          currentScroll < lastScroll &&
          body.classList.contains("scroll-down")
        ) {
          body.classList.remove("scroll-down");
          body.classList.add("scroll-up");
        }
        lastScroll = currentScroll;
      });  
    } else {
      // alert('2')
      const body = document.body;
      let lastScroll = 200;
      window.addEventListener("scroll", () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
          body.classList.remove("scroll-up");
          return;
        }
        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
          body.classList.remove("scroll-up");
          setTimeout(function(){
            body.classList.add("scroll-down")
          }, 100);
        } else if (
          currentScroll < lastScroll &&
          body.classList.contains("scroll-down")
        ) {
          body.classList.remove("scroll-down");
          body.classList.add("scroll-up");
        }
        lastScroll = currentScroll;
      });
    }
  }
  var maxWidth = window.matchMedia("(max-width: 991px)");
  responsive(maxWidth);
  maxWidth.addListener(responsive); 

});