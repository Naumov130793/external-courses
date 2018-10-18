function upperCase(word){
    var newString=" ";
    for(var i=0;i<word.length;i++){
    if(word[i]==" "){
    continue;
    }
    newString+=(word[i-1]==" ")?word[i].toUpperCase():word[i].toLowerCase();
    }
    console.log(newString)
    };
    
    var string="heLlo edUard nauMov";
    upperCase(string);