function contadorEspecial(numero) {
		
		var totalImpares = 0;
		var totalPares = 0;

		console.info("Empieza la cuenta!");

		for (var i = 1; i <= 50; i++) {
			
			if (numero % 2 !== 0){
				totalImpares += numero;
				numero++;
			} else {
				totalPares += numero;
				numero++;
			}
			
		};

		console.info("Total de suma de pares ", totalPares);
		console.info("Total de suma de impares ", totalImpares);
		console.info("Terminó la cuenta mágica...");
	}
