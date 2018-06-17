
function compararVariosNumeros (valor1, valor2, valor3) {
		if (valor1 > valor2 && valor1 > valor3) {
			console.info(valor1, "es mayor.")
		} else {
			if(valor2 > valor3){
				console.info(valor2, "es mayor.")
			} else {
				console.info(valor3, "es mayor.")
			}
		};
	}