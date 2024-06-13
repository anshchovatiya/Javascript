
// hello();
// function hello(){
//     console.log("hello world");
// }


// let number = prompt("enter the number");
// pattern(number);
// function pattern(num) {
//     for (let i = 0; i < num; i++) {
//         let string = "";
//         for (let j = 0; j <= i; j++) {
//             string += "*";
//         }
//         console.log(string);
//     }
//     return;
// }

// let a = 8, b = 2;
// console.log(sum(a, b));
// function sum(a, b) {
//     let sum = a + b;
//     return sum;
// }


// greet("vinay");
// greet("ajay")
// function greet(v) {
//     console.log("hello", v);
// }


// this is immediately invoked function It will invoked automatically when page is loaded
// (function(a,b){
//     console.log(a+b);
// })(3,6);


// it is function expressing that makes anonymous function with no function name 
// var t = function(a,b){
//     console.log(a+b);
// }

// t(3,21);

// var second = (function(a,b){
//     console.log(a+b);
//     return a+b;
// })(3,6);

// console.log(`your answer is ${second}`);



// function multiply(a,b=8){
//     console.log(a*b);
// }


// multiply(3);
// flatarrow function it is nameless function b 
// let a = (a,b) => console.log(a*b);

// a(3,69);


// let number1 = prompt("enter the first number");
// let number2 = prompt("enter the second number");
// let symbol = prompt("enter the symbol");

// calculator(+number1,+number2,symbol);

// function calculator(a,b,sym){
//     if(sym==='+'){
//         console.log(a+b);
//     }
//     else if(sym==='-'){
//         console.log(a+b);
//     }
//     else if(sym==='*'){
//         console.log(a*b);
//     }
//     else if(sym==='/'){
//         console.log(a/b);
//     }
// }


function reverse(string){
    let newstring = '';
    for(let i=string.length-1;i>=0;i--){
        newstring+=string[i];
        }
    return newstring;
}



