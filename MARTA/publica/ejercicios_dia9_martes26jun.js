/* EJERCICIO 1 -
   Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase.
*/

//Me devuelve el texto desde la posicion 0 a la posicion 5
var mitexto = "Lorem ipsum dolor sit amet"
console.log("(0,5): "    + mitexto.substr(0,5));

// Me da la posicion de la letra a
"Lorem ipsum dolor sit amet, consectetur adipiscing elit.".indexOf("a") //22

//entonces el ejercicio seria
var mitexto = "Lorem ipsum dolor sit amet"
var coincidencias = 0

for (var i = 0; i < mitexto.length; i++) {
  //con esto me dice el numero de caracteres que tiene mi texto
  console.log (i)
  //con charAt le digo que letra hay en cada posicion
  console.log("El carácter (posición) '" + mitexto.charAt(i) + "'")
  //voy a crear una variable con el valor del caracter
  var caracter = mitexto.charAt(i)
  if (caracter === "a"){
    console.log ("mi caracater si es a");
    coincidencias = coincidencias+1;
  }else {
    console.log ("mi caracater no es a");
  }
}
console.log ("mis coincidencias seran: ", coincidencias);


/* Ejercicios 1 de Arrays -
Junta estos tres Arrays ["Oscar", ...], [9897667, ...], [false, ...] de tal forma que construyan un único Array anidado [["Oscar", 9897667, false], [etc...]]
*/
/************
paso 1 de ejercicio 1 de arrays con la misma longitud...
*************/

// 1. Definir Arrays
var nombres = ["Oscar", "Maria", "Pepa"];
var ids = [9897667, 23456, 34567];
var administradores = [false, true, false];
var resultado = [];

// 2. Bucle
for(var i = 0; i < nombres.length; i++){
	// ESTO PASA CADA VUELTA
	console.log("Una vuelta....");

	// crear perfil
	var nombre = nombres[i];
	var id = ids[i];
	var esAdmin = administradores[i];
	var listaTemporal = [nombre, id, esAdmin]

	//var listaTemporal = [array1[i], array2[i], array3[i]]

	resultado.push(listaTemporal)
	//resultado.push(array1[i])
	//resultado[i] = listaTemporal
	// ---- ESTO FIN DE CADA VUELTA

}


// 3. devuelvo el resultado
console.log(resultado)

/************
Paso 2. Diferentes longitudes y no se cual es el array mas largo.
*********/

// 1. Definir Arrays
var nombres = ["Oscar", "Maria", "Pepa"];
var ids = [9897667, 23456, 34567, 765213, 123123, 5895156, 112352315];
var administradores = [false, true, false];
var resultado = [];

var totalNombres = nombres.length;
var totalIds = ids.length
var totalAdministradores = administradores.length
var numeroMasGrande = Math.max(totalNombres, totalIds, totalAdministradores)

console.log("nombres:", totalNombres)
console.log("ids:", totalIds)
console.log("administradores:", totalAdministradores)
console.log("Numero mayor?", numeroMasGrande)



// 2. Bucle
for(var i = 0; i < numeroMasGrande; i++){
	// ESTO PASA CADA VUELTA
	console.log("Una vuelta....");

	// 2.1 Recolectar info
	var nombre = nombres[i];
	var id = ids[i];
	var esAdmin = administradores[i];


	// 2.2 Adaptar datos

	//opciones: Bool: (true, false) o undefined
	if(esAdmin === undefined) {
		esAdmin = false;
	}

	// 2.3 Almacenar datos

	var listaTemporal = [nombre, id, esAdmin]

	//var listaTemporal = [array1[i], array2[i], array3[i]]

	resultado.push(listaTemporal)
	//resultado.push(array1[i])
	//resultado[i] = listaTemporal
	// ---- ESTO FIN DE CADA VUELTA

}


// 3. devuelvo el resultado
console.log(resultado)

/***********
Pao 4. Extra! Verificación de la integridad de los datos....
************/

// 1. Definir Arrays
var nombres = ["Oscar", " ", "Pepa", "Paco", undefined, "Especial"];
var ids = [9897667, undefined, 34567, 0, 123123, 5895156, 112352315];
var administradores = [false, true, false, undefined, undefined, true];
var resultado = [];



// ¿Cual es el mas largo? ¿Cuanto mide el mas largo...?


var totalNombres = nombres.length;
var totalIds = ids.length
var totalAdministradores = administradores.length
var numeroMasGrande = Math.max(totalNombres, totalIds, totalAdministradores)

console.log("nombres:", totalNombres)
console.log("ids:", totalIds)
console.log("administradores:", totalAdministradores)
console.log("Numero mayor?", numeroMasGrande)



// 2. Bucle
for(var i = 0; i < numeroMasGrande; i++){
	// ESTO PASA CADA VUELTA
	console.log("Una vuelta....");

	// 2.1 Recolectar info
	var nombre = nombres[i];
	var id = ids[i];
	var esAdmin = administradores[i];


	// 2.2 Adaptar datos

	//opciones: Bool: (true, false) o undefined
	if(esAdmin === undefined) {
		esAdmin = false;
	}

	// 2.3 nuevos datos que generamos ahora

	var integra_la_informacion = false;

	//¿realmente no tienes integridad?

	if((typeof(nombre) === "string" && nombre.trim().length !== 0) && typeof(id) === "number"){
		integra_la_informacion = true
	}

	// 2.4 Almacenar datos

	var listaTemporal = [nombre, id, esAdmin, integra_la_informacion]

	//var listaTemporal = [array1[i], array2[i], array3[i]]

	resultado.push(listaTemporal)
	//resultado.push(array1[i])
	//resultado[i] = listaTemporal
	// ---- ESTO FIN DE CADA VUELTA

}


// 3. devuelvo el resultado
console.log(resultado)
