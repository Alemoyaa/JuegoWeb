// ctrl + f5

document.addEventListener('DOMContentLoaded', function() { //Funcion anonima
   inicio.iniciarJuego();
}, false); //DOM es DOCUMENT OBJECT MODEL.Agregamos un evento para cuando cargue el documento . Igual que java para escuchar un evento

var inicio = {
    iniciarJuego: function(){
        console.log("Juego iniciado");
        dimensiones.iniciar();
		var r = new Rectangulo(0, 0, 100, 100);
		var r2 = new Rectangulo(100, 0, 100, 100);
        buclePrincipal.iterar();
    }
};

