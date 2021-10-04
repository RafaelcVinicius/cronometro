let seg = 0, min = 0, mil = 0, cro2, cro, tempo;



function iniciar(){
    document.getElementById("iniciar").disabled = true; 
    document.getElementById("parar").disabled = false; 
    tempo = setInterval(() =>{
        cronometro()
    }, 10)
}

function parar(){
    document.getElementById("iniciar").disabled = false; 
    document.getElementById("parar").disabled = true; 
    clearInterval(tempo);
}

function zerar(){
    clearInterval(tempo);
    seg = 0;
    min = 0;
    mil = 0;
    document.form.s.value = '00:00';
    document.form.ms.value ='00';

    
}

function reiniciar(){
    clearInterval(tempo);
    seg = 0;
    min = 0;
    mil = 0;

}

function cronometro(){
mil++

if(mil == 100){
mil = 0;
seg++;
}

if(seg == 60){
    seg = 0;
    min++;
}

var cro2 = (mil < 10 ? '0'+min : mil)
var cro = ((min < 10 ? '0'+min : min)+':'+ (seg < 10 ? '0'+seg : seg));

document.form.s.value = cro;
document.form.ms.value = cro2
}

function list(){

    var t1 =  document.form.s.value;
    var t2 =  document.form.ms.value;

    var t = t1+':'+t2;

    var lista = document.getElementById('lista').innerHTML;
    
    lista = lista + "<li>" + t + "</li>";
    
    document.getElementById('lista').innerHTML = lista;
    }

    function apagarlist(){
     var lis =  "<li>"+'Listagem de tempo'+"</li>";

        document.getElementById('lista').innerHTML = lis;
    }