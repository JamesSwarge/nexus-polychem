includeHTML(),$(document).ready((function(){$("#getInstantQuote").click((function(){$("html, body").animate({scrollTop:$(".quote-section").offset().top},2e3)})),$(".level1").mouseover((function(){let e=$(this).next().height();console.log(e),$(this).next().find(".level3").height(e)})),$(".level1").click((function(e){e.preventDefault(),e.stopPropagation(),console.log("e",e),console.log("e",e.delegateTarget.nextElementSibling)})),$(".product-cards-carousel").owlCarousel({autoplay:!0,autoplayTimeout:1500,autoplayHoverPause:!0,mouseDrag:!1,loop:!1,margin:10,nav:!1,dots:!1,margin:16,items:3.5,responsive:{0:{items:1.3,dots:!0},576:{items:3},1e3:{items:3.7}}}),$(window).width()}));
//# sourceMappingURL=about.6c6eb841.js.map
