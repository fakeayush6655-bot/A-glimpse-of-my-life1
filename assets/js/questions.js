const questions = [

{
    question:
    "Which picture made you stop scrolling the longest?",

    options:[
        "The first one",
        "The one with the smile",
        "The one with the eyes",
        "I can't decide"
    ]
},

{
    question:
    "What's the first thing you usually notice in a person?",

    options:[
        "Smile 😊",
        "Eyes 👀",
        "Voice 🎵",
        "Kindness 🤍"
    ]
},

{
    question:
    "Do beautiful memories happen...",

    options:[
        "By chance",
        "Because of someone",
        "Both",
        "I don't know"
    ]
},

{
    question:
    "If one picture disappeared forever...",

    options:[
        "I'd notice immediately",
        "Maybe later",
        "Probably not",
        "Depends"
    ]
},

{
    question:
    "Last question...\nDo you really think you've seen my favourite?",

    options:[
        "Yes ❤️",
        "I'm not sure 🤍"
    ]
}

];



let current = 0;

const container = document.getElementById("questionContainer");

const progress = document.querySelector(".progress-fill");

const nextBtn = document.getElementById("nextBtn");



function loadQuestion(){

    let q = questions[current];

    let html = `
        <div class="question">
            ${q.question}
        </div>
    `;

    q.options.forEach(option=>{

        html += `
            <button class="option">
                ${option}
            </button>
        `;

    });

    container.innerHTML = html;

    document.querySelectorAll(".option").forEach(btn=>{

        btn.addEventListener("click",()=>{

            document.querySelectorAll(".option")
            .forEach(b=>b.classList.remove("selected"));

            btn.classList.add("selected");

        });

    });

    progress.style.width =
    ((current+1)/questions.length)*100+"%";

}

loadQuestion();



nextBtn.addEventListener("click",()=>{

    let selected =
    document.querySelector(".selected");

    if(!selected){

        alert("Choose an option first ❤️");

        return;

    }

    current++;

    if(current>=questions.length){

        document.body.style.opacity="0";

        setTimeout(()=>{

            window.location.href="special.html";

        },600);

        return;

    }

    loadQuestion();

});