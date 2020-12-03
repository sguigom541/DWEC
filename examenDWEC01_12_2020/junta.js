window.addEventListener("load", function () {
    //todos los trs de la tabla
    const rows = document.querySelectorAll("tbody tr");
    //creamos el vector con el nombre de las notas del alumno
    var nombres = document.querySelectorAll("thead tr th");
    var asignaturasAlumno = [];
    for (let i = 1; i < nombres.length; i++) {
        asignaturasAlumno.push[nombres[i].innerText];

    }


    //creamos los alumnos
    for (let i = 0; i < rows.length; i++) {
        rows[i].insertCell[9] = new alumno(rows[i].children[0], asignaturasAlumno, devuelveNotasAlumno(rows[i].children[0].innerText));

    }




    function devuelveNotasAlumno(nombre) {
        
        var notas = [];
        for (let i = 1; i < rows.length; i++) {
            debugger;
            if (nombre == rows[i].previousElementSibling.children[0].innerText) {
                for (j = 0; j < rows[i - 1].children.length; j++) {
                    if(rows[i - 1].children[j+1].innerText!="")
                    notas.push(rows[i - 1].children[j+1].innerText);
                    console.log(notas);
                }

            }
        }
        return notas;
    }

})