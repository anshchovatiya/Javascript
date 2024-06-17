let fruits = ["apple","banana","pineapple"];


// fruits.forEach((value,number,array)=>
// {
//     // first argument is value that is stored in current iteration
//     console.log(value);
//     // this is current iteration index number
//     console.log(number);
//     // this is entire array where loop is running
//     console.log(array);
// });



let ans = fruits.map((value,index,array)=>{
    let temp = value.toUpperCase();
    return temp;
});
console.log(ans);
let ans2 = fruits.map((value,index,array)=>{
    let temp = value.toLowerCase();
    return temp;
});
console.log(ans2);