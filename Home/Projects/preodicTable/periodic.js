

for(let i = 0; i<50; i++){
    let div = document.createElement("div");
    div.innerHTML = `<div class="h-24 flex justify-center items-center font-semibold text-xl rounded-md bg-blue-600 ">Element${i+1}</div>`;
    div.setAttribute("data-num",i+1);
    document.querySelector(".eleContainer").appendChild(div) ;
}

document.querySelector(".eleContainer").addEventListener("click",(event)=>{
    // event.target
    let eleNum = event.target.parentElement.getAttribute("data-num");
    alert(
       `Element Number : ${eleNum}
Element Name : ${event.target.innerHTML}`
    )
})