import LocomotiveScroll from './node_modules/locomotive-scroll';



// LocomotiveScroll is constructor
const locomotiveScroll = new LocomotiveScroll({
    el : document.querySelector("main"),
    smooth : true,
});


console.log("scroll is working");