Proceso EJERCICIO_6
	Escribir "Dime un nœmero:"
	Leer numero
	
	valor = 1
	Pares = 0
	Impares = 0
	
	Mientras valor <= 50 Hacer
		
		Si numero % 2 = 0 Entonces
			valor <- valor + 1
			Pares<- Pares + numero
			numero <- numero + 1
		Sino
			Impares<- Impares + 1
			numero <- numero + 1
		Fin Si
		
	Fin Mientras
	
	Escribir "Total de suma de pares ", Pares
	Escribir "Total de impares ", Impares
	
FinProceso