// No subir a GITHUB!!!
var apikey = "4cf11990"

console.log("Hola Mundo!");

/*
	---- Eventos! ----
*/

// Avisame cuando pulse alguna tecla dentro del input de texto....
document.getElementById("nombreArtista").addEventListener("keyup", function(event){
	// ¿Hemos pulsado enter?
	if(event.keyCode === 13){
		var nombrePelicula = document.getElementById("nombreArtista").value.trim();
		console.log("Texto actual:", nombrePelicula)
		// Llamo a la Api con el dato de la pelicula
		AjaxHandler("http://www.omdbapi.com/?t="+nombrePelicula+"&apikey="+apikey)
	}
})


/*
	---- AJAX! ----
*/
function AjaxHandler (url) {
  var xmlHttp = new XMLHttpRequest();

  xmlHttp.onreadystatechange = function() {
  	// ¿Tenemos ya la información?
    if (xmlHttp.readyState === 4) {
    	// ¿Tenemos datos validos o no?
      if (xmlHttp.status >= 100 && xmlHttp.status <= 300) {
      	var datosCrudos = xmlHttp.responseText
        var datos = JSON.parse(datosCrudos);
        console.log("Datos:", datos)
      } else if (xmlHttp.status >= 400 && xmlHttp.status <= 600) {
      	console.log("ERROR con AJAX!");
      }
    }
  };

  xmlHttp.open("GET", url, true);
  xmlHttp.send();
}





// Objetivo: Sacar lo que hace el usuario en el teclado con el input
// Secundario: Filtrar cuando hace enter y cuando no...


