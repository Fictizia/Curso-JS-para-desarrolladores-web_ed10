	function calcularDescuento (mes, diaSemana, precio) {

		var descuento = 25*precio/100;
		var precioConDescuento = precio - descuento;

		if (mes === "Diciembre" || mes === "Enero" || mes === "Febrero") {
			
			if(diaSemana === "Viernes" || diaSemana === "Sabado" || diaSemana === "Domingo"){
				console.warn("No se aplica descuento aunque sea invierno.. ven durante la semana mejor!. Debes pagar", precio);
			} else {
				console.info("BINGO! Has acertado de mes y días. Debes pagar solamente", precioConDescuento);
			}

		} else {
			console.warn("No se aplica descuento.. ven en invierno mejor!. Debes pagar", precio);
		};

	}