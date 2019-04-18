var ajax = {
    cargarArchivo: function(ruta, manipularDatos) { // A esta funcion le damos una ruta que son todas las carpetas hasta el archivo que queremos.
        var peticion = new XMLHttpRequest();
        peticion.onreadystatechange = function() { 
            /* Estados de peticiones
            0 - UNSENT - no iniciada
            1 - OPENED - conectado al servidor
            2 - HEADERS_RECIEVED - peticion recibida
            3 - LOADING - procesando peticion
            4 - DONE - peticion finalizada, respuestas preparada
            */
           if(peticion.readyState == XMLHttpRequest.DONE){
               if(peticion.status == 200) {
                   manipularDatos(JSON.parse(peticion.responseText)); // 200 es un codigo que significa que todo esta bien
                  console.log(JSON.parse(peticion.responseText));
               } else if(peticion.status == 400){ // 400 es un error
                  console.log("Error");
               } else{
                   console.log("Resultado inesperado");
               }
           }

        }; // Esta funcion se va a ejecutar cada ves que cambie el estado del ajax

        peticion.open("GET", ruta, true); // Aca se prepara la peticion
        peticion.send(); // Cuando se ejecute esta linea, comienza el funcionamiento de todo lo de arriba
    }
}