const correctPassword = "Dream@0612";

const passwordInput = document.getElementById("password");
const unlockButton = document.getElementById("unlock");
const message = document.getElementById("message");
const loadingScreen = document.getElementById("loadingScreen");

let attempt = 0;

const wrongMessages = [

    "Hmm... This isn't the memory I'm looking for. 🌸",

    "Nope... Think a little deeper. 🤍",

    "Still not right... Maybe your heart remembers. 🌙",

    "The key isn't on the keyboard... it's in the memories. ✨",

    "You're making the flowers nervous. 🌸",

    "A little hint... Dreams sometimes hide the answer. 💭",

    "Almost... or maybe destiny is teasing you. 🌿",

    "This little world opens only for the right soul. 🤍",

    "Take a deep breath... and try once again. 🌸",

    "I don't think you're the person this world was made for... 🥀"

];

function shakeInput() {

    passwordInput.animate(

        [

            { transform: "translateX(0px)" },

            { transform: "translateX(-10px)" },

            { transform: "translateX(10px)" },

            { transform: "translateX(-10px)" },

            { transform: "translateX(0px)" }

        ],

        {

            duration: 400

        }

    );

}

function unlockWebsite() {

    if (passwordInput.value === correctPassword) {

        message.innerHTML = "";

        loadingScreen.classList.add("show");

        setTimeout(() => {

            window.location.href = "hub.html";

        }, 2500);

    }

    else {

        message.style.color = "#b85c5c";

        message.innerHTML = wrongMessages[attempt % wrongMessages.length];

        shakeInput();

        attempt++;

        passwordInput.value = "";

        passwordInput.focus();

        if (attempt === 10) {

            unlockButton.disabled = true;

            unlockButton.innerHTML = "Wait 5 Seconds...";

            setTimeout(() => {

                unlockButton.disabled = false;

                unlockButton.innerHTML = "Unlock";

            }, 5000);

        }

    }

}

unlockButton.addEventListener("click", unlockWebsite);

passwordInput.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        unlockWebsite();

    }

});