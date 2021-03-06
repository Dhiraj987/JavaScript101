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


// Ternary Operator
let points = 110;
let type = points > 100 ? 'gold' : 'silver';     // ? here means if true whereas : means if false
console.log(type);



// Logical Operator
console.log(false && true);
console.log(true && true);

// an use case
let highIncome = true;
let goodCreditScore = true;
let eligibleForLoan = highIncome && goodCreditScore;

console.log('decisive loan', eligibleForLoan);

let considerForLoan = highIncome || goodCreditScore;
console.log('consider for loan', considerForLoan);



// Falsy values  (False values)
// undefined
// null
// 0
// false
// ''
// Nan

// everything else is Truthy

console.log(false || 'red');
console.log(0 || 'Dim');

// an use case
let default_color = 'red';
let selected_color = '';

console.log(selected_color || default_color);

console.log( false || 2 || 1);      // this prints 2
console.log(false || 1 || 3 )       // this prints 1
// the operator here compares the first element is compared with the 
// second, the moment it turns truly, it prints it out



// bitwise operator
// bitwise operator is denoted by | whereas logical or is denoted by ||
// 00000001 -- 1
// 00000010 -- 2
// 

console.log(1 | 2);   // it adds up to 3 (1 + 10 = 11 (3))
console.log(1 & 2)      // it adds to 0 (01 * 10 = 0 )
 