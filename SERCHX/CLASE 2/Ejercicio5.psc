Proceso Ejercicio_5
	Escribir "Dime un n�mero:"
	Leer valor1
	Escribir "Dime otro n�mero:"
	Leer valor2
	Escribir "Dime un n�mero m�s:"
	Leer valor3
	si (valor1<0) Entonces
		resultado1<-valor1*valor2*valor3
		Escribir "el primer n�mero es negativo, por lo cual la multiplicaci�n de los 3 es de:", resultado1 
	SiNo
		resultado2<-valor1+valor2+valor3
		Escribir "el primer n�mero es positivo, por lo cual la suma de los 3 es de:", resultado2 
	FinSi
FinProceso