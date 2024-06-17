function reverse(string){
    let newstring = '';
    for(let i=string.length-1;i>=0;i--){
        newstring+=string[i];
        }
    return newstring;
}


let string = prompt("enter the string");
// let string = "my name is ansh";
// string=reverse(string);
// console.log(string)
let reversed = reverse(string);

if(str===reversed){
    console.log("the string is palindrome string")
}
else{
    console.log("the string is not palindrome string");
}

;