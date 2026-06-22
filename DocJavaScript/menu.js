const btnMenu = document.getElementById("btnMenu");
const menu = document.getElementById("menu");

// Ouvrir/Fermer avec le bouton
btnMenu.addEventListener("click", function(event) {
    menu.classList.toggle("active");

    // Empêche le clic de remonter jusqu'au document
    event.stopPropagation();
});

// Empêche la fermeture lorsqu'on clique dans le menu
menu.addEventListener("click", function(event) {
    event.stopPropagation();
});

// Ferme le menu lorsqu'on clique ailleurs sur la page
document.addEventListener("click", function() {
    menu.classList.remove("active");
});
