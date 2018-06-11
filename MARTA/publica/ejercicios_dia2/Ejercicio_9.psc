Proceso Ejercicio_9
	clave <- "Fictizia mola mucho"
	acierto <- Falso
	contador <- 0
	
	Mientras contador <3 & acierto = FALSO Hacer
		Escribir "Dime el secreto:"
		Leer secreto
		
		Si secreto = clave Entonces
			acierto <- Verdadero
			Escribir secreto, " es la clave que esperaba!"
		Sino
			Escribir secreto, " no es correcto."
		FinSi
		
		//metemos el contador en la œltima linea
		contador <- contador+1
		
	FinMientras
	
	Si contador >= 3 Entonces
		Escribir "Lo siento... pero has agotado los 3 intentos."
	FinSi
	
FinProceso
