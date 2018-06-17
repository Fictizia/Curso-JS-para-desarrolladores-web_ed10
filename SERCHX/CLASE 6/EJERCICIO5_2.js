function contador50Impares(numero) {
		
		console.info("Empieza la cuenta!");
		
		var i = 1
		while (i <= 50) {
			if (numero % 2 !== 0){
				console.log(numero);	
			}
			numero++
			i++;
		};

		console.info("Terminó la cuenta mágica...");

	}