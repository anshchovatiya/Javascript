let Student = {
    name : "ansh",
    age : 18,
    grades : {
        maths : 98,
        science : 88,
        history : 92,
    }
}


// check if grades Object exits in student object 


let addComputerSubject = (obj) => {
    let keys =  Object.keys(obj);
    
if(keys.includes("grades")){
    console.log("This object do include grades object in it");
    obj.grades.computer = 98;

}
else{
    console.log("This object do not include grade object in It");
}

};

addComputerSubject(Student);
console.log(Student);