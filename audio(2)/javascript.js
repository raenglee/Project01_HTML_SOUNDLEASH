// script.js

document.addEventListener("DOMContentLoaded", function() {
    const speaker = document.getElementById("speaker");
    const intro = document.getElementById("intro");
    const mainContent = document.getElementById("main-content");

    speaker.addEventListener("click", function() {
        intro.style.display = "none";
        mainContent.style.display = "block";
    });

    const buttons = document.querySelectorAll(".product button");
    buttons.forEach(button => {
        button.addEventListener("click", function() {
            alert("제품에 대한 자세한 정보를 확인하세요.");
        });
    });
});
