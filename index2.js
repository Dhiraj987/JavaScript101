// continued from the first file


// types of operators in JS -- Arithmetic, Assignment, Comparison, Logical, Bitwise


// Arithmetic operators
let x = 10;
let y = 5;

console.log(x*y);
console.log(x/y);
console.log(x+y);
console.log(x-y);
console.log(x**y)
console.log(x%y)


console.log('---------------------------')

// increment
// increase the value first and then display it
console.log(++x)
//print the value first and then increase the value
console.log(x++)
console.log(x)

// decrement
console.log(--x)



// Assignment Operator
let x_for_assi = 10;
x_for_assi = x_for_assi +5;

// equivalent to x += 5

console.log(x_for_assi);


// comparison operator

let a = 1;
console.log(a > 0);
console.log(a >= 1);
console.log(a === 1);           // strict equality operator
console.log(a != 1);


console.log(1 == 1);             // loose equality operator

// strict equality operator ensures that values that it compares are of same datatype 
// which isn't the case with loose equality operator
console.log('1' == 1);   // this is true here because the values matches even though the data types don't
// while comparing the values, the loose equality operator converts the data type
// of what's in the right side to what's on the left side

// for instance         true == '1' would convert 1 to a boolean and then compare them

