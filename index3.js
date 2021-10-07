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

