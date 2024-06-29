// sum of two numbers
document.getElementById("Submit").addEventListener("click", () => {
    let a = +(document.getElementById("sum1").value);
    let b = +(document.getElementById("sum2").value);
    let symbol = document.getElementById("symbol").value;
    let answer;
    switch (symbol) {
        case '+':
            answer = a + b;
            break;
        case '-':
            answer = a - b;
            break;
        case '/':
            answer = a / b;
            break;
        case '*':
            answer = a * b;
            break;
        case '%':
            answer = a % b;
            break;
    }
    document.getElementById("output").innerText = answer;

})


// area of the rectangle
document.getElementById("Submit2").addEventListener("click", () => {
    let a = +(document.getElementById("length").value);
    let b = +(document.getElementById("width").value);
    let answer = a * b;
    document.getElementById("output2").innerText = answer;
})


// celsius to fahrenheit 
document.getElementById("Submit3").addEventListener("click", () => {

    let option = document.getElementById("type").value;
    let value = document.getElementById("Unit").value;
    let answer;
    if (option === "Celsius-to-Fahrenheit") {
        answer = ((value * 9 / 5) + 32).toFixed(4) + " " + "Fahrenheit";
    }
    else if (option === "Fahrenheit-to-Celsius") {
        answer = ((value - 32) * 5 / 9).toFixed(4) + " " + "Celsius";
    }
    document.getElementById("output3").innerText = answer;
})

// remainder
document.getElementById("Submit4").addEventListener("click", () => {
    let a = +(document.getElementById("rem1").value);
    let b = +(document.getElementById("rem2").value);
    let answer = a % b;
    document.getElementById("output4").innerText = answer;
})

// power of the number
document.getElementById("Submit5").addEventListener("click", () => {
    let a = +(document.getElementById("pow-num").value);
    let b = +(document.getElementById("pow-power").value);
    let answer = a ** b;
    document.getElementById("output5").innerText = answer;
})


{
    // Combination of Arithmetic Operators 
    let a = 20;
    let b = 8;
    let c = (a / b) + (a * b); // 162.5
    console.log("combination of arithmetic operators")
    console.log(c);
    c = 10;
    b = c + (b + a) / (c * b); // 10
    console.log(c);
}

{
    // Comparing Numbers
    let a = 8;
    let b = 38;
    let c = 23;
    let d = 8;
    let e = 10;

    console.log("comparing numbers")
    console.log(a == b); // false
    console.log(a > b); // false
    console.log(e >= d);  // true
    console.log(d === a);  // true
    console.log(c === 23);  // true

}
{
    // Comparing strings
    let a = "hello world";
    let b = "Ansh Chovatiya";
    let c = "javascript";
    let d = "38";
    let number = 38;
    let e = "javascript";

    console.log("comparing strings");
    console.log(a == b); // false 
    console.log(a > number); // false
    console.log(e === d); // false 
    console.log(d === number); // false 
    console.log(d == number); // true
    console.log(c == a); // false

}

{
    // Comparing Different Types 

    let a = "javascript"
    let b = 38;
    let c = true;
    let d = "38"
    let e = 1;
    console.log("comparing different types");
    console.log(c==b); // false
    console.log(c==e); // true  
    console.log(a + d); // Javascript38
    console.log(a + b); // javascript38
    console.log(b * a); // NaN -> not a number
    console.log(b==d);  // true
    console.log(b===d); // false
}



{
    // Using Multiple Operators and complex assignment

    let a = 38;
    let b = 23;
    let c = 29;
    let z = a + b <= 29; // --> 38 + 23 <= 29 --> 61 <= 29 --> false

    console.log("Using Multiple Operators");
    console.log(z); // false
    z = ( z * (c * b) / a ) + a; // --> ( z * ( c * b) / a ) + a --> ( 0 * ( 29 * 23) / 38) + 38 = 38;
    z++; // 38 + 1 = 39;
    console.log(z);
    z--; // 38
    let x = 2;
    c = 2;
    z /= x += c;
    console.log(z); //9.5
}