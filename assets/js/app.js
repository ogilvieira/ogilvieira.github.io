$(document).ready(function(){
	$(".animated-title h1").typed({
        strings: ["Gil Vieira", "<span>@</span>ogilvieira"],
        typeSpeed: 0,
        showCursor: false,
        backDelay: 2000,
      });
	createSliders();
});


$(window).resize(function(){
	createSliders();
});

function createSliders(){
	var w = $(window).width();
	if(w < 480){
		$(".hero-o-que-faco .items, .hero-portfolio .cards").owlCarousel({
			singleItem : true,
			autoPlay : false,
			pagination : true
		});
	}else {
		if($(".hero-o-que-faco .items, .hero-portfolio .cards").data('owlCarousel')){
			$(".hero-o-que-faco .items").data('owlCarousel').destroy();
			$(".hero-portfolio .cards").data('owlCarousel').destroy();
		}
	}
}


$(document).ready(function() { 
	$("html").niceScroll({cursorcolor:"rgba(0, 0, 0, 0.3)", cursorborder:"none", zindex:"9999999"})
});

if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 ){
	FastClick.attach(document.body);
}
