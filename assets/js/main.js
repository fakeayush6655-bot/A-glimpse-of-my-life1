const enterButton = document.getElementById("enterButton");

enterButton.addEventListener("click", () => {

    document.body.style.opacity = "0";

    document.body.style.transition = "0.8s";

    setTimeout(() => {

        window.location.href = "password.html";

    }, 800);

});