var registroLocalizaciones = {
    obtenerLocalizacion: function(nombreLocalizacion) {
        let localizaciones = new Array();
        localizaciones.push(new RegistroLocalizacionEntrada("Rockport", "niveles/villa48.json", "img/villa48.nivel.png", 495, 40));
        //localizaciones.push(new RegistroLocalizacionEntrada("Farmer house", "", "", 495, 40));
        //localizaciones.push(new RegistroLocalizacionEntrada("La tumba perdida", "", "", 495, 40));
        localizaciones.push(new RegistroLocalizacionEntrada("El bosque", "niveles/bosque48.json", "img/bosque48.nivel.png", 540, 40));
        //localizaciones.push(new RegistroLocalizacionEntrada("La casa del anciano", "", "", 495, 40));
        //localizaciones.push(new RegistroLocalizacionEntrada("Ruinas", "", "", 495, 40));
        localizaciones.push(new RegistroLocalizacionEntrada("North Farm", "niveles/NorthFarm.json", "img/northfarm48.nivel.png", 803, 1390));
        //localizaciones.push(new RegistroLocalizacionEntrada("Antiguo templo", "", "", 495, 40));
        

        for(var i = 0; i < localizaciones.length; i++) {
            if(nombreLocalizacion == localizaciones[i].nombre) {
                return localizaciones[i];
            }
        }
    }
};