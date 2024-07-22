// const scroll = new LocomotiveScroll({
//     el: document.querySelector('main'),
//     smooth: true
// });


gsap.to(".heading",{
    transform : "translateX(calc(-100% + 100vw))",    
    scrollTrigger : {
        trigger : "#box2",
        scrub : 5,
        start : "top 0%",
        end : "top -150%",
        pin : true,
        scroller : "body",
    }
})


// gsap.to("#box2",{
//     transform : "translateX(calc(-100% + 100vw))",    
//     scrollTrigger : {
//         trigger : "#box2",
//         scrub : 5,
//         start : "top 0%",
//         end : "top -100%",
//         pin : true,
//     }
// })



