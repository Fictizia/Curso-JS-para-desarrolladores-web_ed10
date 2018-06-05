Proceso Ejercicio_6
	Escribir "ÀEn que mes estamos?"
	Leer mes
	
	Escribir "ÀEn que dia estamos?"
	Leer diaSemana
	
	Escribir "ÀCuanto vale el producto?"
	Leer precio
	
	descuento <- 25*precio/100
	precioConDescuento <- precio - descuento
	
	Si mes = "Diciembre" | mes = "Enero" | mes = "Febrero" Entonces
		Si diaSemana = "Viernes" | diaSemana = "Sabado" | diaSemana = "Domingo" Entonces
			Escribir "No se aplica descuento aunque sea invierno. Ven durante la semana mejor!. Debes pagar", precio
		Sino
			Escribir "BINGO! Has acertado de mes y d’as. Debes pagar solamente " , precioConDescuento
		FinSi
	Sino
		Escribir "No se aplcia descuento. ven en invierno mejor!. Debes pagar " , precio
	FinSi
	
FinProceso
