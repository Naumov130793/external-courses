var shape = { 
  type: "rectangular", 
  perimeter: 40, 
  getType: function() { 
  console.log(this.type); 
  }, 
  getPerimeter: function() { 
  console.log(this.perimeter); 
  }, 
  draw: function() { 
  console.log(this.type) + " " + console.log(this.perimeter); 
  }, 
  getArea: function() { 
  console.log("Round's area is " + this.area); 
  }, 
  getSides: function() { 
  console.log("a: " + this.a + " b: " + this.b + " c: " + this.c); 
  } 
  }; 
  
  var triangle = function(a, b, c) { 
  this.type = "triangle"; 
  this.a = a; 
  this.b = b; 
  this.c = c; 
  this.perimeter = a + b + c; 
  Object.setPrototypeOf(this, shape) 
  }; 
  
  var square = function(a, b, c, d) { 
  triangle.call(this); 
  this.type = "square"; 
  this.a = a; 
  this.b = b; 
  this.c = c; 
  this.d = d; 
  this.perimeter = a + b + c + d; 
  this.getSides = function() { 
  console.log("a: " + this.a + "b: " + this.b + "c: " + this.c + "d: "+this.d); 
  }; 
  }; 
  
  var round = function(radius) { 
  triangle.call(this); 
  this.type="round"; 
  this.getSides = function(){ 
  console.log("У круга нет сторон"); 
  } 
  this.perimeter = 2 * 3.14 * radius; 
  this.a, this.b, this.c = undefined; 
  this.area=3.14 * radius*radius; 
  }; 
  
  var newSquare= new square(4,3.2,5,6); 
  newSquare.getType(); 
  newSquare.getPerimeter(); 
  newSquare.draw(); 
  var newRound = new round(5.3); 
  newRound.getType(); 
  newRound.getPerimeter(); 
  newRound.getArea(); 
  newRound.draw(); 
  newRound.getSides();