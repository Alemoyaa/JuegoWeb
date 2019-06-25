var audio = {
    musica: null,
    pista1: "audio/HalfMystery.mp3", //https://www.youtube.com/watch?time_continue=11&v=mbNTZW1YPvQ
    reproducir: function(rutaPista) {
        if(audio.musica != null) {
            audio.musica.pause();
            audio.musica.src = "";
        }
        audio.musica = new Audio(rutaPista);
        audio.musica.play();
    }
};