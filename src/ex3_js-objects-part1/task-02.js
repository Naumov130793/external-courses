var f=function(obj){
    for(var key in obj){
        console.log(key+" "+obj[key])
    }
}
var obj={Name:"Ivan", surname:"Ivanov", age:25, human:true};

f(obj);