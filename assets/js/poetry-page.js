// ============================================
// POETRY PAGE
// ============================================

const transition = document.querySelector(".page-transition");
const backBtn = document.querySelector(".back-btn");
const poem = document.querySelector(".poem-text");

// ============================================
// PAGE FADE IN
// ============================================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    requestAnimationFrame(() => {

        document.body.style.transition = "opacity .8s ease";
        document.body.style.opacity = "1";

    });

});

// ============================================
// BACK BUTTON TRANSITION
// ============================================

backBtn.addEventListener("click", function(e){

    e.preventDefault();

    transition.classList.add("active");

    const link = this.href;

    setTimeout(()=>{

        window.location.href = link;

    },500);

});

// ============================================
// TYPEWRITER EFFECT
// ============================================

const paragraphs = poem.querySelectorAll("p");

paragraphs.forEach((p,index)=>{

    const original = p.innerHTML;

    p.innerHTML = "";

    setTimeout(()=>{

        let i = 0;

        const typing = setInterval(()=>{

            p.innerHTML += original.charAt(i);

            i++;

            if(i >= original.length){

                clearInterval(typing);

            }

        },18);

    },index*1200);

});

// ============================================
// GOLDEN SPARKLES
// ============================================

function sparkle(){

    const star=document.createElement("span");

    star.innerHTML="✨";

    star.style.position="fixed";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top=window.innerHeight+"px";

    star.style.pointerEvents="none";

    star.style.opacity=".55";

    star.style.fontSize=
    (12+Math.random()*10)+"px";

    star.style.transition=
    "transform 5s linear, opacity 5s";

    document.body.appendChild(star);

    requestAnimationFrame(()=>{

        star.style.transform=
        `translateY(-${window.innerHeight+150}px)
         rotate(360deg)`;

        star.style.opacity="0";

    });

    setTimeout(()=>{

        star.remove();

    },5000);

}

setInterval(sparkle,1800);

// ============================================
// IMAGE FLOAT
// ============================================

const frame = document.querySelector(".image-frame");

setInterval(()=>{

    frame.animate([

        {
            transform:"translateY(0px)"
        },

        {
            transform:"translateY(-8px)"
        },

        {
            transform:"translateY(0px)"
        }

    ],{

        duration:3500

    });

},3600);