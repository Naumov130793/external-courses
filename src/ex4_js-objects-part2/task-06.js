function upperCase(word){
    var newString=" ";
    for(var i=0;i<word.length;i++){
    newString+=(word[i-1]==" ")?word[i].toUpperCase():word[i];
    }
    console.log(newString)
    };
    
    var string=" hello eduard naumov";
    upperCase(string);