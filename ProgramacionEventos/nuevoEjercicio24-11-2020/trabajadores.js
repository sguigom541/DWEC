window.addEventListener("load", function () {
    function Empresa() {
        this.empledos = [];
        this.trabajando = [];
        this.parados = [];
    }

    Empresa.prototype.annadirEmpleado = function (dni) {
        var trabajador = new Trabajador(dni);
        this.empledos.push(trabajador);
        trabajador.empezar();
    }


    function Trabajador(dni) {
        this.dni = dni;
        this.tiempoTrabajado = 0;//en milisegundos
        this.temporizador = null;
        this.fechaHoraUltimoComienzo=0;
        
    }

    Trabajador.prototype.empezar = function () {
        this.fechaHoraUltimoComienzo=new Date();
        
    }
    Trabajador.prototype.descanso=function(){
        var ahora=new Date();
        var tiempoMS=ahora.getTime()-this.fechaHoraUltimoComienzo.getTime();
        this.tiempoTrabajado+=tiempo;
        this.fechaHoraUltimoComienzo=0;
    }

    function d2(numero) {
        return ((numero<10)?"0":"")+numero;
    }
    Trabajador.prototype.tiempoTr=function () {
        var ahora=new Date();
        var tiempoMS=ahora.getTime()-this.fechaHoraUltimoComienzo.getTime();
        var tTrabajado=new Date(this.tiempoTrabajado+tiempoMS);
        return d2(tTrabajado.getUTCHours())+":"+d2(tTrabajado.getUTCMinutes())+":"+d2(tTrabajado.getUTCSeconds());
    }
    
})


