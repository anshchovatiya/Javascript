let winning_number = 38;

// prompt() --> it is used to take input from a user 

let user_guess = prompt("guess the number");
// it will take input as string so you have to convert it into number
console.log(typeof user_guess);
user_guess = +user_guess;
console.log(typeof user_guess);
console.log("your number is ",user_guess);

if(user_guess<38){
    console.log("your number is too low your prediction is wrong");
}
else if(user_guess>38){
    console.log("your number is too big  your prediction is wrong");
}
else{
    console.log("your prediction is correct");
}


let day = 70;

// switch case , break , continue   

// switch case --> alternative to if else 
// break --> break loop or ladder of conditions
// continue --> break the current loop iteration and continue other iterations

switch (day){
    case 1: 
        console.log("today is monday");
        break;
    case 2:
        console.log("today is tuesday");
        break;
    case 3:
        console.log("today is wednesday");
        break;
    case 4:
        console.log("today is thursday");
        break;
    case 5:
        console.log("today is friday");
        break;
    case 6:
        console.log("today is saturday");
        break;
    case 7:
        console.log("today is sunday");
        break;
    default:
        console.log("Invalid Input");
}