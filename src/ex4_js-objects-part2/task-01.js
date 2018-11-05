function inProto(property,obj){
    if(!obj.hasOwnProperty(property)){
    console.log(obj[property])
    }
    else if(obj.hasOwnProperty(property)){
    console.log("Данного свойства нет в прототипе, но есть в наследуемом от него обьекте! ");
    }
    }
    var animal={predator:"yes", lives:"in forest", eats:true, runs:"fast"};
    var wolf=Object.create(animal);
    wolf.colour="grey";
    wolf.size="middle";
    inProto("colour",wolf);