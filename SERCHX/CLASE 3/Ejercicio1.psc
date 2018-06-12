Proceso Ejercicio1
	
	Escribir "Dime un A–o:"
	Leer ano
	
	Si ano % 4 = 0 & ano % 100 <> 0 Entonces
		Escribir "El a–o " ano " es bisiesto!"
	Sino
		Si year % 400 = 0 & ano % 100 = 0 Entonces
			Escribir "El a–o " ano " es bisiesto!"
		Sino
			Escribir "El a–o " ano " NO es bisiesto!"
		Fin Si
	Fin Si
	
FinProceso