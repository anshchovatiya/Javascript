// 1. Write a JS function that reverse a number. 
// Example x = 15438;
// Expected Output : 83451


const reverseNumber = (number) => {
    number = number + "";
    // console.log(typeof number);
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
console.log(number);




// 2. Write a JS function that returns a passed string with letters in alphabetical order. 
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.






// 3. Write a JS function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox'

// 4. Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'

// 5. Write a JavaScript function that checks whether a number is perfect.


