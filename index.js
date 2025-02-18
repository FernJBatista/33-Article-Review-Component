addEventListener("DOMContentLoaded", function() {
    const shareContainer = document.querySelector("#shareContainer");
    const shareButton = document.querySelector("#shareButton");
    shareButton.addEventListener("click", function() {
        shareContainer.classList.toggle("active");
    });
});