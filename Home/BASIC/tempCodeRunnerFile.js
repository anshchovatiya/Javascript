let person = { name:"ansh",age:18};

// console.log(person.name);
console.log(person["name"]);

// console.log(person.age);
// console.log(person["age"]);


person.name = "nayan";
// console.log(person.name)

for(let x in person){
    console.log(person[x]);
}


person.job = "web developer";
console.log(person);
console.log(person.job);
