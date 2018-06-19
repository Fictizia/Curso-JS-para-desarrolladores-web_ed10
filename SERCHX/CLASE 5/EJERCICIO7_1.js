function esBisiesto (year) {
		
		if (year % 4 === 0 && year % 100 !== 0) {
			console.info("Amigo, el año " +year+ " es bisiesto!");
		} else if (year % 400 === 0 && year % 100 === 0) {
			console.info("Amigo, el año " +year+ " es bisiesto!");
		} else {
			console.warn("Amigo, el año " +year+ " NO es bisiesto!");
		};

	}