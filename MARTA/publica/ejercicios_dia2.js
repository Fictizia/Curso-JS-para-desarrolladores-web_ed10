/***** EJERCICIO 3
Diseña un programa que lea dos números y los compare.
Como resultado esperamos que nos diga cual es mayor... o si son iguales.*/

var valor1 = 25
var valor2 = 10

if (valor1>valor2) {
  console.log("El numero mayor es", valor1)

} else {
  console.log("El numero mayor es", valor2)
}

/***** EJERCICIO 4
 Diseña un programa que lea tres números distintos y nos diga cual de ellos es el mayor..*/


 var valor1 = 8
 var valor2 = 3
 var valor3 = 10

 if (valor1>valor2 && valor1>valor3) {
   console.log ("El numero mayor es", valor1)
 } else {
   if (valor2>valor3) {
     console.log ("El numero mayor es", valor2)
   } else {
     console.log ("El numero mayor es", valor3)
   }

 }

 /***** EJERCICIO 5
 Diseña un programa que siga el siguiente proceso:
 Pedir por teclado tres números.
 Si el primero es negativo, debe sumar los otros dos
 Si no multiplicará los tres numeros
 Mostrar el resultado final incluyendo una referencia a la operación realizada.*/

 var valor1 = 8
 var valor2 = 3
 var valor3 = 10

 if (valor1<=0) {
   suma = valor2 + valor3
   console.log ("En valor1 es negativo, luego sumo los otros dos:", suma)
 } else {
   multiplicacion = valor1 * valor2 * valor3
   console.log ("El valor1 no es negativo, luego multiplico todos=", multiplicacion)
 }

 /***** EJERCICIO 6
 Diseña un algoritmo que aplique al precio de un producto un descuento cuando se den las siguientes caracteristicas.
-Se aplica un 25% cuando:
-Estamos en los meses de invierno
-Y no es viernes o fin de semana.*/

var mes = prompt("Dime un mes");
var dia = prompt("Dime el día de la semana");
var precio = 100;

if ((mes == "diciembre" || mes == "enero" || mes == "febrero") && (dia != "viernes" && dia != "sabado" && dia != "domingo")){
  preciocondescuento = (precio*25/100);
  console.log (mes, dia, "Mes y dia acertado, el precio es con descuento", preciocondescuento );
} else {
  console.log (mes, dia, "Ni mes ni dia acertado, el precio es sin descuento", precio);
}

/***** EJERCICIO 7
Diseña un algoritmo que al introducir un numero por teclado.
Que nos diga si es positivo o negativo.*/

var valor = prompt("Dime un numero");

if (valor >= 0) {
  console.log (valor, "El numero es positivo")
} else {
  console.log (valor, "El numero es negativo")
}

/***** EJERCICIO 9
Diseña un algoritmo que al introducir un numero por teclado.
Que nos diga si es par o impar.*/

var valor = prompt("Dime un numero");

if (valor %2 == 0) {
  console.log ("El numero es par")
} else {
  console.log ("El numero es impar")
}

/***** EJERCICIO 10
Diseña un algoritmo que confirme si una fecha es valida y además devuelva
la fecha en dos formatos diferentes.

Características:
-El usuario introduce tres números (día, mes, año)
-Validar la fecha. En caso de error incluir un mensaje informativo.
-Después de validar, devolvemos la fecha en formato DD/MM/AAAA
-Convertimos el número del mes, en el nombre del mes real y devolvemos
la fecha en el siguiente formato ( DD de MES de AAAA)*/

var dia = prompt("Dime numero de día");
var mes = prompt("Dime un mes");
var anio = prompt("Dime un año");
var mes = [{dia: dia, mes: mes, anio: anio};]

