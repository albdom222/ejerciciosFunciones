'use strict';

function cantidadDigitos(numero){
    let cantidad = 0;
    let cadenaNumero = numero.toString();
    if(numero > 0){
        for(let i = 0; i < cadenaNumero.length; i++){
            cantidad++;
        }
        console.log(cantidad);
    }else{
        console.log("El numero no es positivo");
    }
}

cantidadDigitos(-22201);