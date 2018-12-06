var shape = {
  type: "rectangular",
  perimetr: 40,
  getType: function() {
    console.log(this.type);
  },
  getPerimetr: function() {
    console.log(this.perimetr);
  },
  draw: function() {
    console.log(this.type) + " " + console.log(this.perimetr);
  }
};

var triangle = function(a, b, c) {
  this.type = "triangle";
  this.a = a;
  this.b = b;
  this.c = c;
  this.perimetr = a + b + c;
  this.getSides = function() {
    console.log("a: " + this.a + "b: " + this.b + "c: " + this.c);
  };
  this.__proto__ = shape;
  console.log(this.__proto__);
};

var square = function(a, b, c) {
  this.type = "square";
  this.a = a;
  this.b = b;
  this.c = c;
  this.perimetr = a + b + c;
  this.getSides = function() {
    console.log("a: " + this.a + "b: " + this.b + "c: " + this.c);
  };
  this.d = this.perimetr;
  this.__proto__ = shape;
};

var round = function(radius) {
  this.getSides = undefined;
  triangle.call(this);
  this.perimetr = 2 * 3.14 * radius;
  this.a, this.b, (this.c = undefined);
  this.getArea = function() {
    console.log("Round's area is " + 2 * 3.14 * radius);
  };
};

var newRound = new round(5.3);
newRound.getSides();
newRound.getPerimetr();
newRound.getArea();



