// ==========================================
//          CHITTA - WEBSITE MUSIC
// ==========================================


// ==========================================
//              MUSIC FILE
// ==========================================

const music = new Audio(
    "assets/images/Folder 5/music1.mp3"
);


// ==========================================
//              SETTINGS
// ==========================================

music.loop = true;

music.volume = 0.35;

music.preload = "auto";


// ==========================================
//          RESTORE MUSIC POSITION
// ==========================================

let savedTime =
    localStorage.getItem("chittaMusicTime");

let savedPlaying =
    localStorage.getItem("chittaMusicPlaying");


// ==========================================
//      RESTORE AFTER AUDIO LOADS
// ==========================================

music.addEventListener(
    "loadedmetadata",
    () => {

        if(savedTime){

            const time =
                Number(savedTime);

            if(
                time >= 0 &&
                time < music.duration
            ){

                music.currentTime = time;

            }

        }

    }
);


// ==========================================
//          SAVE CURRENT POSITION
// ==========================================

music.addEventListener(
    "timeupdate",
    () => {

        localStorage.setItem(
            "chittaMusicTime",
            music.currentTime
        );

    }
);


// ==========================================
//          START MUSIC
// ==========================================

function startChitta(){

    music.play()
        .then(() => {

            localStorage.setItem(
                "chittaMusicPlaying",
                "true"
            );

        })
        .catch(() => {

            // Browser autoplay blocked.
            // We will try again after
            // the user's first interaction.

        });

}


// ==========================================
//       TRY AUTOPLAY ON PAGE LOAD
// ==========================================

window.addEventListener(
    "load",
    () => {

        startChitta();

    }
);


// ==========================================
//     START AFTER ANY USER INTERACTION
// ==========================================

// No button required.
// Any click/touch/key interaction
// anywhere on the website will start it.

function unlockMusic(){

    startChitta();

    document.removeEventListener(
        "click",
        unlockMusic
    );

    document.removeEventListener(
        "touchstart",
        unlockMusic
    );

    document.removeEventListener(
        "keydown",
        unlockMusic
    );

}


document.addEventListener(
    "click",
    unlockMusic,
    { once: true }
);


document.addEventListener(
    "touchstart",
    unlockMusic,
    { once: true }
);


document.addEventListener(
    "keydown",
    unlockMusic,
    { once: true }
);


// ==========================================
//        SAVE BEFORE PAGE CHANGES
// ==========================================

window.addEventListener(
    "beforeunload",
    () => {

        localStorage.setItem(
            "chittaMusicTime",
            music.currentTime
        );

        localStorage.setItem(
            "chittaMusicPlaying",
            music.paused
                ? "false"
                : "true"
        );

    }
);