function horas() {
    let relogio = document.getElementById('horas')
    let data = new Date()
    let hora = data.getHours()
    var minutos = data.getMinutes()
    var segundos = data.getSeconds() 
    var milissegundos = data.getMilliseconds()
    hora = hora < 10 ? '0' + hora : hora;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;
    relogio.innerHTML = `${hora}:${minutos}:${segundos}`

} 



var audio = document.getElementById('audio')
var audio2 = document.getElementById('audio2')
var musica = document.getElementById('musica')
audio.volume = '0.5';
audio2.volume = '0.5';



/*Função para zerar a contagem e iniciar a musica audio2 quando clicamos no botão -Reiniciar!-.
A instrução if é para caso esteva tocando o audio, a musica vai ser pausada e reiniciada a musica do audio2*/ 

function reiniciar (){
    var reiniciar = document.getElementById('botao2');
    if (audio){    
        audio.currentTime = 0;    
        audio.pause()
        musica.innerHTML = 'Música: Yoshis Island - Underground'
    } else {
        audio2.play()   
             
    }  
    soma = 0;
    contador.innerText = 'Contador = 0'
    audio2.play()    
}

let botao = document.getElementById('botao');
let contador = document.getElementById('contador');
let soma = 0;

/*Função para iniciar a contagem e a musica quando clicamos no botão -Contagem!-.
A instrução if é para caso esteva tocando o audio2, a musica vai ser pausada e reiniciada a musica do audio*/

function contar(){
    if(audio2){
        audio2.currentTime = 0;
        audio2.pause()
        musica.innerHTML = 'Música: Donkey Kong 2 - Hot-Head Bop'
    } else if (audio2) {
        audio.play()
    } 
    if (botao){        
        contador.innerText = `Contador = ${++soma } ` 
        audio.play();       
    } 
}


setInterval(horas, 500)
