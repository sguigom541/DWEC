window.addEventListener("load", function () {
    var divsConcesionario = document.getElementsByClassName("concesionario");
    for (let i = 1; i < divsConcesionario.length; i++) {

        toggle("oculto", divsConcesionario[i]);

    }

    var botAnt = document.getElementById("anterior");
    var botSig = document.getElementById("siguiente");

    //creamos el manejador de evento del boton anterior

    botAnt.addEventListener("click", function (ev) {



        //El div en el que me encuentro ahora mismo
        var ahora = this.parentNode.parentNode.querySelector(".concesionario:not(.oculto)");
        console.log(ahora);
        //El siguiene hermano de quien no esta oculto
        var ant = ahora.previousElementSibling;

        var final = ant.previousElementSibling;
        if (ant) {
            toggle("oculto", ahora);
            toggle("oculto", ant);
            botSig.style.visibility = "visible";

            if (final == null) {
                botAnt.style.visibility = "hidden";
            }
        }

    })




    //creamos el manejador de evento del boton siguiente

    botSig.addEventListener("click", function (ev) {

        var nombre = document.getElementById("nombre");
        var dni = document.getElementById("dni");
        var fechaNac=document.getElementById("fechaNac");
        var matricula=document.getElementById("matricula");
        var marca=document.getElementById("marca");
        var modelo=document.getElementById("modelo");
        var anioFab=document.getElementById("anioFab");
        var comprobarDivActual = this.parentNode.querySelector(".concesionario:not(.oculto)")
        var divCorrecto = false;
        var dniCorrecto = nif(dni.value);
        var matriculaCo=verificaMatricula(matricula.value);
        if (comprobarDivActual.id == "div1") {
            
            if (!dniCorrecto || nombre.value == "" || fechaNac.value == "") {
                if (!dniCorrecto) {
                    dni.style.backgroundColor = "#ff8080";
                }
                else{
                    dni.style.backgroundColor = "";
                }
                if (nombre.value == "") {
                    nombre.style.backgroundColor="#ff8080";
                }
                else{
                    nombre.style.backgroundColor = "";
                }
                if(fechaNac.value==""){
                    fechaNac.style.backgroundColor="#ff8080";
                }
                else{
                    fechaNac.style.backgroundColor = "";
                }
            }

            else {
                divCorrecto = true;
            }
        }
        debugger;
        if (comprobarDivActual.id == "div2") {
            
            if (matricula.value == "" || marca.value == "" || modelo.value=="" || anioFab.value=="") {
                if (matricula.value=="") {
                    matricula.style.backgroundColor = "#ff8080";
                }
                else{
                    matricula.style.backgroundColor = "";
                }
                if (marca.value == "") {
                    marca.style.backgroundColor="#ff8080";
                }
                else{
                    marca.style.backgroundColor = "";
                }
                if (modelo.value == "") {
                    modelo.style.backgroundColor="#ff8080";
                }
                else{
                    modelo.style.backgroundColor = "";
                }
                if(anioFab.value==""){
                    anioFab.style.backgroundColor="#ff8080";
                }
                else{
                    anioFab.style.backgroundColor = "";
                }
            }

            else {
                divCorrecto = true;
            }
        }

        if (divCorrecto == true) {
            //El div en el que me encuentro ahora mismo
            var ahora = this.parentNode.parentNode.querySelector(".concesionario:not(.oculto)");
            //El siguiente hermano del div
            var next = ahora.nextElementSibling;

            var final = next.nextElementSibling.getAttribute("class", this.contains);

            if (next) {
                toggle("oculto", ahora);
                toggle("oculto", next);
                botAnt.style.visibility = "visible";

                if (final == null) {
                    botSig.style.visibility = "hidden";
                }
            }
        }







    })

    //el boton de tipo seguro riesgo con franquicia
    var todoRiesgoConFranquicia = document.getElementById("todoRiesgoConFranquicia");
    todoRiesgoConFranquicia.addEventListener("click", function () {

        todoRiesgoConFranquicia.nextElementSibling.nextElementSibling.setAttribute("class", "tipoTodoRiesgoConFranquicia");
    })


    //el boton de tipo seguro a terceros

    var aTerceros = document.getElementById("aTerceros");
    aTerceros.addEventListener("click", function () {
        var atributo = aTerceros.nextElementSibling.nextElementSibling.getAttribute("class");
        aTerceros.nextElementSibling.nextElementSibling.setAttribute("class", "aTerceros");
    })

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

    //funciones de validacion



    function nif(dni) {
        var numero
        var letr
        var letra
        var expresion_regular_dni
        var correcto = false;
        expresion_regular_dni = /^\d{8}[a-zA-Z]$/;

        if (expresion_regular_dni.test(dni) == true) {
            numero = dni.substr(0, dni.length - 1);
            letr = dni.substr(dni.length - 1, 1);
            numero = numero % 23;
            letra = 'TRWAGMYFPDXBNJZSQVHLCKET';
            letra = letra.substring(numero, numero + 1);
            if (letra != letr.toUpperCase()) {
                correcto = false;
            } else {
                correcto = true;
            }
        }
        return correcto;
    }

    function verificaMatricula(mat){
        var valido=false;
        var expresionRegular=/^(\d|[^AEILÑOQUaeilñoqu])(\d|-)(\d{2})( |\d)(\d|[^AEILÑOQUaeilñoqu])([^AEILÑOQUaeilñoqu]|-)[^AEILÑOQUaeilñoqu](|[^AEILÑOQUaeilñoqu])$/ig;
        if(expresionRegular.test(mat)==true){
            valido=true;
        }
        return valido;
    }
})