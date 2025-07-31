let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
//console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(numeroSecreto);
    //console.log(numeroDeUsuario);
    //console.log(numeroDeUsuario === numeroDeUsuario);
    if(numeroSecreto === numeroDeUsuario){
        asignarTextoElemento('p',`Acertaste el número en: ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //el usuario no acerto
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function generarNumeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*10)+1;
        // verificar si ya generamos todos los numeros
    if( listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','ya se jugaron todos los números')
        document.querySelector('#intentar').setAttribute('disabled', 'true');
    } else{
    // verifica si el numero ya se encuentra en la lista 
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        console.log(numeroGenerado);
        console.log(listaNumerosSorteados);
        return numeroGenerado;
        }    
    }
}

function limpiarCaja(){
    //let valorCaja = document.querySelector('#valorUsuario');
    //valorCaja.value = '';
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiamos la caja
    limpiarCaja();
    //Indicar mensaje de pedido de numero
    condicionesIniciales();
    //generar el numero aleatorio
    //numeroSecreto = generarNumeroSecreto();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
console.log(numeroSecreto);
