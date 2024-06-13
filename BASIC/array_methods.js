// indexof --> the index of method returns the first index at which a given element can be found in the Array, or -1 if element is not present

// syntax --> indexOf(searchElement,fromIndex);


// lastIndexOf --> the lastIndexOf method returns the last index at which a given element can be found in the array, or -1 if element is not present

// syntax --> lastIndexOf(searchElement)

// include --> the include method searches wheter certain element is present in the array or not and returns true false based on the result 

let names = ["ansh", "chetan", "darshan", "ansh", "avinash", "ansh", "chetan"];

// let ans = names.indexOf("divyesh",0);
// console.log(ans);
// let ans2 = names.indexOf("ansh");
// console.log(ans2);
// let ans3 = names.indexOf("div");
// console.log(ans3);


// let ans = names.lastIndexOf("chetan");
// console.log(ans);
// let ans2 = names.lastIndexOf("ansh", 4);
// console.log(ans2);
// let ans3 = names.lastIndexOf("ansh");
// console.log(ans3);

// let ans = names.includes("ansh");
// console.log(ans);
// let ans2 = names.includes("an");
// console.log(ans2);


// find method --> this method is used to find the first element in array that satisfies a provided testing function, it returns first element that satisfies the condition and returns undefined if no element is found

// Syntax --> Array.find((currentValue,index,Array)==>{ 
//     your logic
// },thisvlaue);


let numbers = [3,9,29,19,1,8,59,29,18,28];

let ans = numbers.find((currentValue)=>{

  if(currentValue>8){
    return currentValue;
  }
});


console.log(ans);




// findIndex --> this is same as find method but it ruturns index number of matching element Instead of It's value.


// Syntax --> Array.findIndex((currentValue,index,Array)==>{ 
//     your logic
// },thisValue);

let numbers2 = [3,9,29,19,1,8,59,29,18,28];

let ans2 = numbers2.findIndex((currentValue)=>{

  if(currentValue>8){
    return currentValue;
  }
});

console.log(ans2);



// filter --> The filter method creates a new array, with all element that pass the test implemented by the the provided function 

// Syntax --> Array.filter((currentValue,index,Array)==>{ 
//     your logic
// },thisValue);


let numbers3 = [3,9,29,19,1,8,59,29,18,28,9,8,3,2,9,38,85,3];

let ans3 = numbers3.filter((currentValue)=>{

  if(currentValue>8){
    return currentValue;
  }
});

// console.log(ans3);


// delete all the 9 number from the array


let ans4 = numbers3.filter((currentValue,index)=>
{

if(currentValue!=9){
    return currentValue;
}
});

console.log(ans4);


let finalNames = names.map((currentValue)=>{
  currentValue = "Mr." + currentValue;
  return currentValue;
});

console.log(finalNames);