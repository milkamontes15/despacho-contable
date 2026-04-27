document.addEventListener("DOMContentLoaded", function () {

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");
const submenuBtn = document.querySelector(".submenu-toggle");
const dropdown = document.querySelector(".dropdown");

/* abrir/cerrar menu */
menuBtn.addEventListener("click", function(e){
    e.preventDefault();
    e.stopPropagation();

    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

/* cerrar */
function cerrarMenu(){
    menu.classList.remove("active");
    overlay.classList.remove("active");
    dropdown.classList.remove("active");
}

/* overlay */
overlay.addEventListener("click", cerrarMenu);

/* submenu */
submenuBtn.addEventListener("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    dropdown.classList.toggle("active");
});

/* evitar cierre dentro del menu */
menu.addEventListener("click", function(e){
    e.stopPropagation();
});

/* cerrar solo después de navegar */
document.querySelectorAll("#menu a").forEach(link => {

    if(link.classList.contains("submenu-toggle")) return;

    link.addEventListener("click", function(){

        setTimeout(() => {
            cerrarMenu();
        }, 150);

    });

});

});