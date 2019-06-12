var ajax = {
	cargarArchivo: function(ruta, manipularDatos) {
		var peticion = new XMLHttpRequest();

		peticion.onreadystatechange = function() { //
			/*
			cada vez que cambie el estado de la peticion se nos notificara con esta funcion

			0 / UNSENT - no iniciada
			1 / OPENED - conectado al servidor
			2 / HEADERS_RECIEVED - peticion recbida
			3 / LOADING - procesando peticion
			4 / DONE - peticion finalizada, respuesta preparada
			*/
			if (peticion.readyState == XMLHttpRequest.DONE) { 
				if (peticion.status == 200) {//Es un codigo de que todo esta bien
					manipularDatos(JSON.parse(peticion.responseText));//cambiamos la respuesta y cambiamos a JSON
				} else if (peticion.status == 400) {
					console.log("error"+peticion.getResponseHeader);
				} else {
					console.log("resultado inesperado"+peticion.getResponseHeader);
				}
			}
		};

		peticion.open("GET", ruta, true);
		peticion.send();
	}
}