const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const response = document.getElementById("response");

let noCount = 0;
let yesScale = 1;

const messages = [

    "Are you sure? 🥺",

    "Think once again... 🌸",

    "The 'Yes' button looks happier. ❤️",

    "Hmm... I don't believe you. 😌",

    "Maybe your heart clicked the wrong button. 🌙",

    "You can still change your mind... ✨",

    "The dream is waiting patiently. 💌",

    "The 'No' button is getting tired. 😂",

    "Last chance... don't break this little dream. 🤍",

    "Fine... but I'm still hoping. 🌸"

];

noBtn.addEventListener("click", () => {

    response.innerHTML = messages[noCount % messages.length];

    noCount++;

    // No button shrinks
    let scale = Math.max(0.25, 1 - noCount * 0.08);
    noBtn.style.transform = `scale(${scale})`;

    // Yes button grows
    yesScale += 0.12;
    yesBtn.style.transform = `scale(${yesScale})`;

    // Move No button randomly
    const x = Math.random() * 220 - 110;
    const y = Math.random() * 120 - 60;

    noBtn.style.position = "relative";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

});

yesBtn.addEventListener("click", () => {

    document.body.style.transition = "1s";
    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.innerHTML = `

        <div style="
        height:100vh;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        background:linear-gradient(135deg,#faf6f1,#f3e6d8);
        text-align:center;
        padding:30px;
        ">

        <h1 style="
        font-family:'Cormorant Garamond',serif;
        font-size:70px;
        color:#5a4033;
        margin-bottom:20px;
        ">
        Thank You 🤍
        </h1>

        <p style="
        font-family:'Great Vibes',cursive;
        font-size:38px;
        max-width:750px;
        color:#6b4d40;
        line-height:1.7;
        ">

        Every beautiful dream begins with a single 'Yes'.<br><br>

        And maybe... one day,<br>

        this dream will find its way home. 🌸

        </p>

        </div>

        `;

        document.body.style.opacity = "1";

    }, 1000);

});