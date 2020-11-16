/* objetos creados con constructor*/

function Coche(marca,modelo,color)
{
    this.marca=marca | "";//se pone "" para que no sea undefined
    this.modelo=modelo | "";
    this.color=color | "";
}
debugger;
var coche1= new Coche("PEUGEOT","306","GRIS");