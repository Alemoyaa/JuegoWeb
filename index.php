<!DOCTYPE html>
<!---->
<html lang="es"> <!--lang es un atributo de una etiqueta de html indicamos que va a estar en español el html-->
    <head> <!--La  cabeza de html se utiliza para declarar cosas atributos o propiedasdes de html-->
        <meta charset="UTF-8"><!-- meta Esto sirve para dar mas informacion sobre el documento-->
        <meta name="description" content="Esto es un juego web">
        <meta name="author" content="Varios">

        <meta http-equiv="X-UA-Compatible" content="ie=edge">

        <title>Juego Web</title><!-- Titulo que va a llevar en la pestaña del navegador -->

    </head>
    <body> <!--Toda la web esta en el body-->
        <div id="juego">
        </div>
        <?php
            include_once 'app/cargadorArchivosJS.inc.php'; //Comando para incluir archivos js en php
        ?>
    </body>
</html>
