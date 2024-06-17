// // write a javascript function that  print the letters 'a' through 'z' in console. You should use the loop to iterate through the letters and print each on a new line

// // console.log("a".charCodeAt());
// // console.log("z".charCodeAt());

// let string = "";

// for(let i=97;i<=122;i++){
//     string += String.fromCharCode(i) + " ";
// }
// console.log(string);



// // write a function that count number of vowel that is present in the string

// let string = "my name is ansh chovatiya";
// let count = 0;
// for(let i=0;i<string.length;i++){
//     if(string[i]==="a"||string[i]==="e"||string[i]==="i"||string[i]==="o"||string[i]==="u"){
//         count++;
//     }
// }
// console.log(count);

// console.log(countAllTheVowel(string));


// function countAllTheVowel(string){
//     let count =0;
//         let vowels = "aeiou";
//         for(let char of string){
//             let check = vowels.includes(char);
//             if(check){
//                 count++;
//             }
//         }
//         return count;
//     }


// write a function that checks that if all the vowel present in string or not 


// let string = "my name is ansh chovatiya";
// let string2 = "my name is ansh chovatiyau";


// let check = checkAllTheVowel(string);
// console.log(check);
// let check2= checkAllTheVowel(string2);
// console.log(check2);

// // brut force method
// function checkAllTheVowel(string){

//     let check1 = false; // --> a
//     let check2 = false; // --> e
//     let check3 = false; // --> i
//     let check4 = false; // --> o
//     let check5 = false; // --> u
//     if(string.search("a")>=0){
//         check1=true;
//     }
//     if(string.includes("e")){
//         check2=true;
//     }
//     if(string.search("i")>=0){
//         check3=true;
//     }
//     if(string.search("o")>=0){
//         check4=true;
//     }
//     if(string.search("u")>=0){
//         check5=true;
//     }

//     if(check1&&check2&&check3&&check4&&check5){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// // easy method

// function checkAllTheVowel(string){
//     let vowels = "aeiou";
//     for(let char of vowels){
//         let check = string.includes(char);
//         if(!check){
//             return false;
//         }
//     }
//     return true;
// }


// check if provided string is palindrome or not

// let string = "nayan";
// let string2= "ansh";


// let checkPalindromeString = (string) => {

    // let reverseString = string.split("");
    // reverseString = reverseString.reverse().join();

//     if (reverseString === string) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(checkPalindromeString(string));
// console.log(checkPalindromeString(string2));


// // check if provided string is pangram string or not

// let checkPangramString = (string)=>{
//     let alphabets = "";
//     for(let i=97;i<=122;i++){
//         alphabets = alphabets + String.fromCharCode(i);
//     }
//     for(let char of alphabets){
//         if(!string.includes(char)){
//             return false;
//         }
//     }
//     return true;
// }

// let string = "abcdefghijklmnopqrst";
// let string2 = "abcdefghijklmnopqrstuvwxyz";
// console.log(checkPangramString(string));
// console.log(checkPangramString(string2));


