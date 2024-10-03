const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
const filials = document.getElementById("filials");
const filialsList = document.getElementById("filials-list");

addEventListener("DOMContentLoaded", () => {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
    filials.addEventListener("click", () => {
      filialsList.classList.toggle("active");
    });
  });
});
