(function(){
	'use strict';

	var targetParentName = '#textSlides';
	var pace = 4;
	var inter;
	var current = 0;
	var hovering = false;

	var imageSet1 = ['_img/1.jpg','_img/3.jpg','_img/5.jpg','_img/7.jpg'];
	var currentImageSet1 = 0;
	var imageSet2 = ['_img/2.jpg','_img/4.jpg','_img/6.jpg','_img/8.jpg'];
	var currentImageSet2 = 0;
	$(init);
	setInterval(changeBackgroundImages, pace * 2000);
	

	function changeBackgroundImages() {
    	img1Fade();
    	setTimeout(img2Fade, 4000);
	}

	function img1Fade(){

	    $('.banner').fadeOut(2000, function(){$('.banner').css({"background-image": 'url(' + imageSet1[++currentImageSet1] + ')'})});
	    $('.inner').fadeIn(2000);
	    if (currentImageSet1 >= imageSet1.length - 1) {

	            currentImageSet1 -= imageSet1.length;
	        };
	}

	function img2Fade(){
	    $('.inner').fadeOut(2000, function(){$('.inner').css({"background-image": 'url(' + imageSet2[++currentImageSet2] + ')'})});
	    $('.banner').fadeIn(2000);
	    if (currentImageSet2 >= imageSet2.length - 1) {

	            currentImageSet2 -= imageSet2.length;
	        };
	}

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