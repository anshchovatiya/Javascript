let number= Math.trunc(Math.random()*101);

let input;
let count = 0;

do{
    input = prompt("Enter your guess");
    count++;
    if(input==number){
        console.log(`your guess is right and it took you ${count} attempts`);
        break;
    }
    else if(input<number){
        console.log("your guess is too low");
    }
    else if(input>number){
        console.log("your guess is too high");
    }
}while(input!=number);
