Proceso ejercicio_6
    Escribir "escribe el importe de la compra"
    Leer importe
    Escribir "Introduce el mes"
    Leer mes
	Escribir "Introduce un d�a de la semana"
    Leer dia
    Si (mes="febrero" o mes="noviembre" o mes="diciembre" o mes="enero" o dia="lunes" o dia="martes" o dia="mi�rcoles" o dia="jueves") Entonces
		total<-importe*0.75
		Escribir "Al ser invierno y no siendo viernes o fin de semana se aplica un 25% de descuento, tu precio ser�a:", total
    Sino
		total<-importe
		Escribir "No tiene descuento:" , total
    FinSi
FinProceso