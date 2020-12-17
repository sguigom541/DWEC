window.addEventListener("load",function(){
    importarScript("./script/libreria.js");
    importarScript("./script/empresa.js");
     // Variables
    const btnCrearEmpresa=document.getElementById("crearEmpresa");
    const btnCrearTrabajador=document.getElementById("crearTrabajador");
    const btnAcceso=document.getElementById("acceso");
    const btnModTrabajador=document.getElementById("modEmpleado");
    const btnBorrarTrabajador=document.getElementById("borrarEmpleado");

    btnCrearEmpresa.addEventListener("click",function(){
        var header=document.getElementsByClassName("header");
        var formRegEmpresa=this.parentNode.parentNode;
        var inputs=formRegEmpresa.firstElementChild.getElementsByTagName("input");
        var nombreEmpresa=inputs[0].value;
        var horaInicio=inputs[1].value;
        var horaFin=inputs[2].value;
        var numTrabSimul=inputs[3].value;
        
        var em=new empresa(nombreEmpresa,horaInicio,horaFin,numTrabSimul);
        grabarEmpresa(em,"empresa");
        header[0].children[0].innerText=em.nombre;
    })
    btnCrearTrabajador.addEventListener("click",function(){

    })
    btnAcceso.addEventListener("click",function(){

    })

})

/**
 * Guarda la empresa en el localStorage
 * @param {string} objetoempresa 
 * @param {string} nombreCadena 
 * 
 */
function grabarEmpresa(objetoempresa){
    var empresaCadena;
    empresaCadena=JSON.stringify(objetoempresa);
    localStorage.setItem("empresa",empresaCadena);
}
/**
 * @return {empresa} retorna el objeto empresa
 */
function recuperarEmpresa(){
    var cadena= localStorage.getItem();
    if(cadena){
        var objetoEmpresa=JSON.parse(cadena);
        var nombreEmpresa=objetoEmpresa.nombre;
        var horaIn=objetoEmpresa.horaInicio;
        var horaFN=objetoEmpresa.horaFin;
        var numSimul=objetoEmpresa.numTrabSimul;
        var numTrabajadores=objetoEmpresa.trabajadores.length;
        var horario=objetoEmpresa.horario;
        var lengthHorario=horario.length;
        var empre=new empresa(nombreEmpresa,horaIn,horaFN,numSimul);


        for (let i = 0; i < lengthHorario; i++) {
            var hora=objetoEmpresa.horario[i];
            empre.horario.push(hora);
            
        }
        for (let i = 0; i < numTrabajadores; i++) {
            var trabajadorLocal=objetoEmpresa.trabajadores[i];
            var dni=trabajadorLocal.dni;
            var nombre=trabajadorLocal.nombre;
            var horasContratada=trabajadorLocal.contrato
            var empleado=new trabajador(dni,nombre,horasContratada)
            empre.trabajadores.push(empleado);
            
        }
        
        return empre;

       
    }
    else{
        var empre=new empresa("","");
    }
    return empre;
}

/**
 * 
 * @param {string} nombre la url del script a importar 
 */
function importarScript(nombre) {
    var s = document.createElement("script");
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}