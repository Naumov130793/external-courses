function insertString(string, insert, pos){
    var string2=(string.split(" "));
    var l=string2.length
    var sumString=new Array(l+1);
    var len=sumString.length;
    for(var i=0;i<pos;i++){
    sumString[i]=string2[i];
    }
    for(var i=pos+1;i<len;i++){
    sumString[i]=string2[i-1];
    }
    sumString[pos]=insert;
    console.log(sumString);
    console.log(sumString.join(" "));
    }
    
    var string="Hello Good Afternoon EPAM";
    var ins="JavaScript";
    insertString(string, ins, 3);