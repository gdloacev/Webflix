$(document).ready(function (){
	$("nav ul li a").click(function (e){
		var titulo = "";
		e.preventDefault();
		texto = e.target.innerText;
		switch(texto){
			case "Todas": 
				titulo="Todas las Categorías"
				break;
			case "Acción":
				titulo="Peliculas de Acción"
				break;
			case "Drama":
				titulo="Peliculas de Drama"
				break;
			case "Infantil":
				titulo="Peliculas Infantiles"
				break;
			case "Terror":
				titulo="Peliculas de Mello"
				break;
			defualt:
				titulo="Categoria no Encontrada"
				break;
		};
		$("section h2").html(titulo);
	});

	$("#bsinopsis li a").click(function (e){
		e.preventDefault();
		visible = $("p").css("visibility");
		newcss = {
			"height": "0",
			"visibility": "hidden",
		};
		oldcss = {
			"height": "auto",
			"visibility": "visible", 
		};
		if (visible == "visible"){
			$("p").css(newcss);
		}
		else{
			$("p").css(oldcss);
		};
	});
});