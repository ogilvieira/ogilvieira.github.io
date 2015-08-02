var APP = {};

APP._setup = function(){
	var myWindow = $(window);
	var myDocument = $(document);

	APP.windowWidth = myWindow.width();
	APP.windowHeight = myWindow.height();
	APP.resizeHeroIntro();
};

APP.resizeHeroIntro = function() {
	var hero = $('.hero.hero-intro'),
		height = APP.windowHeight;

	if ( APP.windowHeight < 320 && APP.windowWidth < 720 ) {
		height = 320;
	} else if ( APP.windowHeight < 500 && ( APP.windowWidth > 720 && APP.windowWidth < 960 )  ) {
		height = 500;
	} else if ( APP.windowHeight < 768 && ( APP.windowWidth > 960 && APP.windowWidth < 1199) ) {
		height = 768;
	}

	hero.height( height );
	$('.wrap', hero).height( height );
};


// listeners
$(window).resize( function(){
	APP._setup() 
});

$(document).ready( APP._setup() );

$('.btn-go-to-content').bind('click touchstart', function(event){
	event.preventDefault();
	$('body, html').animate({scrollTop: APP.windowHeight }, 500);
});

$('.parallax').parallax();