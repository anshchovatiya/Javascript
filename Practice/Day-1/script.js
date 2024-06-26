var a = 3;

{
    console.log(a);
}
console.log(a);

let b = 14;

{
    let c = 3;
    b = 38;
    console.log(b);
    console.log(c);
}

b = 11;
console.log(b);
// this will show error 
// console.log(c);


const m = 83;

console.log(m);

{
    // this will show the error
    // m = 38;
    const n = 38;
    console.log(m);
}
// this will show error
// console.log(n);


let string = "Ansh";
let secondVariable = "Chovatiya";

console.log(string+" "+secondVariable);