
import { barcelona, roma, paris, londres } from './ciudades.js'

//Obtener los elementos del DOM

let enlances = document.querySelectorAll('a')

// todos los selectores que sean a los seleccionos

let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

//agregar evento click

enlances.forEach(function (enlace) {
    enlace.addEventListener('click', function() {
        // remover el activo
        enlances.forEach(function (enlace) {
            enlace.classList.remove('active'); 
        });
        //agregar clase activo al que corresponda
        this.classList.add('active');
        //obtener informacion del objeto correstpodiente a la eleccion del
        let contenido = ObtenerContenido(this.textContent)
        //mostrar contenido
        tituloElemento.innerHTML = contenido.titulo
        subtituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo
        precioElemento.innerHTML = contenido.precio

    })
});

//funcion para traer la informacion correcta desde cuidades.js
function ObtenerContenido(enlace){
    let contenido = {
        'Barcelona': barcelona,
        'Roma':roma,
        'París': paris,
        'Londres': londres
        };
    return contenido[enlace];

}


