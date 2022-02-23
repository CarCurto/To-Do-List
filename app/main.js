window.onload=()=>{

    //variables y escuchadores
    let listaTareas=document.querySelector("#lista_tareas");
    let nuevaTarea=document.querySelector("#tarea");
    let botonAñadir=document.querySelector("#añadir");
    let botonEliminar=document.querySelector("#bloque_eliminar")
    

    //poner aqui el codigo para el evento borrar
    
    

    //función añadir elementos

    
    let añadiendoTarea=()=>{
        var tarea=document.getElementById("texto_añadir").value;
        let clonBtnAñadir=botonEliminar.cloneNode(true);
        let clonTarea=nuevaTarea.cloneNode(false);
        let nuevoTexto=document.createElement(`h2`);
        nuevoTexto.textContent= tarea;
        listaTareas.appendChild(clonTarea);
        clonTarea.appendChild(nuevoTexto);
        clonTarea.appendChild (clonBtnAñadir);
        document.getElementById("texto_añadir").value="";

        
    }

    //llamando a las funciones

    botonAñadir.addEventListener('click',(añadiendoTarea));

};