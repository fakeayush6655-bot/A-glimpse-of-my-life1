document.addEventListener("DOMContentLoaded", () => {

    const textElement = document.getElementById("chapterText");
    const endElement = document.querySelector(".letter-end");
    const backButton = document.querySelector(".chapter-back");

    if (!textElement) return;

    // Original text save karo
    const originalText = textElement.textContent.trim();

    // Text ko words mein divide karo
    const words = originalText.split(/\s+/);

    // Text empty kar do
    textElement.innerHTML = "";

    // Har word ko one-by-one show karna
    words.forEach((word, index) => {

        const span = document.createElement("span");

        span.className = "letter-word";
        span.textContent = word + " ";

        // Har word ke beech delay
        span.style.animationDelay = `${index * 70}ms`;

        textElement.appendChild(span);
    });


    // Total typing time calculate
    const totalTime = words.length * 70 + 800;


    // Text complete hone ke baad
    setTimeout(() => {

        if (endElement) {
            endElement.classList.add("show");
        }

        if (backButton) {
            backButton.classList.add("show");
        }

    }, totalTime);


    // Page load animation
    document.body.classList.add("page-loaded");

});