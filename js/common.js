head.ready(function() {

	// $(document).on("click", function(){
	// 	$(".js-popup").hide();
	// });

	// function scrollFixedElements() {
	//     var scroll_left = $(this).scrollLeft();
	//     $(".fixed-element").css({
	//         left: -scroll_left
	//     });
	// }
	// scrollFixedElements();
	// $(window).scroll(function(){
	//     scrollFixedElements()
	// });

	function toggleSlide(targetId, slideId) {
		$(targetId).click(function(event) {
			$(this).toggleClass('is-clicked');
			$(slideId).toggleClass('is-open');
			return false;
		});
	}

	toggleSlide('#target1', '#slide1');

	//menu
	$('.js-menu').click(function() {
		$('body').addClass('menu-opened');
		$('.menu').addClass('is-open');
		$('.js-overlay').css('display', 'block');
		return false;
	});

	$('.js-close').click(function() {
		$('body').removeClass('menu-opened');
		$('.menu').removeClass('is-open');
		$('.js-overlay').css('display', 'none');
		return false;
	});

	//jscrollpane
	$(function()
	{
		$('.js-scroll').jScrollPane();
	});

	$(window).resize(function(event) {
		$('.js-scroll').jScrollPane();
	});


});