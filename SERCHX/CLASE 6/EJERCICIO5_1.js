function contador50Impares(numero) {
		
		var impar = 0;
		
		console.info("Empieza la cuenta!");

		for ( ; impar <= 50 ; ) {
			
			if (numero % 2 !== 0){
				console.log(numero);
				impar++

			}

        numero++
			
		};

		console.info("Terminó la cuenta mágica...");

	}