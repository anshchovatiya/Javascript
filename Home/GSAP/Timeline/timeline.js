// gsap.to("#box1", {
//     x: 1400,
//     duration: 2.5,
//     rotate: 360,
//     delay:1,
// })

// gsap.to("#box2", {
//     x: 1400,
//     duration: 2,
//     delay : 3.5,
//     rotate: 360,
//     backgroundColor: "green",

// })
// gsap.to("#box3", {
//     x: 1400,
//     duration: 2,
//     delay : 5.5,
//     rotate: 360,
//     borderRadius : "50%",

// })



// now tl is timeline so it will run synchronously

// let tl = gsap.timeline();

// tl.to("#box1",{
//     x: 1400,
//     duration: 2.5,
//     rotate: 360,
// })

// tl.to("#box2", {
//     x: 1400,
//     duration: 2,
//     rotate: 360,
//     backgroundColor: "green",
// });


// tl.to("#box3", {
//     x: 1400,
//     duration: 2,
//     rotate: 360,
//     borderRadius : "50%",

// })


let animationTimeline = gsap.timeline();


animationTimeline.from("h2",{
    opacity : 0,
    y : -30,    
    duration : 0.6,
    delay : 0.5
})
animationTimeline.from("div ul li",{
    opacity : 0,
    y : -30,    
    duration : 0.6,
    stagger : 0.3,
})
animationTimeline.from("h1",{
    opacity : 0,
    y : -30,    
    duration : 0.6,
    stagger : 0.3,
    scale : 0.2,
    color : "red"
})