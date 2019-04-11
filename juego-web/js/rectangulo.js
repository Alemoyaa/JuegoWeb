/*Las demas son solo namespaces (es una esctructura fija) no clases */

function Rectangulo(x, y, ancho, alto){
    this.x = x;
    this.y = y;
    this.ancho = ancho;
    this.alto = alto;
    this.id = "r" + x + y; //Nos permite acceder a un rectangulo sabiendo sus cordenadas iniciales
    this.insertarDOM(); //con esto lo insertamos en el html
}
//Hacemos una funcion compartida para cualquier objeto que se haga, todos los objetos compartiran la funcion

Rectangulo.prototype.insertarDOM = function(){
    var div = '<div id="' + this.id + '"></div>'; //De esta manera el resultado es que nos permite crear un id con todos los objetos
    var html = document.getElementById("juego").innerHTML; //Esto nos va a dar el contenido del div (Que esta en index) con el id juego
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);//Con esto tenemos numeros ramdons para el css para cambiar el color
    document.getElementById("juego").innerHTML = html + div; //trameos el codigo que habia antes le asignamos el div y lo devolvemos
    document.getElementById(this.id).style.position = "absolute"; //Lo que haremos es darles unas cordenadas para que lo asigne
    document.getElementById(this.id).style.left = this.x + "px";
	document.getElementById(this.id).style.top = this.y + "px";
	document.getElementById(this.id).style.width = this.ancho + "px";
	document.getElementById(this.id).style.height = this.alto + "px";
	document.getElementById(this.id).style.backgroundColor = color;
}
