function cursur(){
    var main = document.querySelector("body");
    var move = document.querySelector("#cursor");

   main.addEventListener("mousemove", function(dets){
   move.style.left = dets.x + "px"
   move.style.top = dets.y + "px"
})
}


function lenis(){
    // Initialize Lenis
const lenis = new Lenis();

// Listen for the scroll event and log the event data
lenis.on('scroll', (e) => {
  console.log(e);
});

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

}
lenis();


Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 0.5)",
    duration: 1,
  });

  Shery.imageMasker("#open img" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "View",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

//   Shery.makeMagnet(".elem  " /* Element to target.*/, {
//     //Parameters are optional.
//     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
//     duration: 1,
//   });



function menubar(){
    let menubar = document.querySelector("#menu");
let part2 = document.querySelector("#part2");
let contacts = document.querySelector("#contact");
var tl = gsap.timeline();

menubar.addEventListener("click",function(){
     part2.style.display = "flex"
     menubar.style.display = "none";

     tl.from(" nav #part2 ",{
        y:-60,
        duration:0.8,
        delay:0.1,
        opacity:0,
    })
})

contacts.addEventListener("click",function(){
     part2.style.display = "none"
     menubar.style.display = "block"
})

}
menubar();


function elem(){
    let elem = document.querySelectorAll(".elem");

 elem.forEach(function(val){

    val.addEventListener("mouseenter", function(){
        val.childNodes[5].style.opacity = 1
         cursr.style.transform = "scale(0.8)"
    });
    
    val.addEventListener("mouseleave", function(){
        val.childNodes[5].style.opacity = 0
    });
    val.addEventListener("mousemove", function(dets){
        val.childNodes[5].style.left = dets.x+"px"
      //val.childNodes[3].style.top = dets.y+"px"

    })

    // console.log(val.childNodes[3])
})
}
elem()


function gsapAnn(){
    var tl = gsap.timeline();
tl.from(".page1 h1",{
    y:60,
    duration:0.5,
    // delay:0.2,
    opacity:0,
    stagger:0.5,
})

tl.from(".page1 h4",{
    y:30,
    duration:0.3,
    // delay:0.2,
    opacity:0,
})

tl.from(".page1  #second-btm ",{
    y:-30,
    duration:0.3,
    // delay:0.2,
    opacity:0,
})

tl.from("#footer-page1 ",{
    y:50,
    opacity:0
})

tl.to(".scroll",{
        transform:"translateX(-100%)",
        duration:13,
        repeat:-1,
        ease:"none",
})

gsap.from(".page3 #content, .pageimg, button",{
    scrollTrigger:{
        trigger:".page3",
        start:"top 50%",
        end:"top 0%",
        // markers:true,
    },
    opacity:0,
    stagger:0,
    duration:0.5
})

gsap.from(".page3 #page3-btm",{
    scrollTrigger:{
        trigger:".page3",
        start:"top 0%",
        end:"top 0%",
        // markers:true,
    },
    opacity:0,
    stagger:0,
    duration:0.5
})


}
gsapAnn()


//open page

function open(){
    var open = document.querySelector("#open");
var btn = document.querySelector("#button");
var page1 = document.querySelector(".page1");
var page2 = document.querySelector(".page2");
var page3 = document.querySelector(".page3");
var page1footer = document.querySelector("#footer-page1");
var lastfooter = document.querySelector("#lastfooter");
var imgboxes = document.querySelector(".imgboxes");
var scroll = document.querySelector(".scrollmain");
var logo = document.querySelector("#logo")

btn.addEventListener("click",function(){
    open.style.display="block"
    imgboxes.style.display="flex"
    page1.style.display="none"
    page2.style.display="none"
    page3.style.display="none"
    page1footer.style.display="none"
    scroll.style.display="none"
})

logo.addEventListener("click",function(){
    open.style.display="none"
    imgboxes.style.display="none"
    page1.style.display="block"
    page2.style.display="block"
    page3.style.display="block"
    page1footer.style.display="flex"
    scroll.style.display="flex"
})

}
open();



  