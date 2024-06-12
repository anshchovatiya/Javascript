let number;
do{
    number = prompt("Enter the positive number");

}while(isNaN(number)|| number<0);
console.log("you entered", number);