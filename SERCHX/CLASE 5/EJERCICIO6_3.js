function esPar (numero) {

		switch(true){
			case (numero %2 === 0):
				console.info(numero, " es par");
				break;
			default:
				console.info(numero, " es impar");
		}

	}