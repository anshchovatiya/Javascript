

function* generatorFunction(){
    yield "hello";
    yield "my";
    yield "name"
    yield "is"
    return "ansh";
}

let fun = generatorFunction();

console.log(fun.next().value);
console.log(fun.next().value);
console.log(fun.next().value);
console.log(fun.next().value);
console.log(fun.next().value);