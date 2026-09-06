// ============================================
// SPECIAL POETRY PAGE
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

        document.body.style.transition = "opacity .9s ease";
        document.body.style.opacity = "1";

    });

});

// ============================================
// BACK BUTTON
// ============================================

backBtn.addEventListener("click", function(e){

    e.preventDefault();

    transition.classList.add("active");

    const link = this.href;

    setTimeout(()=>{

        window.location.href = link;

    },600);

});

// ============================================
// SLOW TYPEWRITER
// ============================================

const paragraphs = poem.querySelectorAll("p");

paragraphs.forEach((p,index)=>{

    const original = p.textContent;

    p.textContent = "";

    setTimeout(()=>{

        let i = 0;

        const typing = setInterval(()=>{

            p.textContent += original.charAt(i);

            i++;

            if(i >= original.length){

                clearInterval(typing);

            }

        },35);

    },index*1800);

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

    star.style.fontSize=
    (10+Math.random()*16)+"px";

    star.style.opacity=".7";

    star.style.transition=
    "transform 6s linear, opacity 6s";

    document.body.appendChild(star);

    requestAnimationFrame(()=>{

        star.style.transform=
        `translateY(-${window.innerHeight+200}px)
         rotate(540deg)`;

        star.style.opacity="0";

    });

    setTimeout(()=>{

        star.remove();

    },6000);

}

setInterval(sparkle,1200);

// ============================================
// IMAGE FLOAT
// ============================================

const frame=document.querySelector(".image-frame");

setInterval(()=>{

    frame.animate([

        {
            transform:"translateY(0px)"
        },

        {
            transform:"translateY(-10px)"
        },

        {
            transform:"translateY(0px)"
        }

    ],{

        duration:4500

    });

},4600);

// ============================================
// GOLDEN GLOW PULSE
// ============================================

setInterval(()=>{

    frame.animate([

        {
            boxShadow:"0 0 25px rgba(212,175,55,.20)"
        },

        {
            boxShadow:"0 0 60px rgba(212,175,55,.45)"
        },

        {
            boxShadow:"0 0 25px rgba(212,175,55,.20)"
        }

    ],{

        duration:3000

    });

},3200);