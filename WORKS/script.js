// import LocomotiveScroll from './node_modules/locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector("main"),
//     smooth: true,
// });

const navBarOptions = document.querySelector(".nav-options");
const navPlus = document.querySelector(".nav-plus")
const navBarTimeline = gsap.timeline();

navBarTimeline.to(".nav-plus", {    
    rotate: 0,
},"nav")

navBarTimeline.to(".nav-options", {
    right: "0",
    ease: "power1.out",
},"nav")

navBarTimeline.from(".nav-options .option",{
    x : 80,
    stagger : -0.3,
    ease: "power1.out",
    duration : 0.7,
    opacity : 0,
},"-=0.4")

navBarTimeline.pause();

document.querySelector(".nav-plus").addEventListener("click", () => {

    if (navPlus.getAttribute("data-active") === "false") {
        navPlus.setAttribute("data-active", "true");
        navBarTimeline.play();

    }
    else if (navPlus.getAttribute("data-active") === "true") {
        navPlus.setAttribute("data-active", "false")
       navBarTimeline.reverse();
    }
})
