/* EJERCICIO 1
Diseña un algoritmo que lea dos números y los compare.
Como resultado esperamos que nos diga cual es mayor... o si son iguales.
*/

//ejemplo con if...else
var num1 = 5;
var num2 = 3;

if (num1 === num2){
  console.log ("Son iguales");
}else {
  console.log ("No son iguales");
}


//ejemplo con operador ternario
var num1 = 5;
var num2 = 5;
num1 === num2 ? console.log("Son iguales") :("No son iguales")

//ejemplo switch
var num1 = 8;

switch (num1) {
  case (8):
    console.log("Son iguales");
    break;
  case (15):
    console.log("No son iguales");
    break;
  case (20):
    console.log("No son iguales");
    break;
}

function compararNumeros (num1, num2) {
  switch (true){
    case (valor1 > valor2):
      console.log(valor1, "es mayor.");
      break;
    case (valor1 < valor2):
      console.log(valor2, "es mayor.");
      break;
    default:
      console.log("Son iguales")
  }
}

/* EJERCICIO 2
Diseña un script que lea tres números distintos y nos diga cual de ellos es el mayor.
*/

//ejemplo con if...else
var num1 = 5;
var num2 = 13;
var num3 = 8;

if ((num1 > num2) && (num1 > num3)){
  console.log ("El mayor es ", num1);
} else if (num2 > num3) {
  console.log ("El mayor es ", num2);
}else {
  console.log ("El mayor es ", num3);
}

//ejemplo con operador ternario
var num1 = 5;
var num2 = 13;
var num3 = 20;
((num1 > num2) && (num1 > num3)) ? console.log("El mayor es ", num1) : (num2 > num3) ? console.log("El mayor es ", num2) : console.log("El mayor es ", num3)

/* EJERCICIO 7
Diseña un algoritmo que nos confirme si un año es bisiesto o no.
Caracteristicas de un año bisiesto:
-Tiene que ser divisible entre 4
-No tiene que ser divisible entre 100
-Puede ser divisble entre 100 y entre 400

*/

var anio = prompt("Dime un año");

if ((anio %4) || (anio %100) && (%100 < anio < %400)) {
  console.log ("Es año bisiesto");
}else {
  console.log ("No es año bisiesto");
}

//
var valor1 = pedirNumero();
var valor2 = pedirNumero();

function pedirNumero (){
  return parseFloat(prompt("dame un numero"))

}
