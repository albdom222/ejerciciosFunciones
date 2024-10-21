'use strict';

function cuatrimestre(){
    let fecha = new Date();

    let mes = fecha.getMonth(); //Obtenemos el número del mes (0-11);
    let mesCorrecto = mes + 1;
    //console.log(mes);
    //console.log(mesCorrecto);
    if(mesCorrecto >= 0 && mesCorrecto <= 3){
        console.log("Estamos en el primer cuatrimestre");
    }else if(mesCorrecto > 3 && mesCorrecto <= 7){  
        console.log("Estamos en el segundo cuatrimestre");
    }else{
        console.log("Estamos en el tercer cuatrimestre");
    }
}


cuatrimestre();