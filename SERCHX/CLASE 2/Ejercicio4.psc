Proceso mayor
	Escribir "Dime un n�mero:"
	Leer valor1
	Escribir "Dime otro n�mero:"
	Leer valor2
	Escribir "Dime un n�mero m�s:"
	Leer valor3
	
	si (valor1>valor2 y valor1>valor3) Entonces
		Escribir "El n�mero mayor es:", valor1
	SiNo
		si (valor2>valor3) Entonces
			Escribir "El n�mero mayor es:", valor2
		SiNo
			Escribir "El n�mero mayor es:", valor3
		FinSi
	FinSi
FinProceso

