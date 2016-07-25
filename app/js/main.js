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

	// headerH();
	

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


	$(".main-header-right").wAnimated("bounceInRight", "90%");
	$(".form-jewelry").wAnimated("zoomIn", "90%");


	$(".s1 .section-title").wAnimated("bounceInRight", "90%");
	$(".s1 .s1-text-content").wAnimated("bounceInLeft", "90%");
	$(".s1 .s1-video-content").wAnimated("fadeIn", "80%", "3s");

	$(".s2 .section-title").wAnimated("bounceInLeft", "80%");
	$(".character").wAnimated("bounceInLeft", "80%");
	$(".img-size").wAnimated("fadeIn", "80%", "5s");
	
	$(".s3 .section-title").wAnimated("bounceInRight", "80%");
	$(".s3-item").each(function(index){
		var item = $(this);		
		
		item.wAnimated("fadeIn", "80%", "1s", 400*index+"ms", function(th){
			setTimeout(function(){
				th.find(".s3-item-icon").removeClass("off").addClass("on");
			},400*index);				
		});
	});	

	$(".s4 .section-title").wAnimated("bounceInLeft", "80%");
	$(".s4 .contact-form").wAnimated("zoomIn", "80%");


	/* ====== End scroll animation ====== */

	/* ====== Form Validate ====== */

	$.fn.jValidate = function(rules, messages){
		messages = (typeof(messages)=="object") ? messages : {};		

		$(this).validate({
			rules:rules,
			messages:messages,
			showErrors: function(errorMap, errorList) {
				var errorRes = "";
				for(var error in errorList)
					errorRes = errorRes + errorList[error].message;

				if ('' !== errorRes){  
					$.jGrowl(errorRes, {	
						theme: "error",
						header: "Ошибка ввода данных",
						position: "top-left"
					});
				}


				this.defaultShowErrors();
			},

			errorPlacement: function(error, element) {},
			onfocusout: false,
			onkeyup: false
		});
	}



	$("#callBackForm").jValidate(
	{
		name: {
			required: true,
		},
		phone: {
			required: true,
		},
	},
	{
		name: "<div>Поле <strong>Ваше имя</strong> заполнено с ошибкой</div>",
		phone: "<div>Поле <strong>Телефон</strong> заполнено с ошибкой</div>",	      
	}
	);

	$("#contactForm").jValidate(
	{
		name:{
			required: true,
		},
		email:{
			required: true,
			email:true,
		},
		phone:{
			required: true,
		},
		message:{
			required: true,
		}
	},
	{
		name: "<div>Поле <strong>Ваше имя</strong> заполнено с ошибкой</div>",
		email: "<div>Поле <strong>Email</strong> заполнено с ошибкой</div>",	      
		phone: "<div>Поле <strong>Телефон</strong> заполнено с ошибкой</div>",	      
		message: "<div>Поле <strong>Сообщение</strong> заполнено с ошибкой</div>",	      
		
	}

	);

	$("#orderForm").jValidate(
	{
		name:{
			required: true,
		},
		phone:{
			required: true,
		}
	},
	{
		name: "<div>Поле <strong>Ваше имя</strong> заполнено с ошибкой</div>",	      
		phone: "<div>Поле <strong>Телефон</strong> заполнено с ошибкой</div>",	      
		
	}

	);	

	/* ====== End form Validate ====== */


	/* ====== Popup ====== */


	$('.popup-btn').magnificPopup({
		callbacks: {
			open: function() {
				$(".popup").addClass("animated bounceInLeft");
			}
		}
	});


	/* ====== End popup ====== */

	/* ====== Cross-browser ====== */

if (!Modernizr.input.placeholder)
		$('input, textarea').placeholder();


	/* ====== End cross-browser ====== */


});


$(window).resize(function(){
	headerH("r");

});

$(window).scroll(function(){

});

$(window).load(function(){
	headerH("r");

});

function headerH(t){
	function get_bottom_coordinate(ob){
		var $el = ob; 
		return $el.offset().top + $el.outerHeight(true);
	}
	
	if ($("html").width() > 992){
		var html_h = $("html").height();
		$(".main-header-left").css('min-height',html_h);
	}
	else{
		$(".main-header-left").css('min-height',"0");
	}

	var top = get_bottom_coordinate($(".img-jewelry-wrapper"));
	var bottom = get_bottom_coordinate($(".main-header"));

	var form_w = $(".form-jewelry-wrapper").height();

	var form_top_margin = (bottom - top - form_w) / 2;console.log(top);
	$(".form-jewelry-wrapper").css("margin-top", form_top_margin);
}