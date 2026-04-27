document.addEventListener("DOMContentLoaded", function(){

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");

/* ABRIR MENU */
menuBtn.addEventListener("click", function(e){
e.stopPropagation();
menu.classList.toggle("active");
overlay.classList.toggle("active");
});

/* SUBMENU */
window.toggleSubmenu = function(event){
event.preventDefault();
event.stopPropagation();

const item = event.currentTarget.parentElement;
item.classList.toggle("active");
};

/* CLICK DENTRO MENU */
menu.addEventListener("click", function(e){
e.stopPropagation();
});

/* CERRAR FUERA */
overlay.addEventListener("click", cerrarMenu);

/* CERRAR AL DAR CLICK EN LINKS NORMALES */
document.querySelectorAll("#menu li a").forEach(link=>{

link.addEventListener("click", function(){

const parent = this.parentElement;

/* si es dropdown no cerrar */
if(parent.classList.contains("dropdown")) return;

/* si está dentro submenu sí cerrar */
cerrarMenu();

});

});

function cerrarMenu(){
menu.classList.remove("active");
overlay.classList.remove("active");
}

});