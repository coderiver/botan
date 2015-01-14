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
		$('.menu').addClass('is-open');
		$('.js-overlay').css('display', 'block');
		return false;
	});

	$('.js-close').click(function() {
		$('.menu').removeClass('is-open');
		$('.js-overlay').css('display', 'none');
		if (!$('.menu').hasClass('is-open')){
			$('.menu__sub').removeClass('is-opened');
		};
		return false;
	});

	//submenu
	$('.menu__list-in').click(function(){
		$('.menu__sub').toggleClass('is-opened');	
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