var f=function(a){
if (typeof(a)==="string"){
    console.log("Вы ввели строку");
}
else if(typeof(a)==="number"){
    console.log("Вы ввели число")
}
else{
    console.log("undefined");
}
}

f("hello");
f(123);
f();
f(true);
f([1,2,3,4,5]);