// object oriented in JS

// A collection of objects that communicate with each other to perform certain task
// as opposed to procedural programming, the parameters are kept encapsulated within 
// the object

var circle = {
    radius: 2,
    location: {
        latitude: 1,
        longitude: 5
    },


    draw: function(){
        console.log('drawing a circle');
    },

    perimeter: function(){
        console.log(2* Math.PI* this.radius);
    },

    area : function(){
        console.log(Math.PI* (this.radius**2));
    }

}
circle.area();
console.log('HEY')

// a function that is part of an object, we call it a method 



// factory function

function create_circle(radius){
 return {
     radius,
     // the parenthesis after the name below makes it a method
     draw() {
        console.log('drawing a circle')
     }
 }   
}

const circle1 = create_circle(1);

console.log(circle1)

