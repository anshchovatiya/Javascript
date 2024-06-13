let array = [1,2,3,2,4,10,5,6,7,8,9,1,10];
 
// it returns new array with all unique number
let ans =new Set(array);
console.log(ans);

let ans2 = array.filter((currentNum,index,array)=>
{
    let check = true;
    for(let j=index+1;j<array.length;j++){
        if(array[index]===array[j]){
            check = false;
        }
    }
    if(check){
        return currentNum;
    }
});

console.log(ans2);

