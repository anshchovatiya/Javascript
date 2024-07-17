// const scroll = new LocomotiveScroll({
//     el: document.querySelector('main'),
//     smooth: true
// });


gsap.to(".text",{
    transform : "translateX(-150%)",
    scrollTrigger : {
        tirgger : "#box2",
    }
})