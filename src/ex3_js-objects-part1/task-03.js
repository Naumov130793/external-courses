var f=function(str,obj){
    if((str in obj)==true){
        console.log("Свойство "+str+" существует в объекте");
    }
    else{
        console.log("Такого свойства нет! ");
    }
}
var obj={name:"Ivan", surname:"Ivanov", age:25, human:true};
f("placeOfWork",obj);