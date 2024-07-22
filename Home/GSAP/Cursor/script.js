const main = document.querySelector("#main");
const cursor = document.querySelector("#cursor");
const imgDiv = document.querySelector(".image");


main.addEventListener("mousemove",(event)=>{
    gsap.to(cursor,{
        x : event.x,
        y : event.y,
        transform : "translateX(-50%,-50%)",
    })
})

document.querySelector(".image").addEventListener("mouseenter",()=>{
    cursor.innerHTML = "view more"
    gsap.to(cursor,{
        backgroundColor : "green",
        scale : 4,  
    })
})
document.querySelector(".image").addEventListener("mouseout",()=>{
      cursor.innerHTML = ""
    gsap.to(cursor,{
        scale : 1,  
        backgroundColor : "#FFB400",
    })
})