// ==========================================
//              LITTLE THINGS
//              COMPLETE JS
// ==========================================


// ==========================================
//              ELEMENTS
// ==========================================

const enterBtn =
    document.querySelector(".enter-btn");

const introScreen =
    document.querySelector(".intro-screen");

const starWorld =
    document.querySelector(".star-world");

const starContainer =
    document.querySelector(".star-container");

const memoryOverlay =
    document.querySelector(".memory-overlay");

const memoryWindow =
    document.querySelector(".memory-window");

const memoryMedia =
    document.querySelector(".memory-media");

const memoryTitle =
    document.querySelector(".memory-title");

const memoryText =
    document.querySelector(".memory-text");

const closeMemory =
    document.querySelector(".close-memory");

const collectedCounter =
    document.getElementById("collected");

const finalMessage =
    document.querySelector(".final-message");


// ==========================================
//              SETTINGS
// ==========================================

const TOTAL_STARS = 8;

let collectedStars = 0;

let gameStarted = false;


// ==========================================
//          LITTLE THINGS DATA
// ==========================================

const littleThings = [

    {
        title: "Your Smile",

        media:
        "assets/images/Folder 4/little1.png",

        text:
        "That smile that somehow makes everything feel a little lighter.",

        video: false

    },


    {
        title: "Your Eyes",

        media:
        "assets/images/Folder 4/little2.png",

        text:
        "Your eyes have a way of saying things words never could.",

        video: false

    },


    {
        title: "Your Laugh",

        media:
        "assets/images/Folder 4/little3.png",

        text:
        "That laugh... the kind I could listen to a little longer.",

        video: false

    },


    {
        title: "Little Habits",

        media:
        "assets/images/Folder 4/little4.png",

        text:
        "Those tiny things you do without noticing — somehow, I notice.",

        video: false

    },


    {
        title: "Your Expressions",

        media:
        "assets/images/Folder 4/little5.png",

        text:
        "The little expressions you make without even realizing how cute they are.",

        video: false

    },


    {
        title: "Your Voice",

        media:
        "assets/images/Folder 4/little6.png",

        text:
        "Some voices are heard. Yours somehow stays.",

        video: false

    },


    {
        title: "You, As You Are",

        media:
        "assets/images/Folder 4/little7.png",

        text:
        "Not one particular thing... just you, being you.",

        video: false

    },


    {
        title: "The Way You Exist",

        media:
        "assets/images/Folder 4/little8.mp4",

        text:
        "Maybe my favourite little thing is simply having you to admire.",

        video: true

    }

];


// ==========================================
//              ENTER
// ==========================================

enterBtn.addEventListener("click", startLittleThings);


function startLittleThings(){

    // Prevent starting twice
    if(gameStarted){

        return;

    }

    gameStarted = true;


    // Hide intro
    introScreen.classList.add("hide");


    // Show star world
    setTimeout(() => {

        starWorld.classList.add("active");

    }, 400);


    // Golden burst
    setTimeout(() => {

        starWorld.classList.add("burst");

    }, 600);


    // Create stars
    setTimeout(() => {

        createStars();

    }, 1100);

}


// ==========================================
//              CREATE STARS
// ==========================================

