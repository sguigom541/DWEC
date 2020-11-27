window.addEventListener("load", function () {
    const crono = document.getElementById("hora");

    /**
     * La clase empresa
     */
    function Empresa() {
        this.empleados = [];
        this.enCasa = [];
    }
    /**
     * Metodo de la clase Empresa que añade un trabajador nuevo
     */


    Empresa.prototype.annadir = function (dni) {
        var trabajador = new Trabajador(dni);
        this.empleados.push(trabajador);
        trabajador.comenzar();
    }






    /**
     * La clase trabajador
     */

    function Trabajador(dni) {
        this.dni = dni;
        this.temporizador = null;
        this.comienzo = new Date();
        this.tiempoTrabajado = 0;
    }

    /**
     * 
     */
    Trabajador.prototype.comenzar = function () {
        //fecha inicial (en el momento de pulsar)
        var acumularTime = 0; 
        var comienzo = this.comienzo;
        this.tiempoTrabajado = setInterval(() => {
            timeActual = new Date();
            acumularTime = timeActual - comienzo;
            acumularTime2 = new Date();
            acumularTime2.setTime(acumularTime);
            cc = Math.round(acumularTime2.getMilliseconds() / 10);
            ss = acumularTime2.getSeconds();
            mm = acumularTime2.getMinutes();
            hh = acumularTime2.getHours() - 18;
            if (cc < 10) { cc = "0" + cc; }
            if (ss < 10) { ss = "0" + ss; }
            if (mm < 10) { mm = "0" + mm; }
            if (hh < 10) { hh = "0" + hh; }
            crono.innerHTML = hh + " : " + mm + " : " + ss + " : " + cc;
        }, 1000);
    }

    /**
     * 
     */
    Trabajador.prototype.parar = function () {
        clearInterval(this.tiempoTrabajado);
    }


    document.getElementById("iniciar").addEventListener("click", function () {
        let dni = document.getElementById("dni").value;
        let empresa = new Empresa();
        empresa.annadir(dni);

    })
});

