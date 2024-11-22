document.getElementById("increase-font").addEventListener("click", function () {
    document.body.style.fontSize = "larger";
});

document.getElementById("decrease-font").addEventListener("click", function () {
    document.body.style.fontSize = "smaller";
});

document.getElementById("toggle-contrast").addEventListener("click", function () {
    document.body.classList.toggle("high-contrast");
});
