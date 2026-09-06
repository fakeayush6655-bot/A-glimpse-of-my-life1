// ==========================================
//              LETTERS PAGE
// ==========================================

const cards = document.querySelectorAll(".letter-card");


// ==========================================
//          LETTER PAGE LINKS
// ==========================================

const letterPages = [
    "letter1.html",
    "letter2.html",
    "letter3.html",
    "letter4.html"
];


// ==========================================
//              CARD CLICK
// ==========================================

cards.forEach((card, index) => {

    card.addEventListener("click", () => {

        // Envelope opening effect
        card.classList.add("opening");

        // Golden transition
        const transition = document.createElement("div");

        transition.className = "letter-transition";

        document.body.appendChild(transition);


        // Start transition
        requestAnimationFrame(() => {

            transition.classList.add("active");

        });


        // Open corresponding letter
        setTimeout(() => {

            window.location.href =
                letterPages[index];

        }, 700);

    });

});