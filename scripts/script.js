window.onload= function(){
    const rey=document.querySelector(".pieza");
    const casillas= document.querySelectorAll(".square");

    casillas.forEach(casilla => {
        casilla.addEventListener("dragover",dragOver);
        casilla.addEventListener("drop",dragDrop);
        // 
        casilla.addEventListener("dragenter",dragEnter);
        casilla.addEventListener("dragleave", dragLeave);
        casilla.addEventListener("dragend", dragEnd);
    });
    rey.addEventListener("dragstart",dragStart);

    let elementoarrastrado;
    // funcion de arrastrado basico
    function dragStart(e){
        elementoarrastrado=e.target;
    }

    function dragOver(e){
        e.preventDefault();
    }
    function dragDrop(e){
        console.log(e.target);
        e.target.append(elementoarrastrado);
        e.target.classList.remove("resaltado");
    }

    //Hasta aqui arriba lo mas basico

    rey.addEventListener("drag",dragging);
    const info =document.querySelector("#info");
    function dragging(e){
        info.textContent= "Estas arrastrando la pieza "+ elementoarrastrado.id;
    }

    function dragEnter(e){
        e.target.classList.add("resaltado");
    }

    function dragLeave(e){
        e.target.classList.remove("resaltado");
    }

    function dragEnd(e){
        e.target.classList.add("objetivo");
        setTimeout(()=> e.target.classList.remove("objetivo"),100);
        info.textContent="";
    }

}