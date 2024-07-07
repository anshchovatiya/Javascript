// function addDay(currentDate,AdditionalDays){
//     let currentDay = currentDate.getDate() + AdditionalDays;
//     currentDate.setDate(currentDay);
//     return currentDate;

// }


// let date = new Date("07-4-2024");

// let newDate =(addDay(date,10));
// console.log(newDate);

// function print(v){
//     console.log("hello",v);
// }

// let v = 8;
// setInterval(()=>print(v),3000);



function numOfArguments(){
    
    for(let x of arguments){
        console.log(x);
    }
}


numOfArguments(3,8,39,293,58,392,28,29);




// let check = 0;
// var once = function(fn) {
    
//     return function(...args){
//         if(check===0){
//             check++;
//             return "hello";
//         }
//         else{
//             return undefined;
//         }
//     }
// };

// let  calls = [[5,7,4],[2,3,6],[4,6,8]];
// let x = once(calls);
// console.log(x);
