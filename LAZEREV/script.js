

gsap.from(".homeTittle",{
    y : 80,
    opacity : 0,
    stagger : 0.08,
})

document.querySelector(".circle").addEventListener("mouseover",()=>{
    gsap.to(".circle",{
        scale : 0.70,
    })
})
document.querySelector(".circle").addEventListener("mouseleave",()=>{
    gsap.to(".circle",{
        scale : 1,
    })
})