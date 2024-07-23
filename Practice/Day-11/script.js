
// let student = "Ansh";

// let ProcessAdmission =( (name) => {
//    let ans = new Promise((resolve,rejected) => {
//         setTimeout(()=>{
//             let check = Math.random() > 0.4;
//             if(check){
//                 // this value will be thrown if promise is resolved
//                 resolve(`your admission is confirmed ${name}`)
//             }
//             else{
//                 // this value will be thrown if promise is rejected
//                 rejected(`your admission is rejected ${name}`)
//             }
//         },2000)
//     });
//     return ans;
// });

// // then will catch value if matter is resolved
// // catch will catch value if matter is rejected
// // finally will activate if matter is settled
// ProcessAdmission(student).then((ans)=>{console.log(`Result : ${ans}`)})
//                 .catch((error)=>{`Result : ${error}`})
//                 .finally(()=>{console.log("Session completed")});



// Methods 


let promise1 = new Promise((resolved, reject) => {
    setTimeout(() => {
        resolved("The promise1 is resolved");
    }, 1000);
})

let promise2 = new Promise((resolved, reject) => {
    setTimeout(() => {
        // resolved("The promise2 is resolved");
        reject("The promise2 is not resolved");
    }, 2000);
})
let promise3 = new Promise((resolved, reject) => {
    setTimeout(() => {
        resolved("The promise3 is resolved");
    }, 3000);
})


// it will wait for all promises to be completed successfully,reject state will throw and error and it will ignore resolved promises
Promise.all([promise1,promise2,promise3]).then((ans)=>{console.log(`Answer : ${ans}`)}).catch((error) => {console.log(`Error : ${error}`)})

// it will wait for all promises to be completed regardless success or failure and return outcome of each promise in form of and array
Promise.allSettled([promise1,promise2,promise3]).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)})

// it used when you want to find out which promised will be settled first out of all promised in the arguments
Promise.race([promise1,promise2,promise3]).then((res)=>{console.log(res)}).catch((error)=>{console.log(error)});




// // setTimeout(function,miliseconds);


// function greet(){
//     console.log("hello world");
// }

// let id = setTimeout(()=>{
//     console.log("hello world");
// },4 * 1000);

// let v =5 ;

// if(v=0){

//     clearTimeout(id);
// }


// let id = setInterval(()=>{
//     console.log(++v);
//     if(v>10){
//         clearInterval(id);
//     }
// },1000);
// let id2 = setInterval(()=>{
//     console.log(++v);
// },1000);

// console.log("id : ",id);
// console.log("id : ",id2);

let pro1 = new Promise((resolve,reject)=>{
    // resolve("the promise is resolved");
    reject("the promise is rejected");
})


pro1.then((arg1)=>{console.log(arg1)}).catch((err)=>{console.warn(err)}).finally(()=>{console.log("this is finally");});


pro1.then().catch().finally();

