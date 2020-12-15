/** leemo*/
/**La clase Empresa */

function empresa(cif,nombre){
    this.cif=cif;
    this.nombre=nombre;
    this.horarioEmpresa=[];
    this.trabajadores=[];

}

function leeLocalStorage(){
     var existe=localStorage.getItem("empresa");
     if(existe!=null)
     {
        var empresa=JSON.parse(localStorage.getItem("empresa"));
        
     }
     return empresa;
     
}
empresa.prototype.annadeTrabajador=function(trabajador){

    this.trabajadores.push(trabajador);
}

empresa.prototype.modificaTrabajador=function(trabajador){
    var encontrado=false;

        var i=0;
        while(!encontrado && i<this.trabajadores.length){
            if(this.trabajadores[i].dni==trabajador.dni){
                encontrado=true;
            }
            i++;
        }
        
    return trabajadorencontrado;

}

empresa.prototype.borraTrabajador=function(trabajador){

}

empresa.prototype.horaComienzo=function (horaInicio){
    var horaHtml = document.getElementById("hora");
    var partes = horaHtml.innerHTML.split(":");
    var ahora = new Date();
    var futuro = new Date();

    futuro.setUTCHours(ahora.getUTCHours() + (partes[0] - 0));
    futuro.setUTCMinutes(ahora.getUTCMinutes() + (partes[1] - 0));
    futuro.setUTCSeconds(ahora.getUTCSeconds() + (partes[2] - 0));

    
}
empresa.prototype.horaFIn=function(horaFin){


    var fin=new Date();
}

/**La clase trabajador */

function trabajador(dni, nombre, contrato) {
    this.dni = dni;
    this.nombre = nombre;
    this.contrato = contrato;
    this.periodosTrabajo = [];
    this.periodosDescanso = [];
    this.comienzoT = "";
    this.comienzoD = "";
}
trabajador.prototype.comenzarT = function() {
    this.comienzoT = new Date();
}

trabajador.prototype.parar = function() {
    var ahora = new Date();
    var periodo = [];
    periodo[0] = this.comienzoT.getTime();
    periodo[1] = ahora.getTime();
    this.periodosTrabajo.push(periodo);
}