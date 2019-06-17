var registroLocalizaciones = {
    obtenerLocalizacion: function(nombreLocalizacion) {
        let localizaciones = new Array();
        localizaciones.push(new RegistroLocalizacionEntrada("Rockport", "niveles/villa48.json", "img/villa48.nivel.png", 495, 40));
        localizaciones.push(new RegistroLocalizacionEntrada("North Farm", "niveles/NorthFarm.json", "img/northfarm48.nivel.png", 803, 1390));
        

        for(var i = 0; i < localizaciones.length; i++) {
            if(nombreLocalizacion == localizaciones[i].nombre) {
                return localizaciones[i];
            }
        }
    }
};