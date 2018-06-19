function esBisiesto (year) {
		(year % 4 === 0 && year % 100 !== 0) 
			? console.info("Amigo, el año " +year+ " es bisiesto!")
			: (year % 400 === 0 && year % 100 === 0) 
			? console.info("Amigo, el año " +year+ " es bisiesto!")
			: console.warn("Amigo, el año " +year+ " NO es bisiesto!");
	}