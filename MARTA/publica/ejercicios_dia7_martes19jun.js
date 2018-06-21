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

/* EJERCICIO 2 -
Diseña un algoritmo que simula cien tiradas de dos dados y contar las veces que entre los dos suman 10.
*/
function lanzarDados1 (){
  var dado1 = Math.floor(Math.random() * (7 - 1)) + 1;
  var dado2 = Math.floor(Math.random() * (7 - 1)) + 1;
  resultado = dado1 + dado2

  console.log ('los dados son:', dado1 , dado2 );

    if (resultado===10){
      console.log ('El restultado es: 10');
    } else {
      console.log ('El restultado no es: 10');
    }
}

function lanzarDados2 (){
  var dado1 = Math.floor(Math.random() * (7 - 1)) + 1;
  var dado2 = Math.floor(Math.random() * (7 - 1)) + 1;
  resultado = dado1 + dado2

  console.log ('El restultado es:' + dado1 + ' y ' + dado2 );

  for (var i = 0; i < 100; i++) {

    if (resultado===10){
      console.log ('El restultado es 10 :' , resultado );
    } else {
      console.log ('El restultado no es 10 es', resultado );
    }
  }
}

lanzarDados ();
