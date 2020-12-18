window.addEventListener("load", function () {
    // Variables
    const btnCrearEmpresa = document.getElementById("crearEmpresa");
    const btnCrearTrabajador = document.getElementById("crearTrabajador");
    const btnAcceso = document.getElementById("acceso");
    const btnEditarEmpleado = document.getElementById("btnEditar");
    const btnBorrarEmpleado = document.getElementById("btnBorrar");




    // recuperamos los datos de la empresa y los mostramos
    mostrarTrabajadores();



    btnCrearEmpresa.addEventListener("click", function () 
    {
        var header = document.getElementsByClassName("header");
        var formRegEmpresa = this.parentNode.parentNode;
        var inputs = formRegEmpresa.firstElementChild.getElementsByTagName("input");
        var nombreEmpresa = inputs[0].value;
        var horaInicio = inputs[1].value;
        var horaFin = inputs[2].value;
        var numTrabSimul = inputs[3].value;

        var em = new empresa(nombreEmpresa, numTrabSimul);
        em.horario.push(horaInicio);
        em.horario.push(horaFin);
        grabarEmpresa(em, "empresa");
        header[0].children[0].innerText = em.nombre;
    })
    btnCrearTrabajador.addEventListener("click", function () 
    {
        var formNewTrab = document.getElementById("newTrabajador");
        var inputs = formNewTrab.firstElementChild.getElementsByTagName("input");
        var dni = inputs[0].value;
        var nombre = inputs[1].value;
        var horasContratadas = inputs[2].value;
        var table = document.getElementById("trabajadores");
        var tbody = table.children[1];
        var row = tbody.insertRow(0);
        var celda;
        celda = row.insertCell(0);
        celda.innerText = dni;
        celda = row.insertCell(1);
        celda.innerText = nombre;
        celda = row.insertCell(2);
        celda.innertText = horasContratadas;
        celda = row.insertCell(3);
        var modifica = document.createElement("button");
        modifica.textContent = "Editar";
        modifica.id = "btnEditar";
        modifica.classList = "modtrabajador";
        celda.appendChild(modifica);
        celda = row.insertCell(4);
        var elimina = document.createElement("button");
        elimina.textContent = "Eliminar";
        elimina.id = "btnEliminar";
        elimina.classList = "borrartrabajador";
        celda.appendChild(elimina);

        var empre = recuperarDatos();

        empre.trabajadores.push(new trabajador(dni, nombre, horasContratadas));
        grabarDatos(empre);
        mostrarTrabajadores();
        //cerramos el div modal de crear usuario
        var divModalTrabajador = document.getElementById("div-nuevoTrabajador");
        divModalTrabajador.style.display = "none";

        document.body.style.position = "inherit";
        document.body.style.height = "auto";
        document.body.style.overflow = "visible";

    })
        btnEditarEmpleado.addEventListener("click", function () 
        {
            var tr = this.parentNode.parentNode;
            var tds = tr.children;
            var dni = tds[0].textContent;
            var nombre = tds[1].textContent;
            var horario = tds[2].textContent;
            var table = document.getElementById("trabajadores");
            var tbody = table.children[1];
            var tfoot = table.children[2];
            var trTfoot=tfoot.children[0];
            var inputsTfoot=document.querySelectorAll("tfoot input");
            var posicion=this.parentNode.parentNode.sectionRowIndex;

            arrayTrabajadores.splice(posicion,1);
            tbody.deleteRow(posicion);
            inputsTfoot[0].innerText=dni;
            inputsTfoot[1].innetText=nombre;
            inputsTfoot[2].innerText=horario;
        })

   
    

    
   
    

   
    
    
   
    




















    btnAcceso.addEventListener("click", function () {

    })

})

function mostrarTrabajadores() {
    var respuesta = "";
    var table = document.getElementById("trabajadores");
    var tbody = table.children[1];
    var empresa = recuperarDatos();
    var numTrabajadores = empresa.trabajadores.length;
    for (let i = 0; i < numTrabajadores; i++) {
        respuesta += "<tr><td>";
        respuesta += empresa.trabajadores[i].dni;
        respuesta += "</td><td>";
        respuesta += empresa.trabajadores[i].nombre;
        respuesta += "</td><td>";
        respuesta += empresa.trabajadores[i].contrato;
        respuesta += "</td><td>";
        respuesta += "<button id='btnEditar' class='modtrabajador'>Editar</button>";
        respuesta += "</td><td>";
        respuesta += "<button id='btnEliminar' class='borrartrabajador'>Borrar</button>";
        respuesta += "</td></tr>";


    }
    tbody.innerHTML = respuesta; //codigo fuente HTML de la tabla
}






/**
 * Guarda la empresa en el localStorage
 * @param {string} objetoempresa 
 * @param {string} nombreCadena 
 * 
 */
function grabarDatos(objetoempresa) {
    var empresaCadena;
    empresaCadena = JSON.stringify(objetoempresa);
    localStorage.setItem("empresa", empresaCadena);
}
/**
 * @return {empresa} retorna el objeto empresa
 */
function recuperarDatos() {
    var cadena = localStorage.getItem("empresa");
    if (cadena) {
        var objetoEmpresa = JSON.parse(cadena);
        var nombreEmpresa = objetoEmpresa.nombre;
        var numSimul = objetoEmpresa.numTrabSimul;
        var numTrabajadores = objetoEmpresa.trabajadores.length;
        var horario = objetoEmpresa.horario;
        var lengthHorario = horario.length;
        var empre = new empresa(nombreEmpresa, numSimul);


        for (let i = 0; i < lengthHorario; i++) {
            var hora = objetoEmpresa.horario[i];
            empre.horario.push(hora);

        }
        for (let i = 0; i < numTrabajadores; i++) {
            var trabajadorLocal = objetoEmpresa.trabajadores[i];
            var dni = trabajadorLocal.dni;
            var nombre = trabajadorLocal.nombre;
            var horasContratada = trabajadorLocal.contrato
            var empleado = new trabajador(dni, nombre, horasContratada)
            empre.trabajadores.push(empleado);

        }

        return empre;


    }
    else {
        var empre = new empresa("", "");
    }
    return empre;
}
