// sort() --> sort method is used to sort the array

let array = [1, 2, 3, 2, 4, 10, 5, 6, 7, 8, 9, 1, 10];

let sortedArray = array.sort(
    (a, b) => {
        if (a > b) {
            return 1;
        }
        else if (b > a) {
            return -1;
        }
    }
);
console.log(sortedArray);


let fruits = ["banana","pineapple","apple","carrot","orange","dragonfruit"];
console.log(fruits.sort());

// return square of all even Numbers 

let ans = array.map((currentValue)=>{
    if(currentValue%2===0){
        currentValue*=currentValue;
        return currentValue;
    }
});
console.log(ans);

ans = ans.filter((currentValue)=> { return currentValue!=undefined;});
console.log(ans);