function createStars(){

    // Clear old stars just in case
    starContainer.innerHTML = "";


    for(let i = 0; i < TOTAL_STARS; i++){

        const star =
            document.createElement("div");


        // Main class
        star.className = "star";


        // Save which memory belongs to it
        star.dataset.index = i;


        // ==================================
        // RANDOM SIZE
        // ==================================

        const randomSize =
            Math.random();

        if(randomSize < 0.30){

            star.classList.add("small");

        }

        else if(randomSize > 0.75){

            star.classList.add("large");

        }


        // ==================================
        // RANDOM HORIZONTAL POSITION
        // ==================================

        const leftPosition =
            Math.random() * 92 + 4;

        star.style.left =
            `${leftPosition}%`;


        // ==================================
        // RANDOM FALL SPEED
        // ==================================

        const duration =
            24 + Math.random() * 14;

        star.style.setProperty(
            "--duration",
            `${duration}s`
        );


        // ==================================
        // RANDOM DELAY
        // ==================================

        const delay =
            Math.random() * 7;

        star.style.setProperty(
            "--delay",
            `${delay}s`
        );


        // ==================================
        // POINTER CLICK
        // ==================================

        star.addEventListener(
            "click",
            function(event){

                event.preventDefault();

                event.stopPropagation();


                // Already collected?
                if(
                    star.classList.contains(
                        "collected"
                    )
                ){

                    return;

                }


                // Get memory number
                const index =
                    Number(
                        star.dataset.index
                    );


                // Safety check
                if(
                    !littleThings[index]
                ){

                    return;

                }


                // Mark collected
                star.classList.add(
                    "collected"
                );


                // Stop its movement
                star.style.animation =
                    "none";


                // Increase counter
                collectedStars++;


                if(collectedCounter){

                    collectedCounter.textContent =
                        collectedStars;

                }


                // Open memory
                openMemory(index);


                // Check if all collected
                if(
                    collectedStars ===
                    TOTAL_STARS
                ){

                    setTimeout(() => {

                        showFinalMessage();

                    }, 1200);

                }

            }
        );


        // ==================================
        // ADD STAR TO PAGE
        // ==================================

        starContainer.appendChild(star);

    }

}


// ==========================================
//              OPEN MEMORY
// ==========================================

function openMemory(index){

    const item =
        littleThings[index];


    if(!item){

        return;

    }


    // Clear previous media
    memoryMedia.innerHTML = "";


    // ==================================
    //              VIDEO
    // ==================================

    if(item.video){

        const video =
            document.createElement("video");


        video.src =
            item.media;

        video.controls =
            true;

        video.autoplay =
            true;

        video.loop =
            true;

        video.muted =
            true;

        video.playsInline =
            true;


        memoryMedia.appendChild(
            video
        );


        // Try autoplay
        video.play().catch(() => {});

    }


    // ==================================
    //              IMAGE
    // ==================================

    else{

        const image =
            document.createElement("img");


        image.src =
            item.media;

        image.alt =
            item.title;


        memoryMedia.appendChild(
            image
        );

    }


    // ==================================
    //              TEXT
    // ==================================

    memoryTitle.textContent =
        item.title;

    memoryText.textContent =
        item.text;


    // ==================================
    //          SHOW WINDOW
    // ==================================

    memoryOverlay.classList.add(
        "active"
    );


    // Small delay for animation
    setTimeout(() => {

        memoryWindow.classList.add(
            "show"
        );

    }, 30);

}


// ==========================================
//              CLOSE MEMORY
// ==========================================

function closeMemoryWindow(){

    memoryWindow.classList.remove(
        "show"
    );


    // Stop video if present
    const video =
        memoryMedia.querySelector(
            "video"
        );

    if(video){

        video.pause();

    }


    setTimeout(() => {

        memoryOverlay.classList.remove(
            "active"
        );


        // Clear media
        memoryMedia.innerHTML = "";

    }, 400);

}


// ==========================================
//          CLOSE BUTTON
// ==========================================

closeMemory.addEventListener(
    "click",
    closeMemoryWindow
);


// ==========================================
//          CLICK OUTSIDE WINDOW
// ==========================================

memoryOverlay.addEventListener(
    "click",
    function(event){

        if(
            event.target ===
            memoryOverlay
        ){

            closeMemoryWindow();

        }

    }
);


// ==========================================
//              ESC KEY
// ==========================================

document.addEventListener(
    "keydown",
    function(event){

        if(
            event.key === "Escape" &&
            memoryOverlay.classList.contains(
                "active"
            )
        ){

            closeMemoryWindow();

        }

    }
);


// ==========================================
//          FINAL MESSAGE
// ==========================================

function showFinalMessage(){

    // Stop remaining stars
    const stars =
        document.querySelectorAll(
            ".star"
        );


    stars.forEach(star => {

        star.style.animation =
            "none";

    });


    // Show final screen
    setTimeout(() => {

        finalMessage.classList.add(
            "active"
        );

    }, 500);

}