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