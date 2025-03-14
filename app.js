//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del número';

//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un número entre 1 y 10';

let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados =[];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Has acertado el juego en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {        
        if (numeroDeUsuario < numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es menor');
        }
        intentos++;
        limpiarInput();
    }
    return;
}

function limpiarInput() {
    document.querySelector('#valorUsuario').value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se han generado todos los números posibles');
    
    } else {

        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', `Indica un número entre 1 y ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja de texto
    limpiarInput();
    //indicar mensaje de intervalo de numeros
    //generar nuevo numero secreto
    condicionesIniciales();
    //deshabilitar boton de reiniciar
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    //reiniciar intentos
}

condicionesIniciales();
