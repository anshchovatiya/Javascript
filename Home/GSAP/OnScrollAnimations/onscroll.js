gsap.from(".innerbox1",{
    opacity : 0,
    duration : 1,
    scale : 0.5,
    x:500,
    rotate:360,
})
gsap.from(".innerbox2",{
    opacity : 0,
    duration : 1,
    scale : 0.5,
    x:-500,
    rotate:360,
    scrollTrigger : {
        trigger:".innerbox2",
        markers : true,
        start : "top 80%",
        end : "top 40%",
        scrub : 5,
        // pin:true, 
    },
})