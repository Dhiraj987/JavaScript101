// object oriented in JS

// A collection of objects that communicate with each other to perform certain task is oop
// as opposed to procedural programming, the parameters are kept encapsulated within
// the object

var circle = {
  radius: 2,
  location: {
    latitude: 1,
    longitude: 5,
  },

  draw: function () {
    console.log("drawing a circle");
  },

  perimeter: function () {
    console.log(2 * Math.PI * this.radius);
  },

  area: function () {
    console.log(Math.PI * this.radius ** 2);
  },
};
circle.area();
console.log("HEY");

// a function that is part of an object, we call it a method

// factory function

function create_circle(radius) {
  return {
    radius,
    // the parenthesis after the name below makes it a method
    draw() {
      console.log("drawing a circle");
    },
  };
}

const circle1 = create_circle(1);

console.log(circle1);
console.log("------------------------------");

// constructor function -- this is similar to Java

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
  this.area = function () {
    console.log(Math.PI * radius ** 2);
  };
}

const circle_1 = new Circle(2);
console.log(circle_1.area());

// three things happens when we use new keyword (similar to what happens in JAVA)
// 1. the var/constant is pointed to an empty object {}
// 2. the var/constant then is constructed by following **this** keywords in the
//          constructor definition
// 3. it then returns the newly created object

// is_sunday = True (is also same as new) Boolean()

num = new Number();
console.log(num);


console.log('----------------------------------------')
// ---------------------------------------------------

const circle_line_78 = {
  radius: 1,
  draw() {
    console.log('hey');
  }
};

for (let key in circle_line_78){
  console.log(key, circle_line_78[key])
}