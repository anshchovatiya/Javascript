let obj1 = { name: "ansh", age: 38, salary: 38000 };
let obj2 = { name: "ansh", salary: 38000, age: 3 };



// const Compare = (o1, o2) => {

// let obj1Array = Object.entries(o1);
// let obj2Array = Object.entries(o2);

//     for(let current of obj1Array){
//         let string = JSON.stringify(current);
//         let obj2String = JSON.stringify(obj2Array);
//         if(!obj2String.includes(string)){
//           return false;
//         }
//     }
//     return true;
// }

// this method do not work accurate 
// const Compare = (o1,o2)=>{
//     let o2String = JSON.stringify(o2);
//     for(let current in o1){
//         let key = current;
//         let value = o1[key];
//         if(!(o2String.includes(key)&&o2String.includes(value))){
//            return false;
//         }
//     }
//     return true;
// }

console.log(Compare(obj1, obj2));
