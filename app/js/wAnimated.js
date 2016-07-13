/*
 * $(".section_2").wAnimated("bounceInRight", "200");
 */
(function($) {
	$.fn.wAnimated = function(effect, offset, fun) {
		var th = this;
		$(th).css("opacity", "0").addClass("animated").waypoint({
			handler: function(direction) {	
				if (fun)
					fun($(th).find(".s3-item-icon"));
				if (effect)
					$(th).addClass(effect).css("opacity", "1");				
			},
			offset: offset
				
		});
	};
})(jQuery);