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