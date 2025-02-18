addEventListener("DOMContentLoaded", function() {
    const shareContainer = document.querySelector("#shareContainer");
    const shareIcon = document.querySelector("#shareIcon");
    shareIcon.addEventListener("click", function() {
        shareContainer.classList.toggle("active");
        
    });
});