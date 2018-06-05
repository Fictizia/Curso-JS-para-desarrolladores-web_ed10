Proceso mayor
	Escribir "Dime un nœmero:"
	Leer valor1
	Escribir "Dime otro nœmero:"
	Leer valor2
	Escribir "Dime un nœmero m‡s:"
	Leer valor3
	
	si (valor1>valor2 y valor1>valor3) Entonces
		Escribir "El nœmero mayor es:", valor1
	SiNo
		si (valor2>valor3) Entonces
			Escribir "El nœmero mayor es:", valor2
		SiNo
			Escribir "El nœmero mayor es:", valor3
		FinSi
	FinSi
FinProceso

