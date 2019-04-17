var mando = {
    objeto: null, //Declaramos el objeto como vacío
    eventosDisponibles: 'ongamepadconnected' in window, //establecemos a eventosDisponibles para poder checkear que existan mandos conectados
    conectado: false,
    iniciar: function () {
        if (mando.eventosDisponibles) {
            window.addEventListener("gamepadconnected", mando.conectar);
            window.addEventListener("gamepaddisconnected", mando.desconectar);
        } else {
            mando.actualizar();
        }
    },
    conectar: function(evento) {
        mando.objeto = evento.gamepad;
        mando.identificar();
    },
    desconectar: function(evento) {
        console.log("Mando desconectado del índice %d: %s.", evento.gamepad.index, evento.gamepad.id);
    },
    actualizar: function() {
        if (!mando.eventosDisponibles) {
            mandos = null;

            try { //Intentamos leer los mandos, lo ponemos en try - catch para evitar errores fatales
                mandos = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
                mando.objeto = mandos[0];
                if (!mando.conectado) {
                    mando.conectado = true;
                    mando.identificar();
                }
            } catch (exception) {
                console.log(exception.message);
            }
        }

        if (!mando.objeto) {
            return; //Se para la ejecucion del programa
        }

        if (mando.botonPulsado(mando.objeto.buttons[0])) { //Array que contiene las teclas
            console.log("Mando: A");
        }
    },
    botonPulsado: function(boton) {
        if (typeof(boton) == "object") {
            return boton.pressed; //Atributo booleano que indica si esta presionado o no (true: pulsado)
        }
        return boton == 1.0;
    },
    identificar: function() {
        console.log("Mando conectado en el índice %d: %s. %d botones, %d ejes.", mando.objeto.index, mando.objeto.id, mando.objeto.length, mando.objeto.axes.length);
    }
};