	function compararVariosNumeros (valor1, valor2, valor3) {
		switch (true){
			case (valor1 > valor2 && valor1 > valor3):
				console.info(valor1, "es mayor.");
				break;
			case (valor2 > valor3 && valor2 > valor1):
				console.info(valor2, "es mayor.");
				break;
			default:
				console.info(valor3, "es mayor.")
		}
	}