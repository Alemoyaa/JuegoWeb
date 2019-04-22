var ajax = {
    cargarArchivo: function(ruta) {
        var peticion = new XMLHttpRequest();

        peticion.onreadystatechange = function() {

            if (peticion.readyState == XMLHttpRequest.DONE) {
                if (peticion.status == 200) {
                console.log(JSON.parse(peticion.responseText))
                }else if (peticion.status == 400) {
                console.log("error")
                } else {
                    console.log("resultado inesperado");
                }
            }
        };
         peticion.open("GET" , ruta , true);
         peticion.send();
    }
} // Archivo de petición para cargar el mapa
