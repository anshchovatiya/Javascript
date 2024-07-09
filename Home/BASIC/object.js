// let person = { name:"ansh",age:18};

// // console.log(person.name);
// console.log(person["name"]);

// // console.log(person.age);
// // console.log(person["age"]);


// person.name = "nayan";
// // console.log(person.name)

// for(let x in person){
//     console.log(person[x]);
// }


// person.job = "web developer";
// console.log(person);
// console.log(person.job);

// // dynamic key in object
// let key = "name";
// let me = {
//     [key] : "ansh",
//     age : 18,
//     greet : function(){
//         console.log(`hello my name is ${this.name} and my age is ${this.age}`);
//     }
// }


// me.greet();


// for(let x in me){
//     console.log(me[x]);
// }


// let obj1 = { name:"ansh",age:18};
// let obj2 = obj1;
// // copy by reference  
// console.log(obj1==obj2);
// // console.log(obj1);
// // console.log(obj2);

// obj2.age = 20;
// console.log(obj1);
// console.log(obj2);



// let obj3 = { name:"ansh",age:18};
// // let obj4 = { name:"nayan",age:20};
// let obj4 = Object.assign({},obj3);
// // copy by value 
// // console.log(obj4);

// // obj4.age = 20;
// // console.log(obj3.age);
// console.log(obj3==obj4);


// let obj = { name:"ansh", age:18, salary:35000};
// let text = Object.entries(obj);
// console.log(text);
// let obj2 = Object.fromEntries(text);
// console.log(obj2);


// let text = Object.values(obj);
// console.log(text);
// let text = Object.keys(obj);
// console.log(text);


// "use strict";
// x = 8;
// console.log(x);