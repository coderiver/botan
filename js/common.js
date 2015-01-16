head.ready(function() {

	(function(){
		var body      	  = $('body'),
			menuWrap  	  = $('.menu'),
			menu      	  = $('.menu__in'),
			submenu  	  = $('.menu__sub')
			overlay   	  = $('.overlay'),		
			activeClass   = 'is-active';
			openedClass	  = 'is-open';
	
		//menu
		$('.js-menu').click(function(event) {
			event.preventDefault();
			body.addClass(activeClass);
			menuWrap.addClass(activeClass);
			menu.addClass(openedClass);
			overlay.addClass(activeClass);
		});

		$('.js-close').click(function(event) {
			event.preventDefault();
			body.removeClass(activeClass);
			menuWrap.removeClass(activeClass);
			menu.removeClass(openedClass);
			overlay.removeClass(activeClass);
			if (!menu.hasClass(openedClass)){
				submenu.removeClass(openedClass);
			};
		});

		//submenu
		$('.menu__list-in > a').click(function(event){
			event.preventDefault();

			var targetSubmenu = $(this).parent().find(submenu);
					
			if(targetSubmenu.hasClass(openedClass)){
				targetSubmenu.removeClass(openedClass);
			} else{
				submenu.removeClass(openedClass);	
				targetSubmenu.addClass(openedClass);
			}
		});

	})();	

	//jscrollpane
	$(function()
	{
		$('.js-scroll').jScrollPane();
	});

	$(window).resize(function(event) {
		$('.js-scroll').jScrollPane();
	});

	function toggleSlide(targetId, slideId) {
		$(targetId).click(function(event) {
			$(this).toggleClass('is-clicked');
			$(slideId).toggleClass('is-open');
			return false;
		});
	}

	toggleSlide('#target1', '#slide1');

});