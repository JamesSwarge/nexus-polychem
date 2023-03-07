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

  $(".level1").click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    console.log('e', e);
    console.log('e', e.delegateTarget.nextElementSibling);
  })

  //owl carousel
  $('.product-cards-carousel').owlCarousel({
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    mouseDrag: false,
    loop: false,
    margin: 10, 
    nav: false,
    dots: false,
    margin: 16,
    items: 3.5,
    responsive: {
      0: {
        items: 1.3,
        dots: true,
      },
      576: {
        items: 3
      },
      1000: {
        items: 3.7
      }
    }
  })


  //count animation
  // $('.ani-number').rCounter({
  //   duration: 36
  // });


  //header mobile

  if($(window).width() < 767) {
    
  } else {
    
  }

});
