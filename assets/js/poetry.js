// ==========================================
// MY POETRIES
// ==========================================

const cards = document.querySelectorAll(".poetry-card");
const specialCard = document.querySelector(".special-card");
const transition = document.querySelector(".page-transition");

// ==========================================
// PAGE FADE IN
// ==========================================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    requestAnimationFrame(() => {

        document.body.style.transition = "opacity .8s ease";
        document.body.style.opacity = "1";

    });

});

// ==========================================
// CARD HOVER EFFECT
// ==========================================

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        cards.forEach(c => {

            if (c !== card) {

                c.style.opacity = ".25";
                c.style.filter = "blur(3px)";

            }

        });

    });

    card.addEventListener("mouseleave", () => {

        cards.forEach(c => {

            c.style.opacity = "1";
            c.style.filter = "none";

        });

    });

});

// ==========================================
// CLICK ANIMATION
// ==========================================

cards.forEach(card => {

    card.addEventListener("click", function(e){

        e.preventDefault();

        const link = this.href;

        this.style.transform =
        "scale(.96)";

        transition.classList.add("active");

        setTimeout(()=>{

            window.location.href = link;

        },500);

    });

});

// ==========================================
// SPECIAL CARD
// ==========================================

specialCard.addEventListener("click",function(e){

    e.preventDefault();

    transition.classList.add("active");

    setTimeout(()=>{

        window.location.href=this.href;

    },600);

});

// ==========================================
// FLOATING GOLDEN SPARKLES
// ==========================================

function sparkle(){

    const star=document.createElement("span");

    star.innerHTML="✨";

    star.style.position="fixed";

    star.style.left=Math.random()*window.innerWidth+"px";

    star.style.top=window.innerHeight+"px";

    star.style.pointerEvents="none";

    star.style.opacity=".55";

    star.style.fontSize=
    (12+Math.random()*12)+"px";

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