function Punto(x, y) { //Localizar dos puntos en la rejilla
    this.x = x;
    this.y = y;

}

Punto.prototype.coincide = function(punto){ // Función para saber si dos puntos son iguales
    return (this.x == punto.x && this.y == punto.y) ? true : false; // Evaluar si T o F

}