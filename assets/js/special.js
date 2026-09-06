// ==========================================
// SPECIAL PAGE
// ==========================================

const photo = document.querySelector(".photo-frame");
const quote = document.querySelector(".quote");

// Page Load Animation
window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 1s ease";
        document.body.style.opacity = "1";

    }, 100);

});

// Photo Reveal

photo.style.opacity = "0";
photo.style.transform = "scale(.8)";

setTimeout(() => {

    photo.style.transition = "all 1.2s ease";

    photo.style.opacity = "1";

    photo.style.transform = "scale(1)";

},600);


// Quote Animation

quote.style.opacity="0";
quote.style.transform="translateY(30px)";

setTimeout(()=>{

    quote.style.transition="all .8s ease";

    quote.style.opacity="1";

    quote.style.transform="translateY(0)";

},1500);


// Golden Glow Effect

setInterval(()=>{

    photo.animate([

        {

            boxShadow:"0 0 20px rgba(201,154,67,.25)"

        },

        {

            boxShadow:"0 0 40px rgba(240,216,157,.6)"

        },

        {

            boxShadow:"0 0 20px rgba(201,154,67,.25)"

        }

    ],{

        duration:2500

    });

},2600);


// Sparkle Effect

function createSparkle(){

    const sparkle=document.createElement("div");

    sparkle.innerHTML="✨";

    sparkle.style.position="fixed";

    sparkle.style.left=Math.random()*window.innerWidth+"px";

    sparkle.style.top=Math.random()*window.innerHeight+"px";

    sparkle.style.fontSize=(14+Math.random()*12)+"px";

    sparkle.style.opacity=".7";

    sparkle.style.pointerEvents="none";

    sparkle.style.transition="all 3s linear";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.style.transform="translateY(-120px)";

        sparkle.style.opacity="0";

    },50);

    setTimeout(()=>{

        sparkle.remove();

    },3000);

}

setInterval(createSparkle,1200);