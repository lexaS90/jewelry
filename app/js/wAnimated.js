/*
 * $(".section_2").wAnimated("bounceInRight", "200");
 */
/* (function($) {
 	$.fn.wAnimated = function(effect, offset, delay, fun) {
 		var delay = delay || 0
 		var th = this;
 		$(th).css("opacity", "0").addClass("animated").waypoint({
 			handler: function(direction) {	
 				setTimeout(function(){
 					if (fun)
 						fun($(th).find(".s3-item-icon"));
 					if (effect)
 						$(th).addClass(effect).css("opacity", "1");	
 				},delay);
 				$(this).disable();
 			},
 			offset: offset

 		});
 	};
 })(jQuery);*/



 (function($) {
 	$.fn.wAnimated = function(effect, offset, delay, fun) {
 		var delay = delay || 0
 		var th = this;
 		$(th).css("opacity", "0").addClass("animated"); 		
 		var waypoint = new Waypoint({
 			element: $(th)[0],

 			handler: function(direction) {
 				setTimeout(function(){
 					if (fun)
 						fun($(th).find(".s3-item-icon"));
 					if (effect)
 						$(th).addClass(effect).css("opacity", "1");	
 				},delay);
 			},

 			offset:offset

 		});

 		// waypoint.disable();


 	};
 })(jQuery);