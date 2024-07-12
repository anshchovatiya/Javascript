
// 1. Write a JS function that reverse a number. 
// Example x = 15438;
// Expected Output : 83451


const reverseNumber = (number) => {
    number = number + "";
    number = number.split("");
    number.reverse();
    let ans =  "";
    for(let current of number){
        ans += current;
    }
    ans =  +ans;
    return ans;
};
let number = reverseNumber(3432);
// console.log(number);




// 2. Write a JS function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.


function sortString (string){
    let stringArray = string.split("");
    stringArray.sort();

    // filter method will remove all the blank spaces from the string
    let ans = stringArray.filter((character)=>{
        return character != " ";
    })
    let str = "";
    // this loop will cocate the string
    for(let current of ans){
        str += current;
    }
    return str;
}

// console.log(sortString("chovatiya Ansh"));



// 3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

function convertLetterUpperCase(str){

    let array = str.split("");

    array[0] = array[0].toUpperCase();

    for(let i = 0; i<array.length; i++){
        if(array[i]===" "){
            i++;
            array[i] = array[i].toUpperCase();
        }
    }
   
    let ans = "";

    for(let current of array){
        ans += current;
    }
    return ans;
    
}

console.log(convertLetterUpperCase("my name is ansh"));




// 4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

// 5. Write a JavaScript function that checks whether a number is perfect.


