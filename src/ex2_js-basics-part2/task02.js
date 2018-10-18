var f=function(arr){
    var l=arr.length;
    var sum=0;
    for(var i=0;i<l;i++){
       sum+=arr[i];
       console.log(arr[i]);
    }
    console.log(sum);
}
var arr=[1,3,5,7,9];
f(arr);