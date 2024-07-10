// returns number converted from  an arguments
let num =  new Number("38");

//  returns a original value  of number
console.log(num.valueOf());

// convert number into  string
console.log(typeof num.toString());
console.log( num.toString());

// convert number into exponential formate
console.log(num.toExponential(3));

// cotrol the points  behind the number
console.log(num.toFixed(3));
let num2 =  new Number("29.3859435");

//  control how many digits in the number
console.log(num2.toPrecision(5));

// return floating point number conveted from an argument
console.log(parseFloat(num2));

// return integer number converted from an argument
console.log(parseInt(num2));


// return true if argument passed is a integer else return false
let string = "298";
console.log(Number.isInteger(string));
console.log(Number.isInteger(38));


// return true if argument passed in function is bound in int limit then it returns true else returns false
console.log(Number.isSafeInteger(383845394834));
console.log(Number.isSafeInteger(383845353453494834));