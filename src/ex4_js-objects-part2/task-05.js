function searchingSubstring(str){
    var l=str.length;
    
    var str2=(str.split(" "));
    var l2=str2.length;
    if((l2>1))
    {
    console.log("В строке есть подстрока");
    }
    else{
    console.log("В строке нет подстроки")
    }
    }
    var str="Hellogoodafternoon"
    searchingSubstring(str);