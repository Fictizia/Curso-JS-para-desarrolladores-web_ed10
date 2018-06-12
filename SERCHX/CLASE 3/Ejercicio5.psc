Proceso EJERCICIO_5
	
	Escribir "dime un nœmero:"
	leer numero
	
	valor= 1
	
	Mientras valor <= 50 Hacer
		Si numero % 2 = 0 Entonces
			numero <- numero + 1
			valor <- valor + 1
		Sino
			Escribir numero
			valor <- valor + 1
			numero <- numero + 1
		Fin Si
	Fin Mientras
	
FinProceso