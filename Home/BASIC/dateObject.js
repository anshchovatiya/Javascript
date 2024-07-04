// let today = new Date();
// console.log(today);

// let time = new Date("2024-07-03T12:56:14.842Z");
// // it will show detailed output on the browser 
// console.log(time);

// let tomorrow = new Date(2024,4);
// console.log(tomorrow);

// // year , month , day , hour , minute, second
// let mycustomtime = new Date(2004,8,30,11,35,24);
// console.log(mycustomtime);


// // it returns milliseconds 
// let millisecond = new Date().getTime();
// console.log(millisecond);

// // it returns current time 
// let currentTime = new Date(millisecond);
// console.log(currentTime);

// // different way to create date object
// let string = new Date("2004-9-30");
// console.log(string);
// let string2 = new Date("30 September,2004");
// console.log(string2);

let date = new Date();
console.log(date);

// // it returns year in a date 
// console.log(date.getFullYear());

// it returns number of month that is counted from 0 to 11 --> example : january-0 february-1 march-3
// console.log(date.getMonth());

// // it returns day number of the month
// console.log(date.getDate());

// // it returns  day number of the month
// console.log(date.getDay());


// // it returns hour of time in date object 
// console.log(date.getHours());

// // it returns minutes of time in date object 
// console.log(date.getMinutes());

// // it returns second of time in date object 
// console.log(date.getSeconds());

// // it returns millisecond of time in date object 
// console.log(date.getMilliseconds());

// // it returns millisecond of time in date object 
// console.log(date.getTime());


// // set year in a date 
// date.setFullYear(1999);
// console.log(date);

//  // set Month in a date 
// date.setMonth(3);
// console.log(date);

// // set the day number of the month
// date.setDate(18);
// console.log(date);

// // set the hours in time 
// date.setHours(23);
// console.log(date);

// // set the milliseconds in time 
// date.setMilliseconds(500);
// console.log(date.getMilliseconds());

// // set the Minutes in time 
// date.setMinutes(59);
// console.log(date);

// // set the seconds in time 
// date.setSeconds(59);
// console.log(date);

// // set the Time in milliseconds 
// date.setTime(593843);
// console.log(date.getTime());

// // returns readable formate of date and time
// let new1 = date.toLocaleString();
// console.log(new1);

// // returns readable formate of date 
// let new2 = date.toLocaleDateString();
// console.log(new2);
// // returns readable formate of time 
// let new3 = date.toLocaleTimeString();
// console.log(new3);