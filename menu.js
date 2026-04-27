document.addEventListener("DOMContentLoaded", () => {

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");
const submenuBtn = document.querySelector(".submenu-toggle");

/* abrir menú */
menuBtn.addEventListener("click", (e) => {
e.stopPropagation();
menu.classList.toggle("active");
overlay.classList.toggle("active");
});

/* cerrar menú */
function cerrarMenu(){
menu.classList.remove("active");
overlay.classList.remove("active");
}

/* overlay */
overlay.addEventListener("click", cerrarMenu);

/* submenu */
submenuBtn.addEventListener("click", (e) => {
e.preventDefault();
e.stopPropagation();
submenuBtn.parentElement.classList.toggle("active");
});

/* links normales */
document.querySelectorAll("#menu a").forEach(link => {

link.addEventListener("click", function(){

if(this.classList.contains("submenu-toggle")) return;

cerrarMenu();

});

});

});