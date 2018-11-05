var calculator=function(){
    result=0;
    return{
    add:function(variable){
    if(arguments.length===0){
    variable=0;
    }
    var currentSum=result+variable;
    result=currentSum;
    function f(b){
    if(arguments.length===0){
    b=0;
    }
    currentSum+=b;
    result=currentSum;
    return f;
    }
    f.toString=function(){
    return currentSum;
    }
    return f;
    },subtract:function(variable){
    if(arguments.length===0){
    variable=0;
    }
    var currentSub=result-variable;
    result=currentSub;
    function f(b){
    if(arguments.length===0){
    b=0;
    }
    currentSub-=b;
    result=currentSub;
    return f;
    }
    f.toString=function(){
    return currentSub;
    }
    return f;
    },divide:function(variable){
    if(arguments.length===0){
    variable=1;
    }
    var currentDiv=result/variable;
    result=currentDiv;
    function f(b){
    if(arguments.length===0){
    b=1;
    }
    currentDiv/=b;
    result=currentDiv;
    return f;
    }
    f.toString=function(){
    return currentDiv;
    }
    return f;
    }, multiply:function(variable){
    if(arguments.length===0){
    variable=1;
    }
    var currentMult=result*variable;
    result=currentMult;
    function f(b){
    if(arguments.length===0){
    b=1;
    }
    currentMult*=b;
    result=currentMult;
    return f;
    }
    f.toString=function(){
    return currentMult;
    }
    return f;
    }
    ,getResult:function(){
    console.log(result);
    },resetResult:function(){
    result=0;
    }}}
    
    var calculator=calculator();
    calculator.add(5)(3)(2);
    calculator.subtract(2)(3);
    calculator.multiply(2)(5);
    calculator.getResult();
    calculator.divide()();
    calculator.getResult();