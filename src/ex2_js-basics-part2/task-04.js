var f=function(arr){
    var l=arr.length-1;
    var flag=0;
    for(var i=0;i<l;i++){
        if(arr[i]===arr[i+1]){
            ++flag
        }
    }
    if(flag===l){
        console.log("Все элементы массива равны");
    }
    else{
        console.log("Не все элементы массива равны");    
    }
}

var arr=[3,3,3,3,3];
f(arr);