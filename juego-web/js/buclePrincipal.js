//Namespace - Espacio de nombres || solo puede haber una en cada pagina web 
//mainloop - bucle principal 
//aps - actualizaciones por segundo || donde esta el enemigo donde el jugador el ordenar hace matematicas para poder ejecutar el juego actualizan 60 veces 
//fps - frames por segundo || se dibuja 60 veces para la fluidez
//callback

var buclePrincipal = {
    idEjecucion: null, 
    ultimoRegistro: 0,
    aps: 0,
    fps: 0,
    iterar: function(registroTemporal) {
        buclePrincipal.idEjecucion = window.requestAnimationFrame(buclePrincipal.iterar); //Solicitar cuadro de animacion. cada vez que el navegador hace una de sus actualizaciones nos actualizara esa cantidad de veces nuestro juego
        
        buclePrincipal.actualizar(registroTemporal);
        buclePrincipal.dibujar();    
        
        if(registroTemporal - buclePrincipal.ultimoRegistro > 999) {
            buclePrincipal.ultimoRegistro = registroTemporal;
            console.log("APS: " + buclePrincipal.aps + " | FPS: "+buclePrincipal.fps);
            buclePrincipal.aps=0;
            buclePrincipal.fps=0;
        }
    },
    detener: function(){

    },
    actualizar: function(registroTemporal){
        buclePrincipal.aps++;
    },
    dibujar: function(registroTemporal){
        buclePrincipal.fps++;
    }
};