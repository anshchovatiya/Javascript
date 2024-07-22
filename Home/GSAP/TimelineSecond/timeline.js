

let timeline = gsap.timeline();


timeline.from("#menubar",{
    x: 500,
    duration : 0.5,
});

timeline.from("#menubar ul li",{
    x : 200,
    duration :0.5,
    opacity : 0,
    stagger : 0.3,
})

timeline.from("#menubar ul i",{
    opacity : 0,
})


timeline.pause();


document.querySelector(".fa-bars").addEventListener("click",()=>{
    timeline.play();
})

document.querySelector(".fa-xmark").addEventListener("click",()=>{
    timeline.reverse();
})