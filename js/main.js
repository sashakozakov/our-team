// ;(function($){
// 	$(document).ready(function(){
// 		var slider = $('.ba-team-slider');

// 		//slider init
// 		slider.slick({
// 			dots: true,
// 			prevArrow:'<svg class="slick-prev"><use xlink:href="#icon-angle-left"></use></svg>',
// 			nextArrow:'<svg class="slick-next"><use xlink:href="#icon-angle-right"></use></svg>'
// 		});

// 	});
// })(jQuery);

;(function($){
	$(document).ready(function(){
		var $slider = $('.ba-team-slider'),
		$prev = $('.slick-prev', $slider),
		$next = $('.slick-next', $slider);

		//slider init
		$slider.slick({
			dots: true,
			prevArrow:$prev,
			nextArrow:$next,
			slide: '.ba-slider'
		});

	});
})(jQuery);

