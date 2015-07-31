$.getJSON("./assets/json/works2.json", function (data) {
    var html = '',
        el = document.getElementById("kome");
    $.each(data, function (key, val) {

         html += "<td><a href=" + val.link + " data-ajax='false'><img src=" + val.img + "><div class='dsc'>" + val.expo + "<br><em>" + val.datum + "</em></div></a></td>";
    });
    el.innerHTML = html;
});


$('.hero-portfolio .card').dblclick(function(){
	like();
});

$('.hero-portfolio .card .figure .like').click(function(){
	like();
});


function like(){
	console.log("like");
}


// function createCard(title, image, tags, skills, date, link){
// 	var tpl 
// 			=	"<div class=\"grid-4\">"
//                     +"<div target=\"_blank\" class=\"card\">"
//                         +"<div class=\"figure\">"
//                            +"<div class=\"image\" style=\"background-image: url(" + image + ");\"></div>"
//                             +"<div class=\"shadow\"></div>"
//                             +"<div class=\"tags\"><span>website</span> <i class=\"typcn typcn-arrow-maximise-outline\" ></i></div>"
//                             +"<div class=\"like\">"
//                                 +"<i class=\"typcn typcn-heart-outline\" ></i>"
//                                 +"<span>Seja o primeiro a curtir.</span>"
//                             +"</div>"
//                         +"</div>"
//                         +"<div class=\"description\">"
//                         +"<h2>" + title + "</h2>"
//                             +"<strong>Responsabilidades: </strong> " + skills + ".<br/>"
//                             +"<strong>Data: </strong> " + date + "."
//                             +"<a href=\"" + link + "\" target=\"_blank\" class=\"btn\">"
//                                 +"Visitar"
//                             +"</a>"
//                         +"</div>"
//                     +"</div>"
//                 +"</div>";

//      console.log(tpl);
// 	$('.hero-portfolio .cards').append(tpl);
// }