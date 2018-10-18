function withoutSpaces(word){
    console.log(word);
    var l=word.length;
    if((word[0]==" ")&&(word[l-1]==" ")){
    console.log(word.slice(1,(l-1)));
    }
    else{
    console.log(word)
    }
    }
    
    var str=" Hello! ";
    withoutSpaces(str);