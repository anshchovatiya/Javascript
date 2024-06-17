let year = prompt("Enter the year");

if((year%4===0&&year%100!=0)||(year%400===0)){
    console.log("The year is leap year");
}
else{
    console.log("The year is not leap year");
}