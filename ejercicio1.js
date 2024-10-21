'use strict';

function menor(num1, num2, num3){
    if(num1 < num2 && num1 < num3){
        console.log("El menor es " + num1);
    }else if (num2 < num1 && num2 < num3){
        console.log("El menor es " + num2);
    }else{
        console.log("El menor es " + num3);
    }
}


menor(2,5,10);