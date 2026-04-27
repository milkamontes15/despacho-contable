document.addEventListener("DOMContentLoaded", () => {

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");

/* abrir / cerrar */
menuBtn.addEventListener("click", () => {
menu.classList.toggle("active");
overlay.classList.toggle("active");
});

/* cerrar */
function cerrarMenu(){
menu.classList.remove("active");
overlay.classList.remove("active");
}

/* click overlay */
overlay.addEventListener("click", cerrarMenu);

/* dropdown */
window.toggleSubmenu = function(e){
e.preventDefault();

const li = e.currentTarget.closest(".dropdown");
li.classList.toggle("active");
};

/* links normales */
document.querySelectorAll("#menu li a").forEach(link => {

link.addEventListener("click", function(e){

const li = this.closest("li");

/* si dropdown no cerrar */
if(li.classList.contains("dropdown")){
return;
}

/* links submenu sí cierran */
cerrarMenu();

});

});

});