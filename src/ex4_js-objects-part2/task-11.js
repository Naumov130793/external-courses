function howMuchTimesLetter(string)
{
var length=string.length;
var arr=new Array(length);
var obj={};
for(var i=0;i<length;i++){
arr[i]=string[i];
}
for(var i=0;i<length;i++){
var counter=0;
for(var j=0;j<length;j++){if(arr[i].charCodeAt(0)==arr[j].charCodeAt(0))
{
counter++
}
else{
continue;
}
}
obj[arr[i]]=counter;
}
for(var key in obj){
console.log("Буква "+key+" встречается в строке "+obj[key]+" раз ");
}
}
var str="Hello Good Afternoon";
howMuchTimesLetter(str);