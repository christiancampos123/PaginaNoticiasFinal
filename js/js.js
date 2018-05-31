var url="https://rawgit.com/christiancampos123/PaginaNoticias/master/Json";
var cargado = 1;
var ok = false;

$(document).ready(function(){

$(window).scroll(function () {
    if ($(window).scrollTop() + $(window).height() + 10 >= $(document).height() && ok == true) {
        cargar();
	}
		
});

 $(".auto").click(function(){
	if(ok==false){
		$("#si").show();
		$("#no").hide();
		ok=true;
		$("#botoncarg").hide();
	}else{
		$("#si").hide();
		$("#no").show();
		ok=false;
		$("#botoncarg").show();
	}

});

//ventanas modales

$("body").on("click", ".foto", function(){
		var x = $(this).attr('id');
		$("#imgMod").attr("src","imgbig/"+x+".jpg");

	});
	
});


function cargar() {
    if (cargado < 3) {
		$("#cargando").show();
			$.getJSON(url + cargado + ".json", function (jsonObject) {
				mijson(jsonObject);
				$("#cargando").hide();
				if(cargado==3){
					$('#botoncarg').text('No hay más Noticias');
					$("#botoncarg").show();
				}
			});
			cargado++;
		} else {
        $('#botoncarg').text('No hay más Noticias');
	}
};



function mijson(json) {
    $.each(json, function (i, item, z) {
		$("#nuevas").append(
		'<div class="row-sm-4 thumbnail">'+
		'<div class="row">'+
		'<div class="col-sm-3">'+
		'<img data-toggle="modal" data-target="#myModal" id=f'+(((cargado-2)*3+i+1)+4)+' class="foto" src= "'+ item.imgbig +'" alt= "foto">'+
		'</div>'+
		'<div class="col-sm-9">'+ 
		'<div class="well well-sm">'+
		'<h2>'+
		'<b>'
		+ item.title +
		'</b>'+
		'</h2>'+
		'</div>'+ item.description + 
		'<br>' + "Que el corazon de las cartas esté con vosotros."+
		'<div class="noticiaC">'+
		'</div>'+
		'<div class="fecha">'+ item.datetime +
		'</div>'+
		'</div>'+
		'</div>'+
		'</div>'
		);


	});
};