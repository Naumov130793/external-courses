var f=function(str,obj){
    if((str in obj)==true){
        console.log("Свойство "+str+" существует в объекте");
        console.log(obj);
    }
    else{
        obj[str]="new";
        console.log(obj);
    }
}


var obj={name:"Ivan", surname:"Ivanov", age:25, human:true};
f("name",obj);