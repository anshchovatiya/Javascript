// 1. Write a program to convert temperatures between Celsius and Fahrenheit.

let celsiusToFahrenheit = (celsius) =>{
    let answer = ((celsius * 9 / 5) + 32).toFixed(2) + " " + "Fahrenheit";
    return answer;
}

let fahrenheitTocelsius = (Celsius) => {
   let  answer = ((Celsius   - 32) * 5 / 9).toFixed(2) + " " + "Celsius";
   return answer;
}

// console.log(celsiusToFahrenheit(20));
// console.log(fahrenheitTocelsius(50));


// 2. Write a program that acts as a simple calculator performing addition, subtraction, multiplication, and division.

function calculator(value1,value2,symbol){
  let ans;
   switch(symbol){
        case "+" :
           ans = value1 + value2;
           break;
        case "*" :
           ans = value1 * value2;
           break;
        case "/" :
           ans = value1 / value2;
           break;
        case "-" :
           ans = value1 - value2;
           break;
        case "%" :
            ans = value1 % value2;
            break;
        default :
            ans = "Invalid Input";
    }
    return ans;
}
// console.log(calculator(3,8,"+"));
// console.log(calculator(3,8,"-"));
// console.log(calculator(10,2,"/"));
// console.log(calculator(11,2,"%"));
// console.log(calculator(11,2,"*"));

// 3. Write a program to find the largest of three numbers.

function findLargest(...arguments){
    let largest = arguments[0];
    for(let current of arguments){
        if(current > largest){
            largest = current;
        }
    }
    return largest;
}

// console.log(findLargest(38,9,92,39,28,389));


// 4. Write a program to find the factorial of a given number.

function factorial(num){
    let ans = 1;
    for(let i = 1; i<=num; i++){
        ans *= i;
    }
    return ans;
}

// console.log(factorial(5));
// console.log(factorial(10));

// 5. Write a program to print the first n terms of the Fibonacci sequence.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181

function fibonacci(n){
    for(let i = 1; i<=n ; i++){
        
    }
}

// 6. Write a program to reverse a given string.
// 7. Write a program to check if a string is a palindrome.
// 8. Write a program to find the sum of the first n natural numbers.
// 9. Write a simple guessing game where the user has to guess a number between 1 and 10.
// 10. Write a program to count the number of vowels and consonants in a given string.
// 11. Write a program to check if a year is a leap year or not.
