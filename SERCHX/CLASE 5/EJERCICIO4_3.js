function calcularDescuento (mes, diaSemana, precio) {

		var descuento = 25*precio/100;
		var precioConDescuento = precio - descuento;

		switch (true) {
			case ((mes === "Diciembre" || mes === "Enero" || mes === "Febrero") && (diaSemana !== "Viernes" && diaSemana !== "Sabado" && diaSemana !== "Domingo")):
				console.info("BINGO! Has acertado de mes y días. Debes pagar solamente", precioConDescuento);
				break;
			case (mes !== "Diciembre" && mes !== "Enero" && mes !== "Febrero"):
				console.warn("No se aplica descuento.. ven en invierno mejor!. Debes pagar", precio);
				break;
			default:
				console.warn("No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar", precio);
		}

	}