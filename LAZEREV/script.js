gsap.from(".homeTittle", {
  y: 80,
  x: 80,
  opacity: 0,
  stagger: 0.08,
});

document.querySelector(".circle").addEventListener("mouseover", () => {
  gsap.to(".circle", {
    scale: 0.7,
  });
});
document.querySelector(".circle").addEventListener("mouseleave", () => {
  gsap.to(".circle", {
    scale: 1,
  });
});

let tl  = gsap.timeline();

tl.to(".slider", {
  height: "175%",
  duration: 1,
});

tl.to(".navlist",{
    display : "block",
})

tl.from(".option span",{ 
//    opacity : 0,
   x : 500,
   duration : 4,
})


tl.pause();

document.querySelectorAll(".navbarText").forEach((current)=>{
    current.addEventListener("mouseover", () => {
        tl.play();
    });
})





document.querySelector(".slider").addEventListener("mouseleave", () => {
    tl.reverse();
});




