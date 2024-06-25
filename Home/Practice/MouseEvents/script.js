let box = document.getElementById("box");
let ChangeButton = document.getElementById("Change-button");



ChangeButton.onmouseover = ()=>{
    box.classList='h-[400px] w-[400px] bg-blue-700 rounded-full translate-x-[600px] duration-700 bg-yellow-500';
}
ChangeButton.onmouseout = ()=>{
    box.classList='h-[400px] w-[400px] bg-blue-700 rounded-xl translate-x-0 duration-700';
}
ChangeButton.onclick = ()=>{
    box.classList='h-[400px] w-[400px] bg-blue-700 rounded-xl translate-x-[-500px] duration-700';
}
ChangeButton.ondblclick = ()=>{
    box.classList='h-[400px] w-[400px] bg-blue-700 rounded-xl translate-x-[-500px] scale-125 duration-700';
}

// it work after you click the element 
ChangeButton.onmouseup = ()=>{
   ChangeButton.classList.add("ball");
}