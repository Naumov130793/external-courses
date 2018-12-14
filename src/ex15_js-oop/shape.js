var shape={
    type:"triangle",
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


var squard=shape;
squard.type="triangle";
shape.getType();
shape.draw();