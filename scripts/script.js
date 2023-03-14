window.onload= function(){
    const piezas=document.querySelectorAll(".pieza");
    const casillas= document.querySelectorAll(".square");

    // casillas.forEach(casilla => {
    //     casilla.addEventListener("dragover",dragOver);
    //     casilla.addEventListener("drop",dragDrop);
    //     // 
    //     casilla.addEventListener("dragenter",dragEnter);
    //     casilla.addEventListener("dragleave", dragLeave);
    //     casilla.addEventListener("dragend", dragEnd);
    // });

    for(let pieza of piezas){
         pieza.addEventListener("dragstart",dragStart);
         pieza.addEventListener("drag",dragging);
    };

    for(let casilla of casillas){
        casilla.addEventListener("dragover",dragOver);
        casilla.addEventListener("drop",dragDrop);
        // 
        casilla.addEventListener("dragenter",dragEnter);
        casilla.addEventListener("dragleave", dragLeave);
        casilla.addEventListener("dragend", dragEnd);
    };
    
  

    let elementoarrastrado;
    // funcion de arrastrado basico
    function dragStart(e){
        elementoarrastrado=e.target;
        e.dataTransfer.setData('text/plain', e.target.id);
        console.log("c: "+e.target.id);
        contador=0;
    }

    function dragOver(e){
        e.preventDefault();
        
    }
    function dragDrop(e){
        console.log("t"+e.target);
        const id = e.dataTransfer.getData('text/plain');
       
        const draggable=document.getElementById(id);
    
        if (contador==1 || id!="rey"){
        e.target.append(draggable);    
         }
        e.target.classList.remove("resaltado");
    }

    //Hasta aqui arriba lo mas basico

    
    const info =document.querySelector("#info");
    function dragging(e){      
        info.textContent= "Estas arrastrando la pieza "+ e.target.id;
        
    }

    function dragEnter(e){
        e.target.classList.add("resaltado");
        
    }
    let contador=0;
    function dragLeave(e){
        e.target.classList.remove("resaltado");
       
        contador++;
        console.log(contador);
    }

    function dragEnd(e){
        e.target.classList.add("objetivo");
        setTimeout(()=> e.target.classList.remove("objetivo"),100);
        info.textContent="";
    }

}