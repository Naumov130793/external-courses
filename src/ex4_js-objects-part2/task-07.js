function cuttedString(str, num){
    var len=str.length;
    var dot=".";
    var dif=len-num;
    if(dif!=0){
    var newStr=str.substring(0,num)+dot.repeat(dif);
    }
    else{
    newStr=str;
    }
    console.log(newStr);
    }
    
    var string="Eduard";
    cuttedString(string, 4);