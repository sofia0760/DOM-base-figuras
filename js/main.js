const figura = document.getElementById('figure');
// <!-- Estilos -->

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
function moverDerecha(){
    figura.style.transform = "translateX(50px)";
    figura.style.transition = "all 1s ease-in-out";
}

//<!-- Contenidos -->

function   cambiarTitulo(){
    let nuevoTitulo = prompt ("Escribe un nuevo titulo:");
    mainTitle.innerText = nuevoTitulo;
}  

function cambiarParrafo(){
    let nuevoParrafo = prompt("Escribe un nuevo parrafo:");
    mainParagraph.textContent = nuevoParrafo;
}
function agregarParrafo(){
    let parrafoAgregado = prompt("Agregue un nuevo parrafo:");
    extraParagraphs.innerText = parrafoAgregado;
}
function eliminarParrafo(){
    extraParagraphs.remove();
}

//<!-- Atributos-->

function cambiarHex(){
    let nuevoHex = prompt ("Ingrese un color en formato #HEX");
    figura.style.backgroundColor = nuevoHex;
}
function elegirFigura(){
    let nuevaFigura = prompt("Elige entre: Circulo, Estrella, Cuadrado");
    switch (nuevaFigura) {
        case "circulo":
            figura.style.borderRadius = "50%";
            break;

        case "estrella":
            figura.style.clipPath ="polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)"; 
            break;
            
        case "cuadrado":
            figura.style.borderRadius = "0";   
            
            break;    
    
        default:
            break;
    }
}

let indice = 0;  
function cambiarImagen(){
    const imagenes = ["img/imagen.jpg", "img/imagen2.jpg", "img/imagen3.jpg"]; //areglo de las imagenes
    const imagen = document.getElementById("mainImage");

    //avanzar al siguiente indice
    indice ++;

    //cuando llegue al final, que se reinice
    if (indice >= imagenes.length){
        indice = 0;
    }
    //cambiamos el src
    imagen.setAttribute("src", imagenes[indice]);
}

function imagenAtras(){
    const imagenes = ["img/imagen.jpg", "img/imagen2.jpg", "img/imagen3.jpg"]; //areglo de las imagenes
    const imagen = document.getElementById("mainImage");

    //avanzar al siguiente indice
    indice --;

    //cuando llegue al final, que se reinice
    if (indice < 0){
        indice = imagenes.length - 1
    }
       
    //cambiamos el src
    imagen.setAttribute("src", imagenes[indice]);
}

function ocultarImagen(){
    const ocultar = document.getElementById("mainImage");
    ocultar.classList.toggle("oculto");
}
//18.Cambiar atributo ALT → Con prompt, pedir un texto y asignarlo como atributo alt de la imagen.
function cambiarAtributo(){
    const atributo = document.getElementById("mainImage");
    let texto = prompt("Digite el texto para asignarselo al ALT");
    atributo.setAttribute("alt", texto);
}

//19.Cambiar enlace (prompt) → Con prompt, pedir una nueva URL y asignarla al <a> (atributo href).
function cambiarEnlace(){
    const enlace = document.getElementById("mainLink");
    let nuevaUrl = prompt("Ingrese una nueva URL");
    enlace.setAttribute("href",nuevaUrl);
}
//20.Abrir enlace en nueva pestaña → Forzar que el enlace se abra en otra pestaña con target="_blank".
function nuevoEnlace(){
    const enlacePestana = document.querySelector("#mainLink");
    enlacePestana.setAttribute("target","_blank");
}



document.addEventListener("DOMContentLoaded",function () {
    document.getElementById("btnCircle").addEventListener("click",cambiarCirculo);
    document.getElementById("btnStar").addEventListener("click",cambiarEstrella);
    document.getElementById("btnGif").addEventListener("click", CambiarGif);
    document.getElementById("btnAnim").addEventListener("click", agregarAnimacion);
    document.getElementById("btnMoveUp").addEventListener("click", moverArriba);
    document.getElementById("btnMoveDown").addEventListener("click", moverAbajo);
    document.getElementById("btnMoveLeft").addEventListener("click", moverIzquierda);
    document.getElementById("btnMoveRight").addEventListener("click", moverDerecha);
    document.getElementById("btnChangeTitle").addEventListener("click",cambiarTitulo);
    document.getElementById("btnChangeParagraph").addEventListener("click",cambiarParrafo);
    document.getElementById("btnAddParagraph").addEventListener("click",agregarParrafo);
    document.getElementById("btnRemoveParagraph").addEventListener("click",eliminarParrafo);

    document.getElementById("btnHexColor").addEventListener("click",cambiarHex);
    document.getElementById("btnChooseFigure").addEventListener("click",elegirFigura);
    document.getElementById("btnChangeImageNext").addEventListener("click",cambiarImagen);
    document.getElementById("btnChangeImagePrev").addEventListener("click",imagenAtras);
    document.getElementById("btnToggleImage").addEventListener("click",ocultarImagen);
    document.getElementById("btnChangeAlt").addEventListener("click",cambiarAtributo);
    document.getElementById("btnChangeLink").addEventListener("click",cambiarEnlace);
    document.getElementById("btnOpenLink").addEventListener("click",nuevoEnlace);

});


