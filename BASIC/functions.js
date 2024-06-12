hello();
let number = prompt("enter the number");
pattern(number);
// let number = 8;


let a = 8, b = 2;
console.log(sum(a, b));

function hello(){
    console.log("hello world");
}


function pattern(num) {
    for (let i = 0; i < num; i++) {
        let string = "";
        for (let j = 0; j <= i; j++) {
            string += "*";
        }
        console.log(string);
    }
    return;
}

function sum(a, b) {
    let sum = a + b;
    return sum;
}