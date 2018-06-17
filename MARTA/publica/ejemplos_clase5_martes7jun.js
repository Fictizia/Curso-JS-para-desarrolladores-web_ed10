/*
- valido: tengamos una cadena de texto con contenido -> "ulises"
- no valido: "cancelar" o cadena de texto vacia -> false ni ""

*/

var respuesta = prompt("como te llamas...")

//if (type(respuesta) === "string" && respuesta.trim().length){
//if (respuesta) !== false || respuesta === "" ) {
if (respuesta) {
  console.log("Es valido...")
}else {
  consolo.log("No es valido...")
}
