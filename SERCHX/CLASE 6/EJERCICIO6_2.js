function contadorEspecial(numero) {

		var totalImpares = 0;
		var totalPares = 0;

		console.info("Empieza la cuenta!");
		
		var i = 1
		while (i <= 50) {
			if (numero % 2 !== 0){
				totalImpares += numero;
				numero++;
			} else {
				totalPares += numero;
				numero++;
			}
			i++;
		};

		console.info("Total de suma de pares ", totalPares);
		console.info("Total de suma de impares ", totalImpares);
		console.info("Terminó la cuenta mágica...");
	}
