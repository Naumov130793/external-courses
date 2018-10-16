var biggestValue=function(arr){
    for(var i=0;i<arr.length;i++){
        if(typeof(arr[i])==="number"){
            var max=arr[i];
            var firstIteration=i;
            break;
        }
    }
    for(var i=firstIteration;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    console.log("Максимальное значение в массиве равно " +max);
}

var arr=["hello","GoodBye",87,5,546,123,817,1284,"EPAM",true,675,"Ryazan"];
biggestValue(arr);
