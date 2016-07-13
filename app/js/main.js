$(document ).ready(function(){
	$(".phone").mask("(999) 999-9999");
  	
	/* ====== Video ====== */

	$(".player").click(function(){		
		videoStart($(this));
	});

	function videoStart(ob){
		$(ob).toggleClass("video-zoom");
		ob.find(".video")[0].paused ? ob.find(".video")[0].play() : ob.find(".video")[0].pause();
	}

	/* ====== End video ====== */

	/* ====== Height element ====== */

	headerH();
	

	/* ====== End height element ====== */

	/* ====== Mouse animation ====== */

	function mousescroll(){
    $('.scroll').animate({
        'bottom':'10px'
    }, 300, 'linear', function(){
        $('.scroll').animate({
            'bottom':'40px'
        }, 300, 'linear');
    });
	}

	setInterval(function(){
    mousescroll();
    setTimeout(mousescroll, 600);
	}, 5000);

	$("#scroll_header").click(function() {
		$("html, body").animate({ scrollTop: $(".main-header").height()}, "slow");
		return false;
	});

	/* ====== End mouse animation ====== */

	/* ====== Scroll animation ====== */


	$(".main-header-right").wAnimated("bounceInRight", "200");
	$(".form-jewelry").wAnimated("zoomIn", "200");


	$(".s1 .section-title").wAnimated("bounceInRight", "90%");
	$(".s1 .s1-text-content").wAnimated("bounceInLeft", "90%");
	$(".s1 .s1-video-content").wAnimated("fadeIn", "80%");

	$(".s2 .section-title").wAnimated("bounceInLeft", "80%");
	$(".character").wAnimated("bounceInLeft", "80%");
	$(".img-size").wAnimated("fadeIn", "80%");
	
	$(".s3-item").each(function(index){
		var item = this;
		setInterval(function(){
			/*item.wAnimated("fadeIn", "80%", function(th){
				th.removeClass("off").addClass("on");
			});*/
			$(item).find(".s3-item-icon").removeClass("off").addClass("on");
			// console.log(item.html);
		},1000);		
	});	


	/* ====== End scroll animation ====== */

});

$(window).resize(function(){
	headerH();

});

$(window).scroll(function(){

});

function headerH(){
	function get_bottom_coordinate(ob){
		var $el = ob; 
		return $el.offset().top + $el.outerHeight(true);
	}
	
	if ($("html").width() > 992){
		var html_h = $("html").height();
		$(".main-header-left").height(html_h);
	}
	else{
		$(".main-header-left").height("auto");
	}

	var top = get_bottom_coordinate($(".img-jewelry-wrapper"));
	var bottom = get_bottom_coordinate($(".main-header"));

	var form_w = $(".form-jewelry-wrapper").height();

	var form_top_margin = (bottom - top - form_w) / 2;
	$(".form-jewelry-wrapper").css("margin-top", form_top_margin);
}