document.addEventListener("DOMContentLoaded", () => {

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");
const submenuBtn = document.querySelector(".submenu-toggle");
const dropdown = document.querySelector(".dropdown");

/* ABRIR MENU */
menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

/* CERRAR MENU */
function cerrarMenu(){
    menu.classList.remove("active");
    overlay.classList.remove("active");
    dropdown.classList.remove("active");
}

/* OVERLAY */
overlay.addEventListener("click", cerrarMenu);

/* SUBMENU */
submenuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle("active");
});

/* PERMITIR CLIC DENTRO DEL MENU */
menu.addEventListener("click", (e) => {
    e.stopPropagation();
});

/* SOLO CERRAR EN LINKS REALES */
document.querySelectorAll(".submenu a, .menu li a:not(.submenu-toggle)").forEach(link => {
    link.addEventListener("click", () => {
        cerrarMenu();
    });
});

});