document.addEventListener("DOMContentLoaded", function(){

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");

/* ABRIR / CERRAR MENU */
menuBtn.addEventListener("click", function(e){
    e.stopPropagation();
    menu.classList.toggle("active");
    overlay.classList.toggle("active");
});

/* SERVICIOS */
window.toggleSubmenu = function(event){
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.parentElement.classList.toggle("active");
}

/* EVITA QUE CLICK DENTRO DEL MENU LO CIERRE */
menu.addEventListener("click", function(e){
    e.stopPropagation();
});

/* CERRAR MENU AL TOCAR FUERA (OVERLAY) */
overlay.addEventListener("click", ()=>{
    menu.classList.remove("active");
    overlay.classList.remove("active");
});

/* CERRAR CUANDO SE SELECCIONA UN LINK */
document.querySelectorAll("#menu a").forEach(link=>{
    link.addEventListener("click", function(){

        if(this.parentElement.classList.contains("dropdown"))
            return;

        menu.classList.remove("active");
        overlay.classList.remove("active");

    });
});

});

