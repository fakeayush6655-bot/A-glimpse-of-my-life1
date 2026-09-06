// ==========================================
//          LETTER PAGE JAVASCRIPT
// ==========================================

const paper = document.querySelector(".vintage-paper");
const letterText = document.querySelector(".letter-text");
const downloadBtn = document.querySelector(".download-letter");
const backBtn = document.querySelector(".back-letter");


// ==========================================
//          TYPEWRITER EFFECT
// ==========================================

if (letterText) {

    const paragraphs = letterText.querySelectorAll("p");

    paragraphs.forEach((paragraph, index) => {

        const text = paragraph.textContent.trim();

        paragraph.textContent = "";

        let i = 0;

        setTimeout(() => {

            const typing = setInterval(() => {

                paragraph.textContent += text.charAt(i);

                i++;

                if (i >= text.length) {

                    clearInterval(typing);

                }

            }, 25);

        }, 700 + index * 900);

    });

}


// ==========================================
//          DOWNLOAD EFFECT
// ==========================================

if (downloadBtn) {

    downloadBtn.addEventListener("click", () => {

        const originalText =
            downloadBtn.innerHTML;

        downloadBtn.innerHTML =
            "📜 Saving...";

        downloadBtn.style.pointerEvents =
            "none";

        setTimeout(() => {

            downloadBtn.innerHTML =
                "✔ Letter Saved";

        }, 900);


        setTimeout(() => {

            downloadBtn.innerHTML =
                originalText;

            downloadBtn.style.pointerEvents =
                "auto";

        }, 2500);

    });

}


// ==========================================
//          BACK TRANSITION
// ==========================================

if (backBtn) {

    backBtn.addEventListener("click", (event) => {

        event.preventDefault();

        const target =
            backBtn.getAttribute("href");

        const transition =
            document.querySelector(".page-transition");

        if (transition) {

            transition.classList.add("active");

        }

        setTimeout(() => {

            window.location.href = target;

        }, 600);

    });

}