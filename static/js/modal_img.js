
document.querySelectorAll(".feedback-image").forEach(function(image) {
    image.addEventListener("click", function() {
        document.getElementById("imageModal").style.display = "block";
        document.getElementById("modalImg").src = this.src;
    });
});

document.getElementById("imageModal").addEventListener("click", function() {
    this.style.display = "none";
});