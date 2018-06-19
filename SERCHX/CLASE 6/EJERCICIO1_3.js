function correcto() {

		var clave = "Fictizia mola mucho";
		var acierto = false;
		var contador = 0

		do {
		    var secreto = prompt("Dime el secreto:");

			if (secreto === clave) {
				acierto = true;
				console.info(secreto, "es la clave que esperaba!")
			} else {
				console.warn(secreto, " no es correcto.")
			}

			contador++;

		} while (contador < 3 & acierto === false);
		

		if(contador > 3){
			console.warn("Lo siento... pero has agotado los 3 intentos.")
		}
	}