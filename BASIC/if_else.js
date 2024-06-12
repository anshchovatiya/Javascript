let age = 8;

if(age<18){
    console.log("you are not eligible for voting");
}
else{
    console.log("you are eligible for voting");
}

// it wil print remainder
console.log(8%3);


// this will return massage based on odd or even number
let number = 32;

if(number%2===0){
    console.log("number is even");
}
else{
    console.log("number is odd");
}


let my_age = 4;
// ternary operator or conditional operator 
let drink = (my_age>=5) ? "coffee" : "milk";
console.log(drink);

(my_age>=5) ? console.log("age is greater than 5") : console.log("age is smaller than 5");


let name = "ansh";
let runs = 8;

if(name==="ansh" && runs>30){
    console.log("your name is ansh and you scored more than 30 runs");
}
else if(name==="ansh" || runs<30){
    console.log(" either your name is ansh or you scored less than 30 runs");
}
else if(runs>=30){
    console.log("your name is not ansh but you scored more than 30 runs");
}

// AND Operator && --> return true if both condition are true
// OR  Operator || --> return true if one of the condition or both condition are true 