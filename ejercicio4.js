'use strict';

function ladoCuadrado(lado){
    return 4 * lado;
}


// Utilizando funciones flecha.
let perimetro = (lado) => {
    return 4 * lado;
}

console.log("El perímetro del cuadrado es: " + ladoCuadrado(2));
console.log("El perímetro del cuadrado es: " + perimetro(2));