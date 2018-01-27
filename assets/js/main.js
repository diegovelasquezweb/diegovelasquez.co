(function($) {
  FastClick.attach(document.body);

  // @fadeOut
  $(document).ready(function() {
    $("body").removeClass("fade-out");

      new WOW().init();

  });



// cierre

$(".tabs-menu a").hover(function (event) {
  event.preventDefault();
  $(this).parent().addClass("current");
  $(this).parent().siblings().removeClass("current");
  var tab = $(this).attr("href");
  $(".tab-content").not(tab).css("display", "none");
  $(tab).fadeIn();
});
$(window).on('beforeunload', function () {
  $(window).scrollTop(0);
});
// $('.slider').slider({
//   full_width: true,
//   indicators: false
// });
$(document).scroll(function () {
  console.log($(document).scrollTop());
})
$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  //        if (scroll >= 601) {
  //          $("header .contact").addClass("active");
  //        } else {
  //          $("header .contact").removeClass("active");
  //        }
});
if ($(window).width() <= 1024) {
  $("header .contact").addClass("active");
}
$('.open-contact').click(function () {
  $('section.contact').addClass('active')
  $('.overlay').addClass('active')
});
$('.overlay').click(function () {
  $('section.contact').removeClass('active')
  $('.overlay').removeClass('active')
});
$('.close-contact').click(function () {
  $('section.contact').removeClass('active')
});
$('.open-left').click(function () {
  $('.aboutCenter').addClass('activeLeft')
  $('.aboutRight').addClass('active')
  $('.aboutLeft').addClass('activeBig')
});
$('.aboutLeft').click(function () {
  $('.aboutCenter').removeClass('activeLeft')
  $('.aboutRight').removeClass('active')
  $('.aboutLeft').removeClass('activeBig')
});
$('.open-right').click(function () {
  $('.aboutCenter').addClass('activeRight')
  $('.aboutLeft').addClass('active')
  $('.aboutRight').addClass('activeBig')
});
$('.aboutRight').click(function () {
  $('.aboutCenter').removeClass('activeRight')
  $('.aboutLeft').removeClass('active')
  $('.aboutRight').removeClass('activeBig')
});
$('#fullpage').fullpage({
  //        anchors: ['home', 'about', 'skills', 'knows', 'experience'],
  //        menu: '#menu',
  autoScrolling: true,
  scrollBar: true,
//        css3: false,
//		scrollingSpeed: 1200,
//		easing: 'easeOutBack',
//        fadingEffect: true,
//        loopBottom: true,
//		loopTop: true,
  afterLoad: function (anchorLink, index) {
    if (index == 1) {
      $(".aboutUs .btn, .aboutUs h3").removeClass("active");
    }
    if (index == 2) {
      $("header .contact, header .linkedin").addClass("active");
      $(".aboutUs .btn, .aboutUs h3").addClass("active");
      $("#intro h2, #intro p, #intro a").removeClass("active");
      $("#imagina, #dekkode, #wondercraft").removeClass("active");
       $(".video").removeClass("activex");
    }
    if (index == 3) {
      $("#intro h2, #intro p, #intro a").addClass("active");
      $("#imagina, #dekkode, #wondercraft").addClass("active");
//            $(".video").addClass("activex");


      $(".aboutUs .btn, .aboutUs h3").removeClass("active");
    }
    if (index == 4) {
      $("#intro h2, #intro p, #intro a").removeClass("active");
      $("#imagina, #dekkode, #wondercraft").removeClass("active");
       $(".video").removeClass("activex");

    }
    if (index == 5) {}
    if (index == 6) {}
  }
});

}(jQuery));

(function ($) {
  $.fn.clickToggle = function (func1, func2) {
    var funcs = [func1, func2];
    this.data('toggleclicked', 0);
    this.click(function () {
      var data = $(this).data();
      var tc = data.toggleclicked;
      $.proxy(funcs[tc], this)();
      data.toggleclicked = (tc + 1) % 2;
    });
    return this;
  };
}(jQuery));








