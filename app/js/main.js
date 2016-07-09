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

});

$(window).scroll(function(){

});