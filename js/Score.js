var Score = {
    
    score: 0,
    
    actualiza: function(){
        this.score += 1;
        console.log("Puntaje: "+this.score);
    },

    mostrar: function(x, y) {
        
        x = Math.floor(x);
        y = Math.floor(y);

        let ancho = 170;
        
        let id = "score";

        document.getElementById(id).innerHTML = "Puntaje: "+this.score;//ACa escribis
        document.getElementById(id).style.display = "block";
        document.getElementById(id).style.position = "initial";
        document.getElementById(id).style.transform = 'translate3d('+ x + 'px, ' + y + 'px, 0' + ')';
        document.getElementById(id).style.width = ancho + "px";
        document.getElementById(id).style.zIndex = "11";
        document.getElementById(id).style.backgroundColor = "transparent";
        document.getElementById(id).style.color = "white";
        document.getElementById(id).style.padding = "0.5em";
        document.getElementById(id).style.textAlign = "center";
        document.getElementById(id).style.fontFamily = "sans-serif, Helvetica";
        document.getElementById(id).style.fontSize = "170%";
        document.getElementById(id).style.webkitTextStroke = "1px black";

    },
    ocultar: function() {
        let id = "score";

        document.getElementById(id).style.display = "none";
        document.getElementById(id).innerHTML = "";

        score.visible = false;
    }
};