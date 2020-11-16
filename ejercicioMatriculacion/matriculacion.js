window.addEventListener("load", function () {
    //manejador de evento para crear el usuario
    var btnAdd = document.getElementById("annadir");
    var btnMatricular = document.getElementById("matricular");
    var btnDesmatricular = document.getElementById("desmatricular");
    var btnMatricularTodos = document.getElementById("matTodos");
    var btnDesmatricularTodos = document.getElementById("desTodos");
    btnAdd.addEventListener("click", function () {
        var origen = document.getElementById("alumnos");
        var option = document.createElement("option");
        var codAlumno = this.form.codigo.value;
        var nombre = this.form.nombre.value;
        option.text = codAlumno + "," + nombre;
        origen.add(option);
    })

    //manejamos el evento para matricular un usuario
    btnMatricular.addEventListener("click", function () {
        var origen = document.getElementById("alumnos");
        var destino = document.getElementById("matriculados");
        console.log(alumnos.options[alumnos.selectedIndex]);
        destino.add(origen.options[alumnos.selectedIndex]);
   
    })

    btnDesmatricular.addEventListener("click", function () {
        var origen = document.getElementById("matriculados");
        var destino = document.getElementById("alumnos");
        var seleccionado = origen.options[origen.selectedIndex];
        var i=0;
        while(origen.options[i]!=null)
        {
            i++;
            destino.add(seleccionado);
            
        }
        destino.removeAttribute("selected");
    })

    btnMatricularTodos.addEventListener("click", function () {
        var origen = document.getElementById("alumnos");
        var destino = document.getElementById("matriculados");
        var salida = true;
        while (salida) {
            if (origen.options[0] == null) {
                salida = false;
            } else {
                destino.appendChild(origen.options.item(0));
            }
        }

    })

    btnDesmatricularTodos.addEventListener("click", function () {

    })
})