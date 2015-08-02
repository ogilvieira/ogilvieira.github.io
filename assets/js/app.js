var APP = {};

APP._setup = function(){
	var myWindow = $(window);
	var myDocument = $(document);

	APP.windowWidth = myWindow.width();
	APP.windowHeight = myWindow.height();
	APP.resizeHeroIntro();
	
	console.log("adasd");

};

APP.resizeHeroIntro = function() {
	var hero 		= $('.hero.hero-intro');
	hero.height( APP.windowHeight );
};

$(window).resize( APP._setup() );
$(document).ready( APP._setup() );
