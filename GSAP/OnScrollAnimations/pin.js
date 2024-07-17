// const scroll = new LocomotiveScroll({
//     el: document.querySelector('main'),
//     smooth: true
// });


gsap.to(".heading",{
    transform : "translateX(-83%)",    
    scrollTrigger : {
        trigger : "#box2",
        // markers : true,
        scroll : "body",    
        pin : true ,
        start : "top 0%",
        end : "top -100%",
        scrub  : 1,
    }
})