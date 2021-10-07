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
