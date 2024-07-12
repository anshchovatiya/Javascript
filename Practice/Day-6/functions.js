// 1. Write a program to convert temperatures between Celsius and Fahrenheit.

let celsiusToFahrenheit = (celsius) => {
    let answer = ((celsius * 9 / 5) + 32).toFixed(2) + " " + "Fahrenheit";
    return answer;
}

let fahrenheitToCelsius = (Celsius) => {
    let answer = ((Celsius - 32) * 5 / 9).toFixed(2) + " " + "Celsius";
    return answer;
}

// console.log(celsiusToFahrenheit(20));
// console.log(fahrenheitToCelsius(50));


// 2. Write a program that acts as a simple calculator performing addition, subtraction, multiplication, and division.

function calculator(value1, value2, symbol) {
    let ans;
    switch (symbol) {
        case "+":
            ans = value1 + value2;
            break;
        case "*":
            ans = value1 * value2;
            break;
        case "/":
            ans = value1 / value2;
            break;
        case "-":
            ans = value1 - value2;
            break;
        case "%":
            ans = value1 % value2;
            break;
        default:
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

function findLargest(...arguments) {
    let largest = arguments[0];
    for (let current of arguments) {
        if (current > largest) {
            largest = current;
        }
    }
    return largest;
}

// console.log(findLargest(38,9,92,39,28,389));


// 4. Write a program to find the factorial of a given number.

function factorial(num) {
    let ans = 1;
    for (let i = 1; i <= num; i++) {
        ans *= i;
    }
    return ans;
}

// console.log(factorial(5));
// console.log(factorial(10));

// 5. Write a program to print the first n terms of the Fibonacci sequence.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181

function fibonacci(n) {
    let current = 0;
    let first = 0;
    let second = 1;
    for (let i = 1; i <= n; i++) {

        console.log(current);
        first = second;
        second = current;
        current = first + second;
    }
}

// fibonacci(10);

// 6. Write a program to reverse a given string.

function reverseString(string) {
    string = string + "";
    string = string.split("");
    string.reverse();
    let ans = "";
    for (let current of string) {
        ans += current;
    }
    return ans;
};

// console.log(reverseString("hello my name is ansh"));

// 7. Write a program to check if a string is a palindrome.


function checkPalindrome(string) {
    let reverseStr = reverseString(string);
    if (string === reverseStr) {
        return true;
    }
    else {
        return false;
    }
};

// console.log(checkPalindrome("ansh"));
// console.log(checkPalindrome("nayan"));
// console.log(checkPalindrome("yamay"));

// 8. Write a program to find the sum of the first n natural numbers.

function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// console.log(sumOfNaturalNumbers(10));
// console.log(sumOfNaturalNumbers(3));
// console.log(sumOfNaturalNumbers(5));

// // 9. Write a simple guessing game where the user has to guess a number between 1 and 10.

// let count = 0;

// function guessingGame(guess, ansNumber) {
//     count++;
//     if (guess > ansNumber) {
//         console.log("your guess is to high");
//     }
//     else if (ansNumber > guess) {
//         console.log("The guess is to low")
//     }
//     else if (ansNumber === guess) {
//         console.log("Your guess is correct and you guessed the right number in ", count, " Attempts");
//     }
// }

// let randomNumber = Math.trunc(Math.random() * 10);
// let userInput;

// do {
//     userInput = prompt("Enter your guessed number");
//     userInput = +userInput;
//     guessingGame(userInput, randomNumber);

// } while (userInput != randomNumber);

// 10. Write a program to count the number of vowels and consonants in a given string.

function countVowelsAndConstants(string) {
    let vowels = "aeiou";
    let constants = "bcdfghjklmnpqrstvwxyz";
    let vowelsCount = 0;
    let constantsCount = 0;

    for (let current of string) {
        if (vowels.includes(current)) {
            vowelsCount++;
        }

        else if (constants.includes(current)) {
            constantsCount++;
        }

    }

    console.log("The number of vowel in given string is ", vowelsCount);
    console.log("The number of constants in given string is ", constantsCount);
};


let str = "my name is ansh chovatiya";
// let str = "nayan";
// let str = "aeioubfgh"
countVowelsAndConstants(str);

// 11. Write a program to check if a year is a leap year or not.


function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 != 0) || (year % 400 === 0)) {
        console.log("The year is leap year");
    }
    else {
        console.log("The year is not leap year");
    }
}

// checkLeapYear(2004);
// checkLeapYear(2111);
// checkLeapYear(2014);