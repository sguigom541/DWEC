var Instituto={
    nombre:"IES LAS FUENTEZUELAS",
    clase:"",
    alumnos:[],
}
Instituto.almacenar=function(){
    var cadenaJSON;
    cadenaJSON=JSON.stringify(this);
    localStorage.setItem("datosInstituto",cadenaJSON);
}
Instituto.recuperar=function()
{
    var cadena= localStorage.getItem("datosInstituto");
    if(cadena)
    {
        var obj=JSON.parse(cadena);
        this.nombre=obj.nombre;
        this.clase=obj.clase;
        var numAlumnos=obj.alumnos.length;
        for(let i=0;i<numAlumnos;i++)
        {
            this.matricular(new Alumno(obj.alumnos[i].nombre,
                                        obj.alumnos[i].ape1,
                                        obj.alumnos[i].ape2,
                                        obj.alumnos[i].fechaNac))
        }
    }
}
function Alumno(nombre,ape1,ape2,fechaNac)
{
    this.nombre=nombre;
    this.ape1=ape1;
    this.ape2=ape2;
    this.fechaNac=fechaNac;
}

Instituto.matricular=function(alumno)
{
    this.alumnos.push(alumno);
    this.mostrar();
}

Instituto.desmatricular=function(indAlumno)
{
    this.alumnos.splice(indAlumno,1);
    this.mostrar();
}

Instituto.mostrar=function()
{
    var respuesta="";
    var tbody=document.getElementById("listado");
    var numAlumnos=this.alumnos.length;
    for(let i=0;i<numAlumnos;i++){
        respuesta+="<tr><td>";
        respuesta+=this.alumnos[i].nombre;
        respuesta+="</td><td>";
        respuesta+=this.alumnos[i].ape1;
        respuesta+="</td><td>";
        respuesta+=this.alumnos[i].ape2;
        respuesta+="</td><td>";
        respuesta+=this.alumnos[i].fechaNac;
        respuesta+="</td><td>";
        respuesta+="<button onclick='Instituto.desmatricular("+i+");Instituto.almacenar()'>Borrar</button";
        respuesta+="</td></tr>";
        
        
    }
    tbody.innerHTML=respuesta; //codigo fuente HTML de la tabla
}


window.addEventListener("load",function()
{
    var botMatricular=document.getElementById("matricular");
        botMatricular.onclick=function()
        {
            alert("matriculando");
            var nombre=document.getElementById("nombre").value;
            var ape1=document.getElementById("apell1").value;
            var ape2=document.getElementById("apell2").value;
            var fechaNac=document.getElementById("fNacimiento").value;
            if (nombre!="" && ape1!="" && ape2!="" && fechaNac!="")
            {
                Instituto.matricular(new Alumno(nombre,ape1,ape2,fechaNac));
                Instituto.almacenar();
            }
           
           
            
           
        }
        cabNombre.onclick=function()
        {
            alert("ordenando por nombre");
            
            Instituto.alumnos.sort(function(a,b)
            {
                
                return a.nombre.localeCompare(b.nombre);
            });
            Instituto.almacenar();
            Instituto.mostrar();
        }
        cab1Apell.onclick=function()
        {
            alert("ordenando por Apellido 1");
            Instituto.alumnos.sort(function(a,b)
            {
                
                return a.ape1.localeCompare(b.ape1);
            });
            Instituto.almacenar();
            Instituto.mostrar();
        }
        cab2Apell.onclick=function()
        {
            alert("ordenando por Apellido 2");
            Instituto.alumnos.sort(function(a,b)
            {
                
                return a.ape2.localeCompare(b.ape2);
            });
            Instituto.almacenar();
            Instituto.mostrar();
        }
        cabFNacim.onclick=function()
        {
            alert("ordenando por fecha de nacimiento");
            Instituto.alumnos.sort(function(a,b)
            {
                
                return a.fechaNac.localeCompare(b.fechaNac);
            });
            Instituto.almacenar();
            Instituto.mostrar();
        }
    Instituto.recuperar();
    Instituto.mostrar();
})