// // Map object

// // --> map() creates a new array from calling a function for every array element.
// // --> map() does not execute the function for empty elements.
// // --> map() does not change the original array.

// let arr = new Map([["Name","Ansh"],["Age","18"]]);
// console.log(arr);

// // size property return length of the array or total number of key/values pairs
// console.log(arr.size);

// // --> entries() iterate through the array and return key values pair
// console.log(arr.entries());

// // --> forEach() iterate through the array and apply given function on all elements of  the array
// arr.forEach((val,key)=>{
//     console.log(`${key} --> ${val}`)
// })

// // --> get() will return value of given key
// console.log(arr.get("Name"));

// // --> set() will add new key/value pair in the array
// arr.set("salary",38000);
// console.log(arr);

// // --> has() will return true if given key exists in array or return false
// console.log(arr.has("Name"));
// console.log(arr.has("ansh"));

// ---------------------------------------------------------------------------------- 

// // Set Object

// // A JavaScript Set is a collection of unique values.
// // Each value can only occur once in a Set.
// // The values can be of any type, primitive values or objects.
// // In set method value is the key of the element    

// // Set() constructor
// let arr = new Set([1,2,3,4,5,6,2,6,3,2,2,7,8,9,1,10]);

// console.log(arr);


// // size property return length of the array 
// console.log(arr.size);

// // values() return array
// console.log(arr.values());

// // entries() returns array with key/valuse pair where key is pointing to values
// console.log(arr.entries());


// // has() will return true if given value exists in array or return false
// console.log(arr.has(8));
// console.log(arr.has(50));

// // delete() will delete given value 
// arr.delete(10);
// console.log(arr);

// // --> forEach() iterate through the array and apply given function on all elements of  the array
// arr.forEach((val,key)=>{
//     console.log(`${key} --> ${val}`)
// })


// ---------------------------------------------------------------------------------- 

let arr = [1,2,3,4,5,6,7,8,9,10];

let copy = [...arr];

arr.push(38);
console.log(copy);
console.log(arr);