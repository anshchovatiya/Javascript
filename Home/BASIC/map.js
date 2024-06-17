// let fruits = ["apple","banana","pineapple"];
// //  map is used when you want to return the value to the variable 

// let ans = fruits.map((value,number,array)=>
// {
//     return `${value} ${number}`;
// });


// console.log(ans);


let numbers = [1,2,3,4,5,6,7,8,9,10];

let ans = numbers.map((elevalue,index,array)=>{
    return elevalue*2;
});

numbers.forEach((num) => {
    console.log(num*2);
});

console.log(ans);