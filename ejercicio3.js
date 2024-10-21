'use strict';

function mayor(num1, num2, num3){
    if(num1 > num2 && num1 > num3){
        console.log("El mayor es " + num1);
    }else if (num2 > num1 && num2 > num3){
        console.log("El mayor es " + num2);
    }else{
        console.log("El mayor es " + num3);
    }
}


mayor(244,35,10);