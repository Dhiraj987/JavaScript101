console.log("Hello World");

// concatination
let name = 'Sam';
console.log("Hello " + name);

// declaring variables
let firstName = 'Dave'; 
let lastName = "Rock";
console.log(firstName + ' ' + lastName);

//constants
const birthDate = '1994-01-04';
console.log(birthDate);

// primitive types-- these are the prim data types in JS
let name_a = 'Sam';          //String Literal
let age = 30;               //Number Literal
let isApproved = false      // Boolean Literal
let address = null;         // Object or null
let iDontKnow = undefined   // Undefined Literal

//Dynamic Programming Language allows us to change the data
// types of the variables meaning (say) age above can be changed
// to a String from Int -- we can use the chrome console to verify this

age = 'Wam; its a string now';

//------------------------------------------------------------------------

// Objects in JS

// let name_for_here = 'Sam';
// let age_for_here = 30
// these could be converted into an object by the following ways

let person = {
    name_for_here: 'BARRY',
    age_for_here: 30
};

console.log(person.age_for_here);

console.log(person.name_for_here);
person.name_for_here = "Sammy";

console.log(person.name_for_here);


// arrays

let selectedColors = [];
selectedColors = ['red', 'blue', 'green'];
console.log(selectedColors);
console.log('first element is ' + selectedColors[0]);

let selectedColorsPartTwo = [];
selectedColorsPartTwo = ['Samaa', 13, true];
console.log(selectedColorsPartTwo);



// functions in JS
function greet(){
    console.log('Hello World');
}
greet();

// function with inputs
function greet_updated(name){
    console.log('Hello '+ name);
}

greet_updated('Sammmm, is it?');


// performing a task
function two_inputs(fname, lname){
    console.log('Hello ' + fname + lname)
}

two_inputs('Greg ', 'Rae')


function square(num){
    return num * num
}

console.log(square(5))


// good to know, console.log  is also a function