
/*Constructor Alumno(n*/
function Alumno(nombre,ape1,ape2,fechaNac)
{
    this.nombre=nombre;
    this.ape1=ape1;;
    this.ape2=ape2;
    this.fechaNac=fechaNac;
}
//valor de nacionalidad por defecto
Alumno.prototype.nacionalidad="Española";

/*for(prop in obj1){
    console.log(prop+"="+obj1[prop]+"\n");
}*/

/*Método para el nombre completo*/ 
Alumno.prototype.nombrecompleto=function()
{
    return this.ape2+","+this.ape1+","+this.nombre;
}

/*Metodo para calcular la edad*/
Alumno.prototype.edad=function()
{
   var partes=this.fechaNac.split("/");
   var fNac=new Date(partes[2],partes[1]-1,partes[0]);
   return (new Date((new Date())-fNac)).getFullYear()-1970;
}

Alumno.prototype.presentate= function()
{
    return "Hola soy "+this.nombrecompleto();
}