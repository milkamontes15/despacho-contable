document.addEventListener("DOMContentLoaded", function(){

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");

/* MENU */
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu(){
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
}

/* SERVICIOS */
window.toggleSubmenu = function(event){
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.parentElement.classList.toggle("active");
}

/* Cerrar menú al hacer click fuera */
document.addEventListener("click", function(event){

    if(!menu.contains(event.target) && !menuBtn.contains(event.target)){
        menu.classList.remove("active");
    }
/* CERRAR LINKS */
document.querySelectorAll("#menu a").forEach(link=>{
    link.addEventListener("click", function(){
        if(this.parentElement.classList.contains("dropdown"))
            return;

        menu.classList.remove("active");
        overlay.classList.remove("active");
    });
});

});