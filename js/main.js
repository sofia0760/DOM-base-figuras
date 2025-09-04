const figura = document.getElementById('figure');       
// <!-- Estilos ---------------------------------------------------------------------------------------------------------------->
// 1. Cambiar a círculo → Convierte la figura en un círculo con border-radius: 50%.
function cambiarCirculo(){
    figura.style.borderRadius = "50%";
    figura.style.background = "purple";
}

// 2. Cambiar a estrella → Convierte la figura en una estrella con clip-path.
function cambiarEstrella(){
    figura.style.clipPath ="polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)";
    figura.style.background = "purple";
}

// 3. Poner fondo GIF → Cambia el fondo de la figura por un GIF animado.
function CambiarGif(){
    figura.style.backgroundImage = "url('img/4g.gif')";
    figura.style.backgroundSize = "cover";
}

// 4. Agregar animación → Aplica una animación CSS (por ejemplo, rotación infinita).
function agregarAnimacion() {
    figura.classList.toggle("girando");
    figura.style.background = "purple";
}

// 5. Mover arriba → Desplaza la figura hacia arriba.
function moverArriba() {
    figura.style.transform = "translateY(-50px)";
    figura.style.transition = "all 1s ease-in-out";
    figura.style.background = "purple";
}

// 6. Mover abajo → Desplaza la figura hacia abajo.
function moverAbajo(){
    figura.style.transform = "translateY(50px)";
    figura.style.transition = "all 1s ease-in-out";
    figura.style.background = "purple";
}

//7. Mover izquierda → Desplaza la figura hacia la izquierda.
function moverIzquierda(){
    figura.style.transform = "translateX(-50px)";
    figura.style.transition = "all 1s ease-in-out";
    figura.style.background = "purple";
}

// 8. Mover derecha → Desplaza la figura hacia la derecha.
function moverDerecha(){
    figura.style.transform = "translateX(50px)";
    figura.style.transition = "all 1s ease-in-out";
    figura.style.background = "purple";
}

//<!-- Contenidos -------------------------------------------------------------------------------------------------------------->

// 9. Cambiar título (prompt) → Con prompt, pedir un texto nuevo para el título principal y reemplazarlo.
function   cambiarTitulo(){
    let nuevoTitulo = prompt ("Escribe un nuevo titulo:");
    mainTitle.innerText = nuevoTitulo;
}  

// 10. Cambiar párrafo (prompt) → Con prompt, pedir un texto nuevo y reemplazar el contenido del primer párrafo.
function cambiarParrafo(){
    let nuevoParrafo = prompt("Escribe un nuevo parrafo:");
    mainParagraph.textContent = nuevoParrafo;
}

// 11. Agregar un párrafo → Insertar dinámicamente un nuevo <p> al final con texto fijo o pedido con prompt.
function agregarParrafo(){
    let parrafoAgregado = prompt("Agregue un nuevo parrafo:");
    extraParagraphs.innerText = parrafoAgregado;
}

// 12. Eliminar último párrafo → Eliminar el último <p> agregado.
function eliminarParrafo(){
    extraParagraphs.remove();
}

//<!-- Atributos--------------------------------------------------------------------------------------------------------------->

// 13. Color en HEX (prompt) → Con prompt, pedir un color en formato #HEX y aplicarlo como fondo de la figura.
function cambiarHex(){
    let nuevoHex = prompt ("Ingrese un color en formato #HEX");
    figura.style.backgroundColor = nuevoHex;
}

// 14. Elegir figura (prompt) → Con prompt, elegir entre "círculo", "estrella" o "cuadrado" y cambiar la figura.
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

// 15. Cambiar imagen (siguiente) → Reemplazar src de la imagen por la siguiente en un arreglo de imágenes.
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

//16. Cambiar imagen (atrás) → Reemplazar src de la imagen por la anterior en un arreglo de imágenes.
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

// 17. Mostrar/Ocultar imagen → Alternar la visibilidad (display: none/block) de la imagen.(se aggrego en la linea 127)
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
//21.Deshabilitar enlace → Quitar el atributo href del <a> para que no sea clickeable.
function deshabilitar(){
    const enlaceClickeable = document.querySelector("#mainLink");
    enlaceClickeable.removeAttribute("href");
}


//eventos de escucha--------------------------------------------------------------

document.addEventListener("DOMContentLoaded",function () {
    // <!-- Estilos ---------------------------------------------------------------------------------------------------------------->
    document.getElementById("btnCircle").addEventListener("click",cambiarCirculo);
    document.getElementById("btnStar").addEventListener("click",cambiarEstrella);
    document.getElementById("btnGif").addEventListener("click", CambiarGif);
    document.getElementById("btnAnim").addEventListener("click", agregarAnimacion);
    document.getElementById("btnMoveUp").addEventListener("click", moverArriba);
    document.getElementById("btnMoveDown").addEventListener("click", moverAbajo);
    document.getElementById("btnMoveLeft").addEventListener("click", moverIzquierda);
    document.getElementById("btnMoveRight").addEventListener("click", moverDerecha);

    //<!-- Contenidos -------------------------------------------------------------------------------------------------------------->
    document.getElementById("btnChangeTitle").addEventListener("click",cambiarTitulo);
    document.getElementById("btnChangeParagraph").addEventListener("click",cambiarParrafo);
    document.getElementById("btnAddParagraph").addEventListener("click",agregarParrafo);
    document.getElementById("btnRemoveParagraph").addEventListener("click",eliminarParrafo);

    //<!-- Atributos--------------------------------------------------------------------------------------------------------------->
    document.getElementById("btnHexColor").addEventListener("click",cambiarHex);
    document.getElementById("btnChooseFigure").addEventListener("click",elegirFigura);
    document.getElementById("btnChangeImageNext").addEventListener("click",cambiarImagen);
    document.getElementById("btnChangeImagePrev").addEventListener("click",imagenAtras);
    document.getElementById("btnToggleImage").addEventListener("click",ocultarImagen);
    document.getElementById("btnChangeAlt").addEventListener("click",cambiarAtributo);
    document.getElementById("btnChangeLink").addEventListener("click",cambiarEnlace);
    document.getElementById("btnOpenLink").addEventListener("click",nuevoEnlace);
    document.getElementById("btnDisableLink").addEventListener("click",deshabilitar);

});


