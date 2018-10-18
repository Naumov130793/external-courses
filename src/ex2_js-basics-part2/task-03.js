var f=function(arr)
{
    var l=arr.length;
    var even=0;
    var odd=0;
    var zero=0;
    for(var i=0;i<l;i++){
        if((arr[i]%2==0)&&(arr[i]!==0)&&(typeof(arr[i])=="number")){
            ++even;
        }
        else if(((arr[i]%2)!==0)&&(typeof(arr[i])=="number")){
            ++odd;
        }
        else if(arr[i]===0){
            ++zero;
        }
    }
   var arr2=[even,odd,zero];
   console.log("Количество четных чисел "+even);
   console.log("Количество нечетных чисел "+odd);
   console.log("Количество нулей "+zero);
   console.log(arr2);
}

var arr=[2,5,"fgd",4,0,6,33,21,7,null,true,23,undefined];
f(arr);