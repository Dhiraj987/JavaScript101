// continued from second js file


// Control Flow

// if else statement

let hour = 4;

if (hour >= 6 && hour < 12){
      console.log('Good Morning!')
  }

else if (hour > 12 && hour < 18){
    console.log('Good Afternoon!')
  }

else{
    console.log('Good Evening!')
}

// switch and case -- similar to java
 
let role = 'gue';

switch (role){
    case 'guest':
        console.log('Guest User')
        break

    case 'admin':
        console.log('Admin User')
        break

    case 'unknown':
        console.log('Unassigned User')
        break

    default:
        console.log('Hey You, need help?')
}


// for loops -- similar to java
for (let i = 0; i< 5; i++){
        console.log('Hey There')
    }


for (let i = 0; i< 10; i++){
    if (i % 2 == 0)
        console.log('Even ', i)
    else
        console.log('Odd', i)
}

//while loop
let i = 5;
while (i < 10){
    console.log('Hel')
    i+= 1
} 


// do while loop (they are executed at least one no matter the condition)
let j = 1
do {
    console.log('the do while loop is here')
    j +=1
} while (j<3)

// for... in
person = {
    name: 'Priya',
    age: 30,
    location: 'JH'
}

for (let i in person){
    console.log(person[i])
}

list_ = ['red', 'blue', 'green']

for (ind in list_){
    console.log(list_[ind])
}

// opposed to python, the for in loop gets the index or the 
// key-for-reference in javascript


console.log('------------------------')
// for of loop

for (let item of list_){
    console.log(item)
}

for (let item in person)
    console.log(person[item])
// the for of loop here takes care of the index issue in JS
// it refers to the item of the list and not the index

// for.. in loop is used for objects (dictionaries)
// for.. of loop is used for items in a list

console.log('------------------------')
for (let i = 0; i<5; i++){
    if (i == 3) {
        continue
    }
    console.log(i)
}

console.log('------------------------')
for (let i = 0; i<5; i++){
    if (i == 3) {
        break
    }
    console.log(i)
}

// break breaks the loop whereas the continue jumps 
// to the next iteration of the loop 


