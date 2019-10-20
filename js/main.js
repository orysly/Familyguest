function MenuToggle(checked) {
    var elm = document.getElementById('toggle');
    if (checked != elm.checked) {
        elm.click();
    }
}






// NAVBAR SCROLL
// $(window).scroll(function() {
// // 100 = The point you would like to fade the nav in.
//
// 	if ($(window).scrollTop() > 50 ){
//  		$('.nav').addClass('nav_scrolled');
// $('.menupont1').addClass('menupont1_scrolled');
// 	$('.spanclass').addClass('spanclass_scrolled');
//   } else {
//     $('.nav').removeClass('nav_scrolled');
//     $('.menupont1').removeClass('menupont1_scrolled');
// 	$('.spanclass').removeClass('spanclass_scrolled');
//  	};
// });

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});



$(document).ready(function(){
	$('.nav-icon4').click(function(){
		$(this).toggleClass('open');
    	$(this).toggleClass('fixed');
      $('.top_mobile').toggleClass('top_mobile_hide');
  	$(document.body).toggleClass('bodyfixed');

	});
});



$(document).ready(function(){
	$('.menupont1').click(function(){
    if (window.innerWidth < 1024) {
		$('.nav-icon4').toggleClass('open');
    $('.nav-icon4').toggleClass('fixed');
      $('.top_mobile').toggleClass('top_mobile_hide');
	$(document.body).removeClass('bodyfixed');
  }
	});
});



$(document).ready(function(){
	$('.menupont1_mobile').click(function(){
		$('.nav-icon4').toggleClass('open');
    $('.nav-icon4').toggleClass('fixed');
      $('.top_mobile').toggleClass('top_mobile_hide');
	$(document.body).removeClass('bodyfixed');
	});
});





$(document).ready(function(){
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
     $('.counter').html(scrollTop);

    if (scrollTop >= 50) {
      $('#global-nav').addClass('scrolled-nav');
    } else if (scrollTop < 50) {
      $('#global-nav').removeClass('scrolled-nav');
    }

  });

});
