

let animation = gsap.to(".content",{
    x : "-100%",
    repeat : -1,
    ease : "none",
    duration : 3,
})


document.querySelector(".marqueeContainer").addEventListener("mouseover",()=>{
    animation.pause();
})
document.querySelector(".marqueeContainer").addEventListener("mouseleave",()=>{
    animation.play();
})

// window.addEventListener("wheel",(event)=>{
//     if(event.deltaY>0){
//         gsap.to(".content",{
//             x : "-200%",
//             repeat : -1,
//             ease : "none",
//             duration : 4,
//         })

//         gsap.to(".content img",{
//             rotate :0,
//         })
//     }
//     else{
//         gsap.to(".content",{
//             transform : "translateX(0%)",
//             repeat : -1,
//             ease : "none",
//             duration : 4,
//         })
//         gsap.to(".content img",{
//             rotate : 180,
//         })
//     }
// })

