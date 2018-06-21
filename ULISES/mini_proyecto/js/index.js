console.log("Hola Mundo!");

/*Yay! Eventos!*/
document.getElementById("nombreArtista").addEventListener("keyup", function(event){
	if(event.keyCode === 13){
		var nombrePelicula = document.getElementById("nombreArtista").value.trim();
		console.log("Texto actual:", nombrePelicula)
	}
})



// Objetivo: Sacar lo que hace el usuario en el teclado con el input
// Secundario: Filtrar cuando hace enter y cuando no...


