// ==========================================
// Gallery JS
// ==========================================

const cards = document.querySelectorAll(".photo-card");
const specialBtn = document.getElementById("specialBtn");
const transition = document.querySelector(".page-transition");

// ------------------------------
// Fade Other Photos
// ------------------------------

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

// ------------------------------
// Photo Click Animation
// ------------------------------

cards.forEach(card => {

    card.addEventListener("click", () => {

        card.style.transform += " scale(1.03)";

        setTimeout(() => {

            card.style.transform = "";

        },200);

    });

});

// ------------------------------
// Special Button
// ------------------------------

specialBtn.addEventListener("click",()=>{

    transition.classList.add("active");

    setTimeout(()=>{

        window.location.href="questions.html";

    },700);

});

// ------------------------------
// Page Fade In
// ------------------------------

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

});