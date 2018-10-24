var f=function(arr){

    for(var i=0;i<arr.length;i++){
    for(var j=1;j<arr.length;j++){
    if (arr[i]!==arr[j]){
    return false;
    }
    }
    }
    return true;
    }
    var arr=[2,2,2,2,2,2,2,2];
    console.log(f(arr));