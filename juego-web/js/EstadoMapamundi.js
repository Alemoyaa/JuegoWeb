function EstadoMapamundi(idEstado){
    var that=this;
    this.mapaListo = false;
    this.mapa= null;
    ajax.cargarArchivo("mapa/desierto.json", function(objetoJSON){
        that.mapa=new Mapa(objetoJSON);
        that.mapaListo= true;
        console.log("mapa Cargado por el ajax");
    });

}
EstadoMapamundi.prototype.actualizar= function(){ 
if(!this.mapaListo){ 
    return;
}
this.mapa.actualizar();
}
EstadoMapamundi.prototype.dibujar = function(){ 
    if(!this.mapaListo){ 
        return;
    
    this.mapa.dibujar();
    }

}