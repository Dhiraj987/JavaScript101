// for some questions

function max_num(num1, num2){
    if (num1>num2)
        console.log(String(num1), 'is greater than', String(num2));
    else if (num1===num2)
        console.log(String(num1), 'is the same as', String(num2));
    else
        console.log(String(num2), 'is greater than', String(num1));
}

max_num(115,57)


// the function takes in image width and image height
// if width > heigh, the image is landscape

function is_landscape(img_width, img_height){
    if (img_width > img_height)
        return true;
    else
        return false;
}

console.log(is_landscape(12,45))


// the popular fizz_buzz
function fizz_buzz(number){
    if ((number % 3) == 0 && (number % 5 == 0) )
        console.log("fizz_buzz");
    else if (number % 3 == 0)
        console.log('fizz');
    else if (number % 5 == 0)
        console.log('buzz');
    else if (number % 1 == 0)
        console.log(number);
    else
        console.log('Not a number');
    // we can also use the typeof operator here
    // if (typeof number != 'number')

}

fizz_buzz(15)


// check_speed function

function check_speed(speed){
    
    const speed_limit = 70;
    const kms_per_point = 5;
    let point;

    // to handle invalid statements
    if (typeof speed != 'number')
        return "enter a number";
    

    if (speed <= speed_limit)
        console.log("ok");
    else{
        point = Math.floor((speed- speed_limit)/kms_per_point);
        
        if (point<12)
            console.log(String(point),'points');
        else
            console.log('License suspended');

    }
}

check_speed(130)
