//Yo Sergio Guil Gómez estoy esta semana de forma presencial

function Alumno(nombre,asignaturas=[],notas=[]){
    this.nombre=nombre; //el nombre del alumno
    this.asignaturas=asignaturas; //las asignaturas del alumno
    this.notas=notas; //puntero a las notas del alumno
}

Alumno.prototype.nota = function(asign) {

    var asignatura = parseInt(asign);
    var nota;

    if (!isNaN(asignatura)) {
        nota = this.notas[asign]
    } else {
        var numAsignatura;
        for (let i = 0; i < this.asignaturas.length; i++) {
            if (this.asignaturas[i].localeCompare(asign) == 0) {
                numAsignatura = i;
            }
        }
        nota = this.nota[numAsignatura];
    }

    return nota
}

Alumno.prototype.setNota = function(asig, notaNueva) {
    var asignatura = parseInt(asig);
    if (!isNaN(asignatura)) {
        this.notas[asignCambiar] = nuevaNota;
    } else {
        var numAsignatura;
        for (let i = 0; i < this.asignaturas.length; i++) {
            if (this.asignaturas[i].localeCompare(asignCambiar) == 0) {
                numAsignatura = i;
            }
        }
        this.notas[numAsignatura] = notaNueva;
    }
}