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

APP.Works = {};

APP.Works.template = function( params ) {
	console.log( params );

	var image 		= params.image || "",
		link 		= params.link || "",
		title 		= params.title || "",
		collaboration = params.collaboration || "",
		month_year	= params.month_year || "",
		logo 		= params.logo || "";

	var tpl = "<div class=\"grid-3\">";
		tpl += "    <a href=\""+link+"\" class=\"work-item\">";
		tpl += "        <div class=\"image\">";
		tpl += "            <figure>";
		tpl += "                <img src=\""+image+"\">";
		tpl += "            </figure>";
		tpl += "        </div>";
		tpl += "        <div class=\"title\">";
		tpl += "            "+title+"";
		tpl += "        </div>";
		tpl += "        <div class=\"description\">";
		tpl += "            <span class=\"collaboration\">"+collaboration+"</span>";
		tpl += "            <span class=\"month-year\">"+month_year+"</span>";
		tpl += "        </div>";
		tpl += "    </a>";
		tpl += "</div>";


		if( logo ) {
			tpl.replace("<div class=\"title\">", "<div class=\"title\" style=\"background-image: url("+logo+")\">");
		};

		return tpl;
};

APP.Works.include = function( nodes ){
	var nodeHtml = "";

	$.each(nodes, function(key, val){
		nodeHtml += APP.Works.template( { image : val.image, title : val.title, collaboration : val.collaboration, month_year : val.month_year, logo : val.logo });
	});

	$('.work-list .container-12').html( nodeHtml );
};

APP.Works.loadWorks = function() {
	$.ajax({
		url: './assets/json/work-list.json',
		type: 'post',
		dataType: 'json'
		// data: {param1: 'value1'},
	})
	.done(function() {
		console.log( "ok!" );
	})
	.always(function( result ) {
		APP.Works.include( result );
	});
}();


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