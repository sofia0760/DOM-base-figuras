const figura = document.getElementById('figure');
function cambiarCirculo(){
    figura.style.borderRadius = "50%";
    figura.style.background = "purple";

}
// function cambiarEstrella(){
//     figura.style.clicPath =
// }



document.addEventListener("DOMContentLoaded",function () {
    document.getElementById("btnCircle").addEventListener("click",circulo);
});


