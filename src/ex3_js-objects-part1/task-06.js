function makeClone(obj){
    var cloneObj={};
    for(var key in obj){
    if(typeof(obj[key])==="object"){
    cloneObj[key]=makeClone(obj[key]);
    }
    else{
    cloneObj[key]=obj[key]};
    }
    return cloneObj;
    }
    var obj={Name:{First:"Eduard", second:"Ivan",third:{3:"Petrov"}},Surname:"Naumov"};
    var newObj=makeClone(obj);
    console.log(newObj);
    console.log(newObj.Name==obj.Name);