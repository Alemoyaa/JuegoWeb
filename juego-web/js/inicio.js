
var inicio = {
    iniciadores:[
        maquinaEstados.iniciar(),
        teclado.iniciar(),
        mando.iniciar(),
        buclePrincipal.iterar()
    ],
    iniciarJuego: function(){
inicio.encadenarInicios(inicio.iniciadores.shift());
        },

    encadenarInicios: function(iniciador){
        if(iniciador){
            iniciador(()=> inicio.encadenarInicios(iniciadores.shift()));
        }

    }    
    };


document.addEventListener('DOMContentLoaded', function() { //Funcion anonima
    inicio.iniciarJuego();
 }, false);
  //DOM es DOCUMENT OBJECT MODEL.Agregamos un evento para cuando cargue el documento . Igual que java para escuchar un evento


