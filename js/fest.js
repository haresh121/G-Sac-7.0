// AOS.init();
ScrollOut({
    targets: '.w1, .w2, #owlCar1, #owlCar2, #owlCar3, #owlCar4',
    threshold: 0.1
});
VANTA.BIRDS({
    el: '#home',
    // #123C69
    // color: "#9e363a",
    // color: '#46344e',
    // color: '#78244c',
    backgroundColor: "#1B1464",
    color1: "#eda234",
    color2: "#654a22",
    colorMode: "lerpGradient",
    // color: '#AC3B61',
    birdSize: 0.9,
    wingSpan: 40,
    separation: 76,
    alignment: 64,
    cohesion: 29
});
$(document).on('click', 'a[href^="#"]', function(e) {
    var width = $(window).width();
    var id = $(this).attr('href');
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    if(width <= 500){
        e.preventDefault();
        var pos = $id.offset().top;
        $('body, html').animate({scrollTop: pos-350}, 1200);
    }
    else{
        e.preventDefault();
        var pos = $id.offset().top;
        $('body, html').animate({scrollTop: pos-70}, 1200);
    }
});
var width = $(window).width();
var nav = false;
$('.hamb').click(function(event){
    if (!nav) {
        $('.right2').addClass('responsive').show(500);nav=true;
        $('.hamb i').removeClass('fa-bars');
        $('.hamb i').addClass('fa-times');
        $('.right2').click(function(){
            $(this).removeClass('responsive').hide(500);nav=false;
            $('.hamb i').removeClass('fa-times');
            $('.hamb i').addClass('fa-bars');
        });
    }
    else{
        $('.right2').removeClass('responsive').hide(500);nav=false;
        $('.hamb i').addClass('fa-bars');
        $('.hamb i').removeClass('fa-times');
    }
});
var navbar = $("nav");
var sticky = navbar.offsetTop;
function stickyFun(){
    if (window.pageYOffset >= sticky) {
        navbar.css({
            "position":"fixed"
        });
  } else {
        navbar.css({
            "position":"sticky"
        });
  }
}
var Nav = $('li a');
Nav.click(function(){
    $('a.active').removeClass("active");
    $(this).addClass("active");
    // $(this).attr('href')='';
});
$(document).scroll(function () {
     var position = $(document).scrollTop();
     var header = $('nav').outerHeight();
     $('section.grid').each(function(i) {
         if($(this).position().top <= (position + header))
          {
               $(".active").removeClass('active').addClass('removed');
               $("li a").eq(i).addClass('active');
          }
      });
   }); 
$("#techeve").owlCarousel({
    items: 4,
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    nav: false,
    dots: true,
    animateOut: "fadeOut",
    responsive : {
      1100 : {
        nav: false,
        items: 3,
        margin: 30
      },
      800:{
        items: 2,
        margin: 10
      },
      0:{
        items: 1,
        margin: 10
      }
    }
});
$("#nontecheve").owlCarousel({
    items: 4,
    margin: 30,
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause:true,
    nav: false,
    dots: true,
    animateOut: "fadeOut",
    responsive : {
      1100 : {
        nav: false,
        items: 3,
        margin: 30
      },
      800:{
        items: 2,
        margin: 10
      },
      0:{
        items: 1,
        margin: 10,
      }
    }
});
$('#owlCar1').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    nav: false,
    autoHeight: true,
    dots: false,
    mouseDrag: false,
    touchDrag: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    autoplayTimeout: 4000
});
$('#owlCar4').owlCarousel({
    items: 1,
    loop: true,
    margin: 0,
    autoplay: true,
    nav: false,
    dots: false,
    autoHeight: true,
    mouseDrag: false,
    touchDrag: false,
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    autoplayTimeout: 4000
});

