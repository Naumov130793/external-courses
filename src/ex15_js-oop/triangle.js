var shape={
    type:"squard",
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


shape.getType();
shape.getPerimetr();

var newTriangle=new triangle(10,20,30);
newTriangle.getSides();
newTriangle.getPerimetr();
newTriangle.draw();
