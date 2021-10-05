<?php



?>


<!DOCTYPE HTML>
<html>
    <head>
        <title>Timer</title>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
       <script type="text/javascript" src="assets/javascript.js"></script>
       <link rel="stylesheet" href="assets/style.css" />
    </head>
    <body>

<div class="corpo">

    <div class="display">

   <!--<p id="timer">00:00</p>
   <p id="seg"> 00</p>
-->
   <Form name="form">
       <input class="ts" autocomplete="off" id="timer" type="text" value="00:00" name="s" readonly />
       <input class="tms" autocomplete="off" id="seg" type="text" value="00" name="ms" readonly />
   </Form>

    </div>

    <hr/>

    <div class="button">

   <Button class="btn iniciar" id="iniciar" onclick="iniciar()">Iniciar</Button> 
   <Button class="btn parar" disabled id="parar" onclick="parar()">Parar</Button> 
   <Button class="btn Marcar"  onclick="list()">Marcar volta</Button>
   <Button class="btn reiniciar" onclick="reiniciar(), iniciar()">Reiniciar</Button>
   <Button class="btn zerar" onclick="zerar()">Zerar</Button>

    </div>


    <div class="lista">
        <ul id="lista">
            <li>Listagem de tempo</li>
        </ul> 
    </div>
    <div class="apagar">
        <Button class="btn-reiniciar" onclick="apagarlist()">Apagar lista</Button>
    </div>




    </body>
</html>