var fecha = {dia: dia, mes: mes, anio: anio};
var fecha.mesnum
if (true) {
  if ((fecha.dia <= 31 )&& (fecha.dia!='')) {
    console.log ( "Dia correcto: " , fecha.dia);
  } else {
    alert ("dia no correcto");
    console.log ( "Dia no correcto: " , fecha.dia);
  }


  if (fecha.mes == "enero" || fecha.mes == "febrero" || fecha.mes == "marzo" || fecha.mes == "abril" || fecha.mes == "mayo"
  || fecha.mes == "junio" || fecha.mes == "julio" || fecha.mes == "agosto" || fecha.mes == "septiembre" || fecha.mes == "octubre"
  || fecha.mes == "noviembre" || fecha.mes == "diciembre") {
    console.log ( "Mes correcto: " , mes);

     //convertimos los meses a numeros
    switch (fecha.mes ) {
      case "enero":
        console.log("01");
        break;
      case "febrero":
        console.log("02");
        break;
      case "marzo":
        console.log("03");
        break;
      case "abril":
        console.log("04");
        break;
      case "mayo":
        console.log("05");
        break;
      case "junio":
        console.log("06");
        break;
      case "julio":
        console.log("07");
        break;
      case "agosto":
        console.log("08");
        break;
      case "septiembre":
        console.log("09");
        break;
      case "octubre":
        console.log("10");
        break;
      case "noviembre":
        console.log("11");
        break;
      case "diciembre":
        console.log("12");
        break;
    default:

        console.log("esto no funciona " + fecha.mes  + ".");
    }

  } else {
    alert ("Mes no correcto");
    console.log ( "Mes no correcto: " , fecha.mes);
  }



  if ((fecha.anio <= 2018 )&& (fecha.anio!='')) {
    console.log ( "Año correcto: " , fecha.anio)
  } else {
    alert ("año no correcto")
    console.log ( "Año no correcto: " , fecha.anio)
  }

  console.log ( "Fecha: " , fecha.dia + '/' + fecha.mesnum + '/' + fecha.anio)
}


// con un array

function damefecha (){
  var dia = prompt("Dime numero de día");
  var mes = prompt("Dime un mes");
  var anio = prompt("Dime un año");
  var fecha = {dia: dia, mes: mesnum, anio: anio};



  if(true) {
      if ((fecha.dia <= 31 )&& (fecha.dia!='')) {
        console.log ( "Dia correcto: " , fecha.dia);
      } else {
        alert ("dia no correcto");
        console.log ( "Dia no correcto: " , fecha.dia);
      }


      if (fecha.mes == "enero" || fecha.mes == "febrero" || fecha.mes == "marzo" || fecha.mes == "abril" || fecha.mes == "mayo"
          || fecha.mes == "junio" || fecha.mes == "julio" || fecha.mes == "agosto" || fecha.mes == "septiembre" || fecha.mes == "octubre"
          || fecha.mes == "noviembre" || fecha.mes == "diciembre") {

          console.log ( "Mes correcto: " , fecha.mes);

          var messes = [undefined, "enero", "febrero"..]
          var mesnumero = messes.indexOf("sombrero") // -1

          var mesnum = [{mes:"enero", num:1},{mes:"febrero", num:2},{mes:"marzo", num:3},
                        {mes:"abril", num:4},{mes:"mayo", num:5},{mes:"junio", num:6},
                        {mes:"julio", num:7},{mes:"agosto", num:8},{mes:"septiembre", num:9},
                        {mes:"octubre", num:10},{mes:"noviembre", num:11},{mes:"diciembre", num:12},];

          var mes = mesnum;

      } else {
        alert ("Mes no correcto");
        console.log ( "Mes no correcto: " , fecha.mes);
      }


      if ((fecha.anio <= 2018 )&& (fecha.anio!='')) {
        console.log ( "Año correcto: " , fecha.anio);
      } else {
        alert ("año no correcto");
        console.log ( "Año no correcto: " , fecha.anio);
      }

      console.log ( "Fecha: " , fecha.dia + '/' + fecha.mes + '/' + fecha.anio);
    }


  }
