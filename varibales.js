
// this take our freedom to write Synthetically wrong code so we can write perfect code
// "use strict";


// Let keyword variable

// --> variable declared with let keyword can not be re-declared on the same block
// --> variable defined with let keyword must be declared before using it.
// --> variable defined with let have block scope.


// let x = 3;

// console.log(x);
// // here x is 3

// {
//     let x = 18;
//     console.log(x);
//     // here x is 18
// }

// // here x is 3
// console.log(x);

// console.log("let defined variable have block level scope");

//  y can not be used here
//  console.log(y);



// -----------------------------------------------------------------------------------------------------------


// // var keyword variable

// // --> variable declared with var keyword can not have block scope 
// // --> variable defined with var keyword can be accessed outside the block
// // --> variable declared with var keyword can be declared multiple time and it will overwrite before value

// {
    // var x = 3;
    // }
    // // it will print 4
    // console.log(x+1);
    
    
    // console.log(x);
    // // here x is 3
    
    // {
        //     var x = 18;
        //     console.log(x);
        //     // here x is 18
// }

// // here x is 18
// console.log(x);


// -----------------------------------------------------------------------------------------------------------


// const keyword variable

// --> variable declared with const cannot be re-declared on the same block
// --> variable declared with const cannot be re-assigned



// const a=8;

// console.log(a);

// {
// const a=18;
// // this will not work
// // a=38;
// console.log(a);
// }

const pi=3.14;
console.log(pi);
// this is not valid 
// pi+=3;
// console.log(pi);

let number=8;
console.log(number++);
console.log(++number);