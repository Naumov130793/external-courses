var simpleNumber=function(a){
    if(a===0){
        console.log("Вы передали 0");
    }
    if(a>=1000){
        console.log("Вы ввели неверные данные");
    }
    else if(typeof(a)==="number"){
        for(var i=2;i<=(a-1);i++){
            if((a%i)===0){
             console.log("Ваше число сложное");
             var complexNumber=true;
             break;
            }
        }
        if(complexNumber!==true){
            console.log("Ваше число простое");
        }
    }
    else{
        console.log("Вы передали в функцию не число!")
    }
}
simpleNumber(0);
