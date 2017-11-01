(function(){
	'use strict';

	var targetParentName = '#textSlides';
	var pace = 4;
	var inter;
	var current = 0;
	var hovering = false;

	$(init);

	function init(){
		var $parent = $(targetParentName);
		var $children = $parent.children();

		$('#text').hover(function() {
			hovering = true;
		}, function() {
			hovering = false;
		});

		$('#menu-button').on('click', function(){
			var open = $(this).attr('data-target');
			$(open).slideToggle(400);
		})

		inter = setInterval(function(){
			if (hovering != false) {
				return;
			}
			$children.eq(current++).fadeOut(500, function(){
				if(current == $children.length){
					current = 0;
				}
				$children.eq(current).fadeIn();
			});
		}, pace * 1000);
	}
	return {};
}());