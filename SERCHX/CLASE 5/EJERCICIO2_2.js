function compararVariosNumeros (valor1, valor2, valor3) {
		(valor1 > valor2 && valor1 > valor3) ? console.info(valor1, "es mayor.") 
			: (valor2 > valor3) ? console.info(valor2, "es mayor.") 
			: console.info(valor3, "es mayor.");