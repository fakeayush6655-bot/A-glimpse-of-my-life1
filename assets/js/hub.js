// ================================
// Elements
// ================================

const cards = document.querySelectorAll(".card");

const needle = document.querySelector(".needle");

const compass = document.querySelector(".compass");

const wrapper = document.querySelector(".compass-wrapper");

const transition = document.querySelector(".page-transition");


// ================================
// Rotate Needle
// ================================

cards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        let angle=card.dataset.angle;

        needle.style.transform=
        `translate(-50%,-90%) rotate(${angle}deg)`;

        wrapper.classList.add("active");

        compass.classList.add("active");

    });

});


// ================================
// Reset
// ================================

document.querySelector(".menu")

.addEventListener("mouseleave",()=>{

    needle.style.transform=
    "translate(-50%,-90%) rotate(0deg)";

    wrapper.classList.remove("active");

    compass.classList.remove("active");

});


// ================================
// Page Transition
// ================================

cards.forEach(card=>{

    card.addEventListener("click",function(e){

        e.preventDefault();

        transition.classList.add("active");

        let link=this.href;

        setTimeout(()=>{

            window.location=link;

        },700);

    });

});


// ================================
// Floating Compass
// ================================

let t=0;

setInterval(()=>{

    t+=0.03;

    wrapper.style.marginTop=
    Math.sin(t)*5+"px";

},30);



function openTimeline() {
    window.location.href = "timeline.html";
}