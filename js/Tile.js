// Coordenada de cada Tile (Cuadro del mapa)
function Tile(xEnTiles, yEnTiles, z, ancho, alto, sprite) { 
    this.rectangulo = new Rectangulo(xEnTiles, yEnTiles, ancho, alto);
    this.zIndex = z;
    this.sprite = sprite;
    this.idHTML = "x" + xEnTiles + "y" + yEnTiles + "z" + z;       // id html del tiles
    this.html = '<div id="' + this.idHTML + '"></div>';      // Contenido html del tile

}

Tile.prototype.aplicarEstilos = function() {
    if(!document.getElementById(this.idHTML)) {     // Comprueba que el tile con los estilos css funciona
        throw("El ID " + this.idHTML + " no existe en la hoja");
    }
    // Propiedades del rectangulo
    document.getElementById(this.idHTML).style.position = "absolute";
    document.getElementById(this.idHTML).style.left = (this.rectangulo.x * this.rectangulo.ancho) + "px";
    document.getElementById(this.idHTML).style.top = (this.rectangulo.y * this.rectangulo.alto) + "px";
    document.getElementById(this.idHTML).style.width = this.rectangulo.ancho + "px";
    document.getElementById(this.idHTML).style.heigth = this.rectangulo.alto + "px";
    document.getElementById(this.idHTML).style.zIndex = "" + this.zIndex;
    document.getElementById(this.idHTML).style.background = "url('" + this.sprite.rutaHojaOrigen + "')";
    var x = this.sprite.posicionEnHoja.x;
    var x = this.sprite.posicionEnHoja.y;
    document.getElementById(this.idHTML).style.backgroundPosition = "-" + x + "px -" + y + "px";
    document.getElementById(this.idHTML).style.backgroundClip = "border-box";
    document.getElementById(this.idHTML).style.outline = "1px solid transparent";
}