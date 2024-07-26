const out  = document.querySelectorAll(".Out");

out.forEach((current)=>{
    current.addEventListener("click",()=>{
        // document.getElementById("output").innerHTML  = current.innerHTML;
        console.log(current.innerHTML);
    })
})