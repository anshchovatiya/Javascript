<<<<<<< HEAD
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
    
=======
// check if number is odd or even in javascript

document.getElementById("oddOrEven").addEventListener("keyup",()=>{
    let num = document.getElementById("oddOrEven").value;
    num = +num;
    if(num%2===0){
        document.querySelector(".OddEvenAnswer").innerHTML = "Even";
    } 
    else{
         document.querySelector(".OddEvenAnswer").innerHTML = "Odd";

     }
}); 



// find the larger of two number 

document.getElementById("LargeNumSubmit").addEventListener("click",()=>{
    let num1 = +document.getElementById("largeNum1").value;
    let num2 = +document.getElementById("largeNum2").value;
    console.log(typeof num2);
    if(num1>num2){
       document.querySelector(".LargeNumAns").innerHTML = `${num1} is larger `
    } 
    else if(num2>num1){
          document.querySelector(".LargeNumAns").innerHTML = `${num2} is larger`
     }
     else{
         document.querySelector(".LargeNumAns").innerHTML = `${num1} and ${num2} are equal `;
     }
})


// Perform arithmetic operations on two numbers

document.getElementById("operationsSubmit").addEventListener("click",()=>{
    let num1 = +document.getElementById("operations1").value;
    let num2 = +document.getElementById("operations2").value;


    if((num1+num2)>=100){
        document.querySelector(".operationsAns").innerHTML = "Total is grater than 100 "
    }
    else{
        document.querySelector(".operationsAns").innerHTML = "Total is less than 100 "
    }
});


// find the grade for input marks

document.getElementById("markSubmit").addEventListener("click",()=>{
    let subject1 = +document.getElementById("subject1").value;
    let subject2 = +document.getElementById("subject2").value;
    let subject3 = +document.getElementById("subject3").value;
    let Total = ((subject1 + subject2 + subject3)/3).toFixed(4);
    if(Total>100){
        
        document.getElementById("grade").innerText = `False Input`
    }
    else if(Total<33){
        document.getElementById("grade").innerText = `Grade - F **  Your Total is ${Total}`
    }
    else if(Total>=33&Total<50){
        document.getElementById("grade").innerText = `Grade - E **  Your Total is ${Total}`
    }
    else if(Total>=50&Total<60){
        document.getElementById("grade").innerText = `Grade - D **  Your Total is ${Total}`
    }
    else if(Total>=60&Total<70){
        document.getElementById("grade").innerText = `Grade - C **  Your Total is ${Total}`
    }
    else if(Total>=70&Total<90){
        document.getElementById("grade").innerText = `Grade - B **  Your Total is ${Total}`
    }
    else if(Total>=90){
        document.getElementById("grade").innerText = `Grade - A **  Your Total is ${Total}`
    }
    
});


document.getElementById("SortSubmit").addEventListener("click",()=>{
    let num1 = +document.getElementById("Sort1").value;
    let num2 = +document.getElementById("Sort2").value;
    let num3 = +document.getElementById("Sort3").value;

    if(num1>=num2&&num1>=num3){
        if(num2>num3){
            document.getElementById("SortAns").innerText = `Sorted Numbers are ${num3} ${num2} ${num1}`
        }
        else{
            document.getElementById("SortAns").innerText = `Sorted Numbers are ${num2} ${num3} ${num1}`
        }
    }
    else if(num2>=num1&&num2>=num3){
        if(num1>num3){
            document.getElementById("SortAns").innerText = `Sorted Numbers are ${num3} ${num1} ${num2}`
        }
        else{
            document.getElementById("SortAns").innerText = `Sorted Numbers are ${num1} ${num3} ${num2}`
        }
    }
    else if(num3>=num1&&num3>=num2){
        if(num1>num2){
            document.getElementById("SortAns").innerText = `Sorted Numbers are ${num2} ${num1} ${num3}`
        }
        else{
            document.getElementById("SortAns").innerText = `Sorted Numbers are ${num1} ${num2} ${num3}`
        }
    }
});


console.log(-9*3); // Output -27
console.log("Value is " + 50); // Output "Value is 50 " --> converted into string
console.log(17%5); // Output 2 --> remainder
console.log(5%17); // Output 5 --> remainder
console.log(5/10); // Output 0.5

if(4==4){
    console.log("4==4");
    console.log("statement is true");
}
else{
    console.log("statement is false");
}
if(4!=5){
    console.log("4!=5");
    console.log("statement is true");
}
else{
    console.log("statement is false");
}
if(7<=8){
    console.log("7<=8");
    console.log("statement is true");
}
else{
    console.log("statement is false");
}
>>>>>>> 0d30c997c51bb448d07b5d4e2824a0bfeaafbef2
