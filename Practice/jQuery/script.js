
// // syntax 
// // $("selector").action();

// $(this) --> when there multiple element with same selector it selected current element which is performing the task
// $(document).ready(function) --> It invokes function only after all the DOM content(html and css) is loaded
// $(function) --> It is same as ready function but it has smaller syntax
// $("selector").click(function) --> It will invoke function when you click on selector element
// $("selector").dblclick(function) --> It will invoke function when you double click on the selected element
// $("selector").hide(milliseconds,function) --> It hide the selected element in given milliseconds and then execute the given the function
// $("selector").show() --> It show the element in given milliseconds and then execute the given function
// $("selector").mouseenter() --> It will invoke function when mouse enter the selected element
// $("selector").mouseleave() --> It will invoke function when mouse leave the selected element
// $("selector").mousedown() --> It will invoke function when mouse button is clicked on the element
// $("selector").mouseup() --> It will invoke function when  clicked mouse button of element is released
// $("selector").hover(function1,function2) --> It will invoke function when you hover on the selected element function1 is invoked when mouse enter the element is function2 active when mouse leave the element
// $("selector").on(event1:function,event2:function) --> when you want to apply multiple event lister in form of object you can use on method
// $("selector").toggle(milliseconds) --> toggle between show and hide state


// $("selector").fadeIn(milliseconds) --> hide selected element in given milliseconds with fade In effect 
// $("selector").fadeOut(milliseconds) --> show selected element in given milliseconds with fade In effect 
// $("selector").fadeToggle(milliseconds) --> toggle between hide and show state in given milliseconds with fade in and out effect 
// $("selector").slideIn(milliseconds) --> give sliding down effect
// $("selector").slideUp(milliseconds) --> give sliding up effect
// $("selector").slideToggle(milliseconds) --> toggle between slideUp and slideDown
// $("selector").animate(properties,milliseconds) --> It is used to animate the selected element in given milliseconds
// $("selector").stop() --> It is used to stop the animation


// $("selector").text("replacedText") --> change the inner text of the element if text is given or return the text of the element
// $("selector").html("replacedHtml") --> change the inner html of the element if info is given or return the inner html of the element
// $("selector").val() --> change or get value of input and textarea
// $("selector").empty() --> remove content of the element
// $("selector").remove() --> remove entire element
// $("selector").addClass("newClass") --> add new Class to the element
// $("selector").removeClass("newClass") --> add new Class to the element
// $("selector").toggleClass("newClass") --> add or remove class
// $("selector").css("property","value") --> change css of the element 

// $(document).ready(

//     $("p:nth-child(odd)").click(function(){
//         console.log("clicked");
//     })



//     // $("main p").click(function () {
//     //     $(this).hide();
//     // })
// );


// console.log($);
// console.log(jQuery);


$(function () {

    // $("p:nth-child(odd)").dblclick(function () {
    //     console.log("clicked");
    // });

    // $("p").click(()=>{
    // console.log("button clicked");
    // $("p").hide();
    //     $(this).hide();
    // });

    // $("p:nth-child(4)").hide();

    // $("p:nth-child(3)").click(
    //     function(){
    //         $("p:nth-child(4)").show();
    //     }
    // );


    // $("p").mouseenter(()=>{
    //     console.log("mouse entered the element");
    // });

    // $("p").mouseleave(()=>{
    //     console.log("mouse leaved the element");
    // });

    // $("p").mousedown(()=>{
    //     console.log("you clicked the mouse button");
    // });

    // $("p").mouseup(()=>{
    //     console.log("you released the mouse button");
    // });

    // $("p").hover(function(){
    //     console.log("you hovered on the element");
    // })

    // $("p").hover(function(){
    //     console.log("mouse entered");
    // },function(){
    //     console.log("mouse leaved");
    // })


    // $("p").on({click:function(){console.log("click event activated")},mouseover:function(){console.log("mouseover event activated")}});


    // $("p").hide(2000,()=>{
    //     console.log("element has been hidden");
    // });

    // $("p").show(2000,()=>{
    //     console.log("element has been shown");
    // });

    // $("button").click(function(){
    //     $("p").toggle(1000,function(){
    //         console.log("toggled");
    //     });
    // });


    // $("button").click(function(){
    // $("p").fadeOut(1000,function(){
    //     console.log("fadeout");
    // });
    // $("p").fadeIn(1000,function(){
    //     console.log("fadein");
    // });
    // $("p").fadeToggle(1000,function(){
    //     console.log("fadein");
    // });
    // $("p").fadeTo(1000);
    // });

    $("button").click(
        function () {
            // $(".para").slideUp(2000);
            // $(".para").slideDown(2000);
            // $(".para").slideToggle(2000);
        }
    );


    // Animate function in jQuery
    // $(".para").animate({
    //     // opacity  : 0
    //     height : '300px',
    //     width : "50%",
    // },12000);
    // $("button").click(function(){
    //     $(".para").stop();
    // })


    // $(".para").text();
    // $(".para").text("new text");
    // $(".para").html();
    // $(".para").html("<button>this is new button</button>");


    // $("button").click(function(){
    //     console.log($("#review").val("this is new text"));
    // });

    // $(".para").empty();
    // $(".para").remove();
    // $(".para").addClass("custom");
    // $(".para").removeClass("custom");

    // $("button").click(function(){
    //     $(".para").toggleClass("active");
    // });


    // $(".para").css("background-color","yellow");
    // console.log($(".para").css("background-color")); 

});