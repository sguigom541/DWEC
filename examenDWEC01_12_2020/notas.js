function alumno(nombre,asignaturas=[],notas=[]){
    this.nombre=nombre;
    this.asignaturas=asignaturas;
    this.notas=notas;
}

alumno.prototype.nota=function(asign){
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

alumno.prototype.setNota=function(asigCambio,nuevaNota){
    var asignatura = parseInt(asigCambio);
    if (!isNaN(asignatura)) {
        this.notas[asignCambiar] = nuevaNota;
    } else {
        var numAsignatura;
        for (let i = 0; i < this.asignaturas.length; i++) {
            if (this.asignaturas[i].localeCompare(asignCambiar) == 0) {
                numAsignatura = i;
            }
        }
        this.notas[numAsignatura] = nuevaNota;
    }
}