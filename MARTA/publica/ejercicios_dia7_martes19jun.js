/* EJERCICIO 1 -
  Diseña un algoritmo que simula el lanzamiento de una moneda al aire e imprimir si ha salido cara o cruz.
*/

function lanzarMoneda(){
  var resultado = Math.floor(Math.random() * (3 - 1)) + 1;
  console.log ('El restultado es:', resultado );

  if (resultado===1) {
    console.log ('cara' );
  }else {
    console.log ('cruz' );
  }

}

lanzarMoneda();
