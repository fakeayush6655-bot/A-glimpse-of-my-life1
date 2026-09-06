/* ========================= */
/* MEMORY POPUP */
/* ========================= */

function openMemory(title, date, text) {

    const overlay =
        document.getElementById("memoryOverlay");

    const memoryTitle =
        document.getElementById("memoryTitle");

    const memoryDate =
        document.getElementById("memoryDate");

    const memoryText =
        document.getElementById("memoryText");


    memoryTitle.textContent = title;

    memoryDate.textContent = date;

    memoryText.textContent = text;


    overlay.classList.add("active");

}


/* ========================= */
/* CLOSE MEMORY */
/* ========================= */

function closeMemory() {

    const overlay =
        document.getElementById("memoryOverlay");

    overlay.classList.remove("active");

}


/* ========================= */
/* CLICK OUTSIDE */
/* ========================= */

document.addEventListener(
    "click",
    function(event) {

        const overlay =
            document.getElementById("memoryOverlay");

        const card =
            document.querySelector(".memory-card");


        if (
            event.target === overlay
        ) {

            closeMemory();

        }

    }


    
);


/* ========================= */
/* ESCAPE KEY */
/* ========================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeMemory();

        }

    }
);


/* ========================= */
/* SPECIAL CHAPTER */
/* ========================= */

function goToPage(page) {

    window.location.href = page;

}


/* ========================= */
/* PAGE LOAD */
/* ========================= */

window.addEventListener(
    "load",
    function() {

        document.body.classList.add(
            "page-loaded"
        );

    }
);


/* ========================= */
/* MOVING GOLDEN ROPE */
/* ========================= */

const ropeMain =
    document.querySelector(".rope-main");

const ropeGlow =
    document.querySelector(".rope-glow");

const ropeShadow =
    document.querySelector(".rope-shadow");

const ropeHighlight =
    document.querySelector(".rope-highlight");


if (
    ropeMain &&
    ropeGlow &&
    ropeShadow &&
    ropeHighlight
) {

    const height = 1000;


    function createRope(time) {

        const points = [];


        for (
            let y = 0;
            y <= height;
            y += 6
        ) {

            const progress =
                y / height;


            /* Main slow wave */

            const wave1 =
                Math.sin(
                    progress * 8 +
                    time * 0.00045
                ) * 7;


            /* Secondary natural movement */

            const wave2 =
                Math.sin(
                    progress * 17 -
                    time * 0.00028
                ) * 3;


            /* Tiny rope movement */

            const wave3 =
                Math.sin(
                    progress * 32 +
                    time * 0.00018
                ) * 1.5;


            const x =
                50 +
                wave1 +
                wave2 +
                wave3;


            points.push({
                x: x,
                y: y
            });

        }


        /* Build SVG path */

        let path = "";


        points.forEach(
            (point, index) => {

                if (index === 0) {

                    path =
                        `M ${point.x} ${point.y}`;

                } else {

                    const previous =
                        points[index - 1];


                    path +=
                        ` Q ${previous.x} ${previous.y} ${point.x} ${point.y}`;

                }

            }
        );


        /* Same path for all rope layers */

        ropeGlow.setAttribute(
            "d",
            path
        );

        ropeShadow.setAttribute(
            "d",
            path
        );

        ropeMain.setAttribute(
            "d",
            path
        );

        ropeHighlight.setAttribute(
            "d",
            path
        );


        requestAnimationFrame(
            createRope
        );

    }


    requestAnimationFrame(
        createRope
    );

}