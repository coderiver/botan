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
	toggleSlide('#target2', '#slide2');


	$('.js-close').click(function(event) {
		$(this).closest('.js-show').removeClass('is-open');
	});
});