window.addEventListener("load",function(){
    // manejador de evento para la ventana modal de crear trabajador

    var btnModalNewTrabajador = document.getElementById("modal-newUser");
    var divModalTrabajador = document.getElementById("div-nuevoTrabajador");
    var btnCerrarModalMascota = document.getElementById("btnCerrarNewTrabajador");

    btnModalNewTrabajador.addEventListener("click", function () {
        divModalTrabajador.style.display = "block";

        body.style.position = "static";
        body.style.height = "100%";
        body.style.overflow = "hidden";
    })

    btnCerrarModalMascota.addEventListener("click", function () {
        divModalTrabajador.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    })

    // manejadores de evento de los divs de la empresa


    










    function toggle(clase, objeto) {
        var clasesActuales = objeto.getAttribute("class");
        if (!clasesActuales) {
            nuevaClase = clase;
        }
        else {
            var expReg = new RegExp("(^" + clase + "$|^" + clase + " | " + clase + " | " + clase + "$)");
            var nuevaClase = clasesActuales.replace(expReg, "");
            if (clasesActuales == nuevaClase) {
                nuevaClase += " " + clase;
               
            }
        }
        objeto.setAttribute("class", nuevaClase);
    }

    
})
