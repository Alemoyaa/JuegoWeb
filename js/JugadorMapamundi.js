function JugadorMapamundi(posicionInicialEnPixeles) {
	this.ancho = 48;
	this.alto = 48;

	this.rutaHojaSprites = "img/personajes48.png"
	this.personaje = 20;//Elegir personaje 

	this.origenXSprite = 0;
	this.origenYSprite = this.alto * this.personaje;

	this.velocidadMovimiento = 3;

	this.velocidadX = 0;
	this.velocidadY = 0;

	this.enMovimiento = false;
	this.framesAnimacion = 0;

	//eliminar decimales y centrar al jugador
	var centroX = Math.trunc(dimensiones.ancho / 2 - this.ancho / 2);
	var centroY = Math.trunc(dimensiones.alto / 2 - this.alto / 2);
	this.posicionCentrada = new Punto(centroX, centroY);
	this.rectanguloGeneral = new Rectangulo(centroX, centroY, this.ancho, this.alto);

	this.limiteArriba = new Rectangulo(centroX + this.ancho / 3, centroY, this.ancho / 3, 1);
	this.limiteAbajo = new Rectangulo(centroX + this.ancho / 3, centroY + this.alto - 1, this.ancho / 3, 1);
	this.limiteIzquierda = new Rectangulo(centroX, centroY + this.alto / 3, 1, this.alto / 3);
	this.limiteDerecha = new Rectangulo(centroX + this.ancho - 1, centroY + this.alto / 3, 1, this.alto / 3);

	this.colisionArriba = false;
	this.colisionAbajo = false;
	this.colisionIzquierda = false;
	this.colisionDerecha = false;

	//convertir positivos en negativos y viceversa
	posicionInicialEnPixeles.x *= -1;
	posicionInicialEnPixeles.y *= -1;

	this.posicionEnMapaEnPixeles = new Punto(this.posicionCentrada.x + posicionInicialEnPixeles.x,
		this.posicionCentrada.y + posicionInicialEnPixeles.y);

	this.aplicarEstilos();
}

JugadorMapamundi.prototype.aplicarEstilos = function() {
	var idHTML = "jugador";
	//document.getElementById(idHTML).style.backgroundColor = "white";
	document.getElementById(idHTML).style.position = "absolute";
	document.getElementById(idHTML).style.left = this.posicionCentrada.x + "px";
	document.getElementById(idHTML).style.top = this.posicionCentrada.y + "px";
	document.getElementById(idHTML).style.width = this.ancho + "px";
	document.getElementById(idHTML).style.height = this.alto + "px";
	document.getElementById(idHTML).style.zIndex = "10";
	document.getElementById(idHTML).style.background = "url('" + this.rutaHojaSprites + "')";
	document.getElementById(idHTML).style.backgroundPosition = "-" + this.origenXSprite + "px -" + this.origenYSprite + "px";
	document.getElementById(idHTML).style.backgroundClip = "border-box";
	document.getElementById(idHTML).style.outline = "1px solid transparent";
}

JugadorMapamundi.prototype.comprobarColisiones = function(mapa) {
	this.colisionArriba = false;
	this.colisionAbajo = false;
	this.colisionIzquierda = false;
	this.colisionDerecha = false;
	
	if (!this.limiteArriba.cruza(mapa.limiteMapa)) {
		this.colisionArriba = true;
	}
	if (!this.limiteAbajo.cruza(mapa.limiteMapa)) {
		this.colisionAbajo = true;
	}
	if (!this.limiteIzquierda.cruza(mapa.limiteMapa)) {
		this.colisionIzquierda = true;
	}
	if (!this.limiteDerecha.cruza(mapa.limiteMapa)) {
		this.colisionDerecha = true;
	}
	
	for (var i = 0; i < mapa.rectangulosColisiones.length; i++) {
		
		var traduccionTemporalColision = new Rectangulo(
			mapa.rectangulosColisiones[i].x + mapa.posicion.x,
			mapa.rectangulosColisiones[i].y + mapa.posicion.y,
			mapa.rectangulosColisiones[i].ancho,
			mapa.rectangulosColisiones[i].alto
		);
		
		if(this.limiteArriba.cruza(traduccionTemporalColision)) {
			this.colisionArriba = true;
		}
		if(this.limiteAbajo.cruza(traduccionTemporalColision)) {
			this.colisionAbajo = true;
		}
		if(this.limiteIzquierda.cruza(traduccionTemporalColision)) {
			this.colisionIzquierda = true;
		}
		if(this.limiteDerecha.cruza(traduccionTemporalColision)) {
			this.colisionDerecha = true;
		}
	}
}

JugadorMapamundi.prototype.mover = function() {
	this.velocidadX = 0;
	this.velocidadY = 0;

	if(!this.colisionArriba && teclado.teclaPulsada(controlesTeclado.arriba)) {
		this.velocidadY += this.velocidadMovimiento;
	}
	if(!this.colisionAbajo && teclado.teclaPulsada(controlesTeclado.abajo)) {
		this.velocidadY -= this.velocidadMovimiento;
	}
	
	if(!this.colisionIzquierda && teclado.teclaPulsada(controlesTeclado.izquierda)) {
		this.velocidadX += this.velocidadMovimiento;
	}
	
	if(!this.colisionDerecha && teclado.teclaPulsada(controlesTeclado.derecha)) {
		this.velocidadX -= this.velocidadMovimiento;
	}
	

	this.posicionEnMapaEnPixeles.x += this.velocidadX;
	this.posicionEnMapaEnPixeles.y += this.velocidadY;
}

JugadorMapamundi.prototype.dirigir = function() {
	if(this.velocidadX < 0) { //izquierda
		this.origenXSprite = this.ancho * 3;
	}
	if(this.velocidadX > 0) { //derecha
		this.origenXSprite = this.ancho * 3;
	}
	if(this.velocidadY < 0) { //abajo
		this.origenXSprite = 0;
	}
	if(this.velocidadY > 0) { //arriba
		this.origenXSprite = this.ancho * 6;
	}

	if(this.velocidadX > 0) { //derecha
		document.getElementById("jugador").style.transform = "scaleX(-1)";
	}
	if(this.velocidadX < 0  || this.velocidadY < 0 || this.velocidadY > 0) { //izquierda
		document.getElementById("jugador").style.transform = "scaleX(1)";
	}

	document.getElementById("jugador").style.backgroundPosition = "-" + this.origenXSprite + "px -" + this.origenYSprite + "px";

}

JugadorMapamundi.prototype.actualizar = function(registroTemporal, mapa) {
	this.comprobarColisiones(mapa);
	this.mover();
	this.dirigir();
}