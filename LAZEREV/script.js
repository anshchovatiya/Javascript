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
  duration: 0.3,
});

tl.to(".navlist",{
    display : "block",
})

  // tl.from(".option span",{ 
  //    opacity : 0,
  //    y : 80,
  //    duration : 0.5,
  //    stagger : 0.3  
  // })

tl.pause(); 



document.querySelector(".navList").addEventListener("mouseover",()=>{
  tl.play();
})
document.querySelector(".navList").addEventListener("mouseleave",()=>{
  tl.reverse();
  
})


