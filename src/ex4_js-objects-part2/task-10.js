var string="hello good afternoon";
function revers(string){
var length=string.length;
var reversString=" ";
for(var i=0;i<length;i++){
reversString+=string[length-1-i];
}
console.log(reversString);
}
revers(string);