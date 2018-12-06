var shape={
    type:"rectangular",
    perimetr:40,
    getType:function(){
        console.log(this.type)
    },
    getPerimetr:function(){
        console.log(this.perimetr)
    },
    draw:function(){
        console.log(this.type)+" "+console.log(this.perimetr)
    }
}

var triangle=function(a,b,c){
    this.type="triangle";
    this.a=a;
    this.b=b;
    this.c=c;
    this.perimetr=a+b+c;
    this.getSides=function(){
        console.log("a: "+this.a+"b: "+this.b+"c: "+this.c)
    }
    this.__proto__=shape;
}

var square=function(a,b,c){
    this.type="square";
    this.a=a;
    this.b=b;
    this.c=c;
    this.perimetr=a+b+c;
    this.getSides=function(){
        console.log("a: "+this.a+"b: "+this.b+"c: "+this.c)
    }
    this.d=this.perimetr;
}

square.prototype=shape;


shape.getType();
shape.getPerimetr();

var newTriangle=new triangle(10,20,30);
newTriangle.getSides();
newTriangle.getPerimetr();
newTriangle.draw();
var newSquare=new square(50,100,200);
newSquare.getSides();
newSquare.getPerimetr();
newSquare.draw();
console.log(newSquare.d);