// ctrl + f5

document.addEventListener('DOMContentLoaded', function() { //Funcion anonima
   inicio.iniciarJuego();
}, false); //DOM es DOCUMENT OBJECT MODEL.Agregamos un evento para cuando cargue el documento . Igual que java para escuchar un evento

var inicio = {
    iniciarJuego: function(){
        console.log("Juego iniciado");
        teclado.iniciar();
        dimensiones.iniciar();
        mando.iniciar();
		inicio.recargarTiles();
        buclePrincipal.iterar();
    },
    recargarTiles: function() {
        document.getElementById("juego").innerHTML = "";
        for(var y = 0; y < dimensiones.obtenerTilesVerticales(); y++){
            for(var x = 0; x < dimensiones.obtenerTilesHorizontales(); x++) {
                var r = new Rectangulo(x * dimensiones.ladoTiles, y * dimensiones.ladoTiles, dimensiones.ladoTiles, dimensiones.ladoTiles);
            }
        }
    }

    
};

