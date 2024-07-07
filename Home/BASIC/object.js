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

// dynamic key in object
let key = "name";
let me = {
    [key] : "ansh",
    age : 18,
    greet : function(){
        console.log(`hello my name is ${this.name} and my age is ${this.age}`);
    }
}


me.greet();


for(let x in me){
    console.log(me[x]);
}
