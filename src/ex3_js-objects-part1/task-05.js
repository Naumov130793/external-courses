var f=function(obj){
    var copyObj={};
    for(var key in obj){
        copyObj[key]=obj[key];
    }
    return copyObj;
    }
    
    var obj={name:"Ivan", surname:"Ivanov",age:25,city:"Ryazan"};
    //f(obj);
    newObj=f(obj);
    obj.name="Alexey";
    console.log(obj); 
    console.log(newObj);