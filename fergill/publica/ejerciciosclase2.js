var num1 = 1;

var num2 = 2;

var resultado = num1 + num2;

console.log(resultado)

console.log("*************")

var num3 = 1;

var num4 = 2;

var resultado = num3 - num4;

console.log(resultado)

console.log("*************")

var num5 = 1;

var num6 = 2;

var resultado = num5 / num6;

console.log(resultado)

console.log("*************")

var num7 = 1;

var num8 = 2;

var resultado = num7 * num8;

console.log(resultado)

console.log("*************")

var hombres = 2;

var mujeres = 7;

var total = 9;

var porcentajeHombres = (hombres*100)/total;

var porcentajeMujeres = (mujeres*100)/total;

console.log(porcentajeHombres);

console.log(porcentajeMujeres);

console.log("*************")

var n1 = 5;

var n2 = 3;

if (n1 > n2) {
	console.log(n1)
} else if (n1 < n2) {
	console.log(n2)
} else if (n1 == n2) {
	console.log(n1)
}

console.log("*************")

var mayor = Math.max(21, 8, 1)

console.log(mayor)

console.log("*************")

var lista = [];

var accion = prompt("Dame tres números");

lista = accion.split(",");

console.log(lista)

for(var i = 0; i < lista.length; i++) {

    lista[i] = parseInt(lista[i]);
}

if (lista[0] < 0) {
	var suma = lista[1] + lista[2]
	console.log(suma)
} else {
	var producto = lista[0] * lista[1] * lista[2]
	console.log(producto)
}

console.log("*************")

var precio = 50;

var resultado;

var mes = prompt("Dime un mes");

var dia = prompt("Dime el día de la semana");

if ((mes != "diciembre" || mes != "enero" || mes != "febrero") &&
   (dia == "viernes" || dia == "sábado" || dia == "domingo")) {
	resultado = precio;
  	console.log(resultado);
} else {
	resultado = precio - (precio * 0.25);
  	console.log(resultado);
}

console.log("************************")

var numero = prompt("Dime un número");

var respuesta = (numero > 0) ? "Es positivo" : "Es negativo";

console.log(respuesta);

console.log("************************")

var numero = prompt("Dime un número");

var respuesta = (numero % 2 == 0) ? "Es par" : "Es impar";

console.log(respuesta);

console.log("************************")

var passCorrecta = "Fictizia mola mucho";

for(i=1; i<=4; i++){

		var pass = prompt("Escribe tu contraseña");

		if (pass == passCorrecta){
			console.log("Bienvenido");
			break;
			} else if (i < 4 && pass != passCorrecta) {
				console.log(" Intento "+i+". Máximo de 3 intentos.");
				continue;
			} else if (i == 4) {
				console.log("Has agotado tus intentos de login.");
			}
}

console.log("************************")