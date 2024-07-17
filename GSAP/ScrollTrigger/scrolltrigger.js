gsap.from(".innerbox1", {
    scale: 0,
    duration: 2,
    delay: 1,
    rotate: 360,

})
gsap.from(".innerbox2", {
    scale: 0,
    duration: 2,
    rotate: 360,
    scrollTrigger : {
        trigger : ".innerbox2",
        scroller : "body",
        markers : true,
       start : "top 80%"
    }
    
})



gsap.from(".innerbox3", {
    scrollTrigger: ".innnerbox3",
    scale: 0,
    duration: 2,
    rotate: 360,
    scrollTrigger : {
        trigger : ".innerbox3",
        scroller : "body",
        markers : true,
       start : "top 80%",
       end : "top 20%"
    }
});