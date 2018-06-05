Proceso ejercicio_9
    contador<-0
    acierto<-Falso
    Mientras (contador<3 Y acierto=falso) Hacer
        Escribir "introduce la clave"
        Leer clave
        si (clave="fictiZia mola mucho") Entonces
            Escribir "la clave es correcta"
            acierto<-Verdadero
        FinSi
        contador<-contador+1
    FinMientras
    si (contador=3 Y acierto=falso) Entonces
		Escribir "Ya no tienes mas intentos"
    FinSi
FinProceso