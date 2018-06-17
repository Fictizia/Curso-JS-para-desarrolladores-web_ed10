function esBisiesto (year) {

		switch(true){
			case (year % 4 === 0 && year % 100 !== 0):
			case (year % 400 === 0 && year % 100 === 0):
				console.info("Amigo, el año " +year+ " es bisiesto!");
				break;
			default:
				console.warn("Amigo, el año " +year+ " NO es bisiesto!");
		}

	}