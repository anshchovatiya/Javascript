// import LocomotiveScroll from './node_modules/locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector("main"),
//     smooth: true,
// });

const navBarOptions = document.querySelector(".nav-options");
const navPlus = document.querySelector(".nav-plus")


document.querySelector(".nav-plus").addEventListener("click",()=>{


    if(navPlus.getAttribute("data-active")==="true"){
        
    }

    gsap.to(".nav-plus",{
        rotate : 45,
    })

    gsap.to(".nav-options",{
        right : 0,
    })
    
})
