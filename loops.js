let n=0;

while(n<10){
    console.log(++n);
}


// sum of n numbers

let number = prompt("Enter your number");

let sum=0;
// let i=1;
// while(i<=number){
//  sum+=i;
//  i++;
// }

for(let i=1 ;i<=number;i++){
    sum+=i;
}

console.log(`the sum of first ${number} natural number is ${sum}`);