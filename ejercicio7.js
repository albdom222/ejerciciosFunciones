'use strict';

function suma5Valores(){
    
    let suma = 0;
    let i = 0;
    while(i < 5){
        let num = Number(prompt("Introduce un número para realizar la suma"));
        suma += num;
        i++;
    }
    console.log("La suma de los 5 números es: " + suma);
}

suma5Valores();