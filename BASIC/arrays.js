// push() --> add element at back of the array
// pop()  --> delete element at back of the array 
// unshift() --> add element at front of the array
// shift() --> delete element at front of the array


// if you pass array to another array it will be pass by refrence 

let names = ["ansh","nayan","jignesh","jenish","chetan"];

console.log(names);
console.log(names[2]);


let numbers = [38,32,69,39,29,59];

console.log(numbers);
console.log(numbers[3]);


let mixed = ["ansh",39,"nayan",29,"jenish",21];

console.log(mixed);
console.log(mixed[0]);
mixed[1]=1;
console.log(mixed[1]);

mixed.push("88");
mixed.push("8354");
console.log(mixed);
let popped = mixed.pop();
console.log(popped);
console.log(mixed);


let ne = ["at", "ei"];
ne.unshift("hello");
console.log(ne);
ne.shift();
console.log(ne);


let array1 = ["first","second"];
let array2 = array1;
array1.push("thrid");
console.log(array2);
