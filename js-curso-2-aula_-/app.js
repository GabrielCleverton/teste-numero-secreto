var numeroAleatorio = gerarNumeroAleatorio();
let tentativas = 1;


var titulo = document.querySelector("h1")
titulo.innerHTML="Hora do Desafio";

var paragrafo = document.querySelector("p")
paragrafo.innerHTML="Escolha um número entre 1 e 10";



function verificarChute() {
    var chute = document.querySelector("input").value;
    if(chute==numeroAleatorio){
        let palavraTentativas = tentativas > 1? "tentativas":"tentativa";
        let numeroTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativas}`;
        titulo.innerHTML="Parabéns";
        paragrafo.innerHTML=numeroTentativas;
        document.getElementById("reiniciar").removeAttribute("disabled");
    }else if(chute>numeroAleatorio){
        paragrafo.innerHTML="Número secreto é menor";
    }else if(chute<numeroAleatorio){
        paragrafo.innerHTML="Número secreto é maior";
    }
    tentativas++;
    limparCampo();
}

function gerarNumeroAleatorio(){
   return parseInt(Math.random()*10+1);
}

function limparCampo(){
    chute=document.querySelector("input");
    chute.value="";
}

function reiniciarJogo(){
    numeroAleatorio=gerarNumeroAleatorio();
    tentativas=1;
    limparCampo();
    
var titulo = document.querySelector("h1")
titulo.innerHTML="Hora do Desafio";

var paragrafo = document.querySelector("p")
paragrafo.innerHTML="Escolha um número entre 1 e 10";
    document.getElementById("reiniciar").setAttribute("disabled", true);
}

