const figura = document.getElementById('figure');
function cambiarCirculo(){
    figura.style.borderRadius = "50%";
    figura.style.background = "purple";

}
function cambiarEstrella(){
    figura.style.clipPath ="polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    figura.style.background = "green";
}
function CambiarGif(){
    figura.style.backgroundImage = "url('img/4g.gif')";
    figura.style.backgroundSize = "cover";

}
function agregarAnimacion() {
    figura.classList.toggle("parpadear");
    figura.style.background = "pink";
}
function moverArriba() {
    figura.style.transform = "translateY(-50px)";
    figura.style.transition = "all 1s ease-in-out";
}
function moverAbajo(){
    figura.style.transform = "translateY(50px)";
    figura.style.transition = "all 1s ease-in-out";
}
function moverIzquierda(){
    figura.style.transform = "translateX(-50px)";
    figura.style.transition = "all 1s ease-in-out";
}


document.addEventListener("DOMContentLoaded",function () {
    document.getElementById("btnCircle").addEventListener("click",cambiarCirculo);
    document.getElementById("btnStar").addEventListener("click",cambiarEstrella);
    document.getElementById("btnGif").addEventListener("click", CambiarGif);
    document.getElementById("btnAnim").addEventListener("click", agregarAnimacion);
    document.getElementById("btnMoveUp").addEventListener("click", moverArriba);
    document.getElementById("btnMoveDown").addEventListener("click", moverAbajo);
    document.getElementById("btnMoveLeft").addEventListener("click", moverIzquierda);
});


