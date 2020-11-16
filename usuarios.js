var Empresa={
    nombre:"Empresa Jaén",
    cif:"H-1111111H",
    usuarios:[],
}

Empresa.guardaUsuarioEmpresa= function(usuario)
{
    this.usuarios.push(usuario);
    this.mostrar();
}

Empresa.borrarUsuario=function(indUsuario)
{ //indice coche
    this.usuarios.splice(indUsuario,1);
    
    this.mostrar();
}
Empresa.almacenar=function(){
    var cadenaJSON;
    cadenaJSON=JSON.stringify(this);
    localStorage.setItem("datosEmpresa",cadenaJSON);
}
Empresa.recuperar=function()
{
    var cadena= localStorage.getItem("datosEmpresa");
    if(cadena)
    {
        var obj=JSON.parse(cadena);
        this.nombre=obj.nombre;
        this.cif=obj.cif;
        var numUsuarios=obj.usuarios.length;
        for(let i=0;i<numUsuarios;i++)
        {
            this.guardaUsuarioEmpresa(new Usuario(obj.usuarios[i].dni,
                obj.usuarios[i].nombre,
                obj.usuarios[i].fechaNac))
        }
    }
}
function editar(usuario)
{
    var indiceUsuario=usuario;
    var respuesta="";
    var tfooter=document.getElementById("footer");
  
        respuesta+="<tr><td>";
        respuesta+="<input type='text' name='dni' id='dni2'>";
        respuesta+="</td><td>";
        respuesta+="<input type='text' name='nombre' id='nombre2'>";
        respuesta+="</td><td>";
        respuesta+="<input type='text' name='fechaNac' id='fechaNac2'>";
        respuesta+="</td><td>";
        respuesta+="<button onclick='Empresa.modificarUsuario("+indiceUsuario+");Empresa.almacenar()'>Guardar</button";
        respuesta+="</td></tr>";
    
    tfooter.innerHTML=respuesta; //codigo fuente HTML de la tabla

}

Empresa.modificarUsuario=function(indUsuario)
{
    var dni=document.getElementById("dni2").value;
    var nombre=document.getElementById("nombre2").value;
    var fechaNacimiento=document.getElementById("fechaNac2").value;
    var numUsuarios=this.usuarios.length;
    for(let i=0;i<numUsuarios;i++)
    {
        if(i==indUsuario)
        {
            this.usuarios[i].dni=dni;
            this.usuarios[i].nombre=nombre;
            this.usuarios[i].fechaNac=fechaNacimiento;
            break;

        }
    }
    this.mostrar();
    
}
Empresa.mostrar = function()
{
    var respuesta="";
    var tbody=document.getElementById("usuarios");
    var numUsuarios=this.usuarios.length;
    for(let i=0;i<numUsuarios;i++){
        respuesta+="<tr><td>";
        respuesta+=this.usuarios[i].dni;
        respuesta+="</td><td>";
        respuesta+=this.usuarios[i].nombre;
        respuesta+="</td><td>";
        respuesta+=this.usuarios[i].fechaNac;
        respuesta+="</td><td>";
        respuesta+="<button onclick='editar("+i+")'>Editar</button<hr><button onclick='Empresa.borrarUsuario("+i+");Empresa.almacenar()'>Borrar</button";
        respuesta+="</td></tr>";
        
        
    }
    tbody.innerHTML=respuesta; //codigo fuente HTML de la tabla
}
function Usuario(dni,nombre,fechaNac)
{
    this.dni=dni;
    this.nombre=nombre;
    this.fechaNac=fechaNac;
}

function guardarUsuario()
{
    var dni=document.getElementById("dni").value;
    var nombre=document.getElementById("nombre").value;
    var fechaNacimiento=document.getElementById("fechaNac").value;
    
    Empresa.guardaUsuarioEmpresa(new Usuario(dni,nombre,fechaNacimiento));
   
}

window.addEventListener("load",function(){
    
    Empresa.recuperar();
    Empresa.mostrar();
})
