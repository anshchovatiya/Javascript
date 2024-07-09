
const Name = "ansh";
const day = 230;
// if key and values are same you do not need to define it twice
const obj = { Name, day };

console.log(obj);

// destructuring an array 
let array = [3, 38, 29];
let [first, second, third] = array;
console.log(first, second, third);


// swipe numbers without using third variable

let a = 8, b = 38;
[a, b] = [b, a];
console.log(a, b);


// in object destructuring object key name and copy name have to be the same
let obj2 = { name: "ansh", age: 19 };
let { name, age } = obj2;
console.log(name, age);


// spread operator can spread content of object and array
let Array = ["apple", "banana", "pineapple", "mango"];
let newArray =[...Array];
console.log(newArray);


let string = "hello";
// let stringArray = string.split("");
let stringArray = [...string];
console.log(stringArray);


// flat() method turn multidimensional array to one dimensional array 
let arr = [1,3,5,[3,9,3],33,3];
console.log(arr);
arr = arr.flat();
console.log(arr);