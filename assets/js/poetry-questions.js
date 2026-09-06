const questions = [

{
    question:
    "If words had a home, where would they belong?",

    options:[
        "In a poem 📜",
        "In someone's heart ❤️",
        "In silence 🌙",
        "In memories 🍂"
    ]
},

{
    question:
    "Which feeling is hardest to explain?",

    options:[
        "Missing someone",
        "Happiness",
        "Hope",
        "Gratitude"
    ]
},

{
    question:
    "Some pages are written with...",

    options:[
        "Ink 🖋️",
        "Memories 🌸",
        "Silence 🌙",
        "Time ⏳"
    ]
},

{
    question:
    "Which lasts the longest?",

    options:[
        "A moment",
        "A smile",
        "A poem",
        "A memory"
    ]
},

{
    question:
    "One last page is waiting...\nAre you ready?",

    options:[
        "Unlock the Final Poem ✨",
        "Yes ❤️"
    ]
}

];

let current = 0;

const container =
document.getElementById("questionContainer");

const progress =
document.querySelector(".progress-fill");

const nextBtn =
document.getElementById("nextBtn");

function loadQuestion(){

    let q = questions[current];

    let html =
    `<div class="question">${q.question}</div>`;

    q.options.forEach(option=>{

        html +=
        `<button class="option">
            ${option}
        </button>`;

    });

    container.innerHTML = html;

    document.querySelectorAll(".option")
    .forEach(btn=>{

        btn.onclick=()=>{

            document.querySelectorAll(".option")
            .forEach(b=>b.classList.remove("selected"));

            btn.classList.add("selected");

        }

    });

    progress.style.width =
    ((current+1)/questions.length)*100+"%";

}

loadQuestion();

nextBtn.onclick=()=>{

    if(!document.querySelector(".selected")){

        alert("Choose one option first ❤️");

        return;

    }

    current++;

    if(current>=questions.length){

        document.body.style.opacity="0";

        setTimeout(()=>{

            window.location.href="special-poetry.html";

        },600);

        return;

    }

    loadQuestion();

};