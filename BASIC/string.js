
var name;
name = "ansh chovatiya";

// this will print ansh chovatiya
console.log(name);

// this will print nayan chovatiya and value of variable name is updated
name = "nayan chovatiya";
console.log(name);

console.log(name[0], name[1], name[2], name[3], name[4]);

// this will print length of the string 
console.log(name.length);

// n a y a n   c h o v a  t  i  y  a
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14

// last index = length - 1
// this will print last character of the string 
console.log(name[name.length - 1]);


let myname = "   ansh   ";
console.log(myname.length);


// BigInt()      --> it can store really big integer values 
// trim()        --> It will remove all the blank spaces from a string and return new string 
// sli()         --> It will reutrn sliced string
// toUpperCase() --> convert string into UpperCase
// toLowerCase() --> convert string into LowerCase


myname = myname.trim();
console.log(myname.length);

console.log(myname.toUpperCase());
myname = "ANSH";
console.log(myname.toLowerCase());


let sli="anshchovatiya";

myname = sli.slice(0,7);
console.log(myname);


let number = 33;
// it will convert number into string 
console.log(typeof(number));
number = 33 + "";
console.log(typeof(number));

// it will convert string into number
number=+"33";
console.log(typeof(number));


let string1 = "ansh";
let string2 = "chovatiya";
// combine two strings 
let Full_Name = string1 + " " +string2;
console.log(Full_Name);


let number2 = BigInt(38358585548548593493483943849365656585345343);
let number3 = 38358585548548593493483943849365656585345343n;
let ans = number2 + number3;


console.log(number2);
console.log(ans);