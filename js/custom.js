// loader
$(window).on("load", function() {
	$("#loader-wrapper").fadeOut("slow", function() {
		$("body").removeAttr("style")
	});
});

$(document).ready(function(){
	// nav
	$(window).on('scroll',function(){
		var top = $(window).scrollTop();
		// console.log(top)
		if(top >= 65){
			$('.top_nav').addClass('scrollnav');
		}
		else{
			$('.top_nav').removeClass('scrollnav');
		}
	});

	// banner
	$(".banner").slick({
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'ease',
		nextArrow:'.next',
		prevArrow:'.prev'
	});

	// aboutslider
	$(".aboutslider").slick({
		dots: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow:'.about_next',
		prevArrow:'.about_prev',
		responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});

	// testimonials_text
	$(".testimonials_text").slick({
		dots: true,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'ease',
		arrows:false
	});
	// testimonials_image
	$(".testimonials_image").slick({
		dots: false,
		infinite: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		cssEase: 'ease',
		nextArrow:'.testimonials_next',
		prevArrow:'.testimonials_prev',
		autoplay: true,
		easing: 'swing', 
		speed: 1000
	});

	// photos
	$(".photos").slick({
		dots: false,
		infinite: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		nextArrow:'.photos_next',
		prevArrow:'.photos_prev',
		responsive: [
		{
			breakpoint: 1199,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 1
			}
		}
		]
	});

	// bottom to top
	var btn = $('.topbtn');

	$(window).scroll(function() {
		if ($(window).scrollTop() > 300) {
			btn.addClass('show');
		} else {
			btn.removeClass('show');
		}
	});

	btn.on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop:0}, '300');
	});
	// aos
	AOS.init();
});