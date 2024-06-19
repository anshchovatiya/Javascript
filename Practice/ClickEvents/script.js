let greeting = document.getElementById("greeting");
console.log(greeting);
greeting.onclick =
    ()=>{
        alert("hello there");
    }
;
let greeting2 = document.getElementById("greeting2");
console.log(greeting2);
greeting2.ondblclick =
    ()=>{
        alert("hello there second time");
    }
;
let greeting3 = document.getElementById("greeting3");
console.log(greeting3);
greeting3.onmouseover =
    ()=>{
        alert("hello there second time");
    }
;


let greet = document.getElementById("greet");
greet.addEventListener('click',()=>{
    alert("this will activate on single click");
})
let greet2 = document.getElementById("greet2");
greet2.addEventListener('mouseover',()=>{
    alert("this will activate on single click");
})