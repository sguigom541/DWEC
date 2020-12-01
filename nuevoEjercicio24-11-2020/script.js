var Empresa = {
    nombre: "Empresa",
    //array que guarda las personas que trabajan en la empresa cuando se crea una nueva persona
    trabajadores: [],
    //array que guarda los trabajadores que trabajan actualmente
    trabajando: [],
    //array que guarda los trabajadores que ya han terminado la jornada laboral
    finJornada: []
}

var Trabajador = function (dni) {
    //DNI del empleado
    this.dni = dni;

    //cuando empieza a trabajar el trabajador
    this.horaInicio = new Date();

    //estado en que se encuentra el trabajador
    this.estado = 1;

    //cuando vuelve a comenzar a trabajar el trabajador
    this.ultimoComienzo = this.horaInicio;

    //tiempo trabajando, lo guardamos en milisegundos
    this.tiempoTrabajoMili = 0;

    //tiempo de trabajo
    this.temporizador = 0;

    this.calcularTiempo=function(){
        if(this.estado==1){
             this.temporizador=this.tiempoTrabajoMili +(Math.round((new Date().getTime()-this.ultimoComienzo.getTime())/(1000)));
         }else{
             this.tiempoTrabajoMili=this.temporizador;
         }
    }



}
Empresa.formatHour=function(date=new Date()){
    return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}
Trabajador.prototype.tiempoTrabajado = function () {
    var ahora = new Date();
    //se resta la hora del ultimo comienzo
    var tiempoMs = ahora.getTime() - this.ultimoComienzo.getTime();
    var trabajado = new Date(this.tiempoTrabajoMili + tiempoMs);

    return d2(trabajado.getUTCHours()) + ":" +
        d2(trabajado.getUTCMinutes()) + ":" +
        d2(trabajado.getUTCSeconds());
}

function d2(numero) {
    return ((numero < 10) ? "0" : "") + numero;
}

//función que muestra los trabajadores que se encuentran trabajando

Empresa.movTrabajadores = function () {
    var tablaTrabajando = document.getElementById("activos").tBodies[0];
    tablaTrabajando.innerHTML = "";

    //bucle que recorre el array de trabajadores trabajando y lo pinta en la tabla
    for (trabajador of Empresa.trabajando) {
        var row = tablaTrabajando.insertRow(0);
        row.trabajador = trabajador;
        var celda = row.insertCell(0);
        celda.innerHTML = trabajador.dni;
        var comienzo = trabajador.horaInicio.getDate() + "/" + trabajador.horaInicio.getMonth() + 1 + "/" +
            trabajador.horaInicio.getFullYear() + " " + trabajador.horaInicio.getHours()
            + ":" + trabajador.horaInicio.getMinutes() + trabajador.horaInicio.getSeconds();
        celda = row.insertCell(1);
        celda.innerHTML = comienzo;

        celda = row.insertCell(2);
        celda.innerHTML = trabajador.tiempoTrabajado();
        trabajador.temporizador = trabajador.tiempoTrabajado();

        var botPausar = document.createElement("button");
        botPausar.type = "button";
        botPausar.id = "pausar";
        botPausar.textContent = "Pausar";

        var botParar = document.createElement("button");
        botParar.type = "button";
        botParar.id = "parar";
        botParar.textContent = "Parar";

        botPausar.addEventListener("click", btnClickPausar);
        botParar.addEventListener("click", btnClickParar);
        celda = row.insertCell(3);
        celda.appendChild(botPausar);
        celda.appendChild(botParar);

    }
}
Empresa.trabajadoresParados = function () {
    var tablaTer = document.getElementById("tablaTerminados").tBodies[0];
    tablaTer.innerHTML = "";

    //bucle que recorre el array de trabajadores trabajando y lo pinta en la tabla
    for (trabajador of Empresa.finJornada) {
        var row = tablaTer.insertRow(0);
        row.trabajador = trabajador;

        var celda = row.insertCell(0);
        celda.innerHTML = trabajador.dni;

        var comienzo = trabajador.horaInicio.getDate() + "/" + trabajador.horaInicio.getMonth() + 1 + "/" +
            trabajador.horaInicio.getFullYear() + " " + trabajador.horaInicio.getHours()
            + ":" + trabajador.horaInicio.getMinutes() + trabajador.horaInicio.getSeconds();
        celda = row.insertCell(1);
        celda.innerHTML = comienzo;

        celda = row.insertCell(2);
        celda.innerHTML = trabajador.temporizador;

    }
}




function btnClickParar() {

    var trabajador = this.parentElement.parentElement.trabajador;
    var i = Empresa.trabajando.indexOf(trabajador);
    trabajador.temporizador = trabajador.tiempoTrabajado();
    if (i >-1) {
        Empresa.trabajando.splice(i, 1);
    }
    Empresa.finJornada.push(trabajador);
}
function btnClickPausar() {

}






window.addEventListener("load", function () {
    document.getElementById("fichar").addEventListener("click", function () {

        var trabajador = new Trabajador(this.previousElementSibling.value);
        Empresa.trabajadores.push(trabajador);
        Empresa.trabajando.push(trabajador);
        Empresa.movTrabajadores();
    })

    setInterval(Empresa.movTrabajadores, 1000);
    setInterval(Empresa.trabajadoresParados, 1000);
})