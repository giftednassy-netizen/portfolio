document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menuToggle");
    const navbarNav = document.getElementById("navbarNav");

    if (menuToggle && navbarNav) {
        menuToggle.addEventListener("click", () => {
            navbarNav.classList.toggle("show");
        });
    }

    // Fermer automatiquement le menu mobile lorsqu'un lien est cliqué
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if (navbarNav.classList.contains("show")) {
                navbarNav.classList.remove("show");
            }
        });
    });
});
