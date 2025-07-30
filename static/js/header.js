document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const submenuIds = ["filials", "services", "extra"];

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });

  submenuIds.forEach(id => {
    const menuItem = document.getElementById(id);
    const submenu = document.getElementById(id + "-list");
    if (menuItem && submenu) {
      menuItem.addEventListener("click", (e) => {
        e.preventDefault(); // чтобы не переходить по ссылке, если она есть
        submenu.classList.toggle("active");
      });
    }
  });
});
