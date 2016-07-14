/* 
 * wAnimated(effect, offset, duration, delay, callback_function(){});
 * $(".section_2").wAnimated("fadeIn", "80%", "1s", "300ms",function(th){
	
 });
 */
(function($) {
	$.fn.wAnimated = function(effect, offset, duration, delay, fun) {

		var delay = delay || 0
		var th = this;

		$(th).css("opacity", "0").addClass("animated"); 
		
		if (duration){
			$(th).css({
				'-webkit-animation-duration':  duration,
				'-moz-animation-duration':     duration,
				'animation-duration':          duration
			});
		}
		if (delay){
			$(th).css({
				'-webkit-animation-delay':  delay,
				'-moz-animation-delay':     delay,
				'animation-delay':          delay
			});
		}

		var waypoint = new Waypoint({
			element: $(th)[0],

			handler: function(direction) {console.log("ok");
				if (fun)
					fun($(th));
				if (effect)
					$(th).addClass(effect).css("opacity", "1");

				this.destroy();
			},

			offset:offset

		});
	};
})(jQuery);