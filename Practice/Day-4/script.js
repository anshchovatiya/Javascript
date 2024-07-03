
// Write a program that calculates the sum of all numbers from 1 to 100
{
    let num = 100;
    let sum = 0;
  
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
  
    console.log(sum);
  }
  
  // Write a program that prints the multiplication table of a given number
  
  {
    let num = prompt("Enter the number that you need multiplication table of ");
    num = +num;
  
    console.log(" ");
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} * ${i} = ${num * i}`);
    }
    console.log(" ");
  }
  
  // Write a program that calculates the factorial of a given number
  
  {
    let num = prompt("Enter the number that you need factorial");
  
    num = +num;
    let sum = 1;
    for (let i = 1; i <= num; i++) {
      sum *= i;
    }
    console.log(`The factorial of ${num} is ${sum}`);
    console.log(" ");
    0;
  }
  
  // Write a program that prints the first 10 numbers in the Fibonacci sequence.
  
  {
    let current = 0;
    let first = 1;
    let second = 0;
    console.log(" ");
  
    for (let i = 0; i < 10; i++) {
      console.log(current);
      second = current;
      current = first + second;
      first = second;
    }
  
    console.log(" ");
  }
  
  // Write a program that reverses a given string.
  
  {
    let str = prompt("Enter the string that you want to reverse");
    let revesedString = "";
  
    for (let i = str.length - 1; i >= 0; i--) {
      revesedString += str[i];
    }
    console.log(revesedString);
    console.log(" ");
  }
  
  // Write a program that calculates the sum of all elements in an array
  
  {
    let arr = [8, 39, 29, 12, 34, 28, 19, 29];
  
    let sum = 0;
    for (let current of arr) {
      sum += current;
    }
  
    console.log(sum);
    console.log(" ");
  }
  
  
  
  
  // Write a program that finds the largest number in an array
  
  {
      let arr = [8, 39, 29, 12, 34, 28, 19, 29];
    
      let ans = -999999;
      for (let current of arr) {
        if(current>ans){
          ans = current;
        }
      }
    
      console.log(ans);
      console.log(" ");
    }
  
  
  
    // write a function that count number of vowel that is present in the string
  
  {
  
      function countAllTheVowel(string){
          let count = 0;
              let vowels = "aeiou";
              for(let char of string){
                  let check = vowels.includes(char);
                  if(check){
                      count++;
                  }
              }
              return count;
          }
      
      let string = prompt("Enter string that you want to count vowel of ");
      console.log(countAllTheVowel(string));
      console.log(" ");
     } 
      