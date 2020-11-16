
function esmayoredad(edad) 
{
    return (edad >= 18) ? true : false;

    /*if (edad>=18)
    {
        return true;
        alert("usted es mayor de edad")
    }
    else
    {
        return false;
        alert("usted no es mayor de edad")
    }  */
}

function proximodiatrabajo(diaSemana) 
{
    /*
    var diaDevuelto;
    
    diaDevuelto=document.getElementById("diaelegido").value
    if(diaDevuelto==="viernes")
    {
        alert("te quedan tres dias para trabajar");
    }
    else if(diaDevuelto==="sabado")
    {
        alert("te quedan dos días para trabajar");
    }
    else if(diaDevuelto==="domingo")
    {
        alert("te queda un día para trabajar");
    }
   else if(diaDevuelto!="viernes" && diaDevuelto!="sabado" && diaDevuelto!="domingo")
   {
       alert("te queda un dia para trabajar");
   }*/
    var respuesta;
    switch (diaSemana) 
    {
        case "lunes":
            respuesta = 1;
            break;
        case "martes":
            respuesta = 1;
            break;
        case "miercoles":
            respuesta = 1;
            break;
        case "jueves":
            respuesta = 1;
            break;
        case "viernes":
            respuesta = 3;
            break;
        case "sabado":
            respuesta = 2;
            break;
        case "domingo":
            respuesta = 1;
            break;
        default:
            respuesta= "Este día no existe en la tierra, vete a Marte";
    }

}

function validadni(dni) 
{
    var cadena="TRWAGMYFPDXBNJZSQVHLCKET";
    var letra= dni[8];
    dni[8]="";
    var numero= "";
    for(let i=0;i<8;i++)
    {
        numero+=dni[i];
    }
    var posLetra=numero%23;
    return (letra==cadena[posLetra])?true:false;
}

function generaTablaMultiplicar(numero) 
{
    var respuesta="<table><tbody>";
    var linea;
    

    for(let i=1;i<=10;i++)
    {
        linea="<tr>";
        linea+="<td>";
        linea+=numero;
        linea+="</tr>";

        linea+="<td>";
        linea+="X";
        linea+="</td>";

        linea+="<td>";
        linea+=i;
        linea+="</td>";

        linea+="<td>";
        linea+=numero*i;
        linea+="</td>";

        linea+="</tr>";

        respuesta+=linea;
    }
    respuesta+="</tbody></table>"
    return respuesta;

}

function cuentatexto(letra,texto) 
{
    var contador=0;
    for(let i=0;i<texto.length;i++)
    {
       if(texto[i]==letra)
        {
            contador++;
        } 
    }
    
        return contador;
}

function contar()
{
    var inicio=parseInt(document.getElementById("inicio").value);
    var fin=document.getElementById("fin").value-0;
    var texto="";
    for (let i=inicio;i<=fin;i++)
    {
        texto+=i+"<br/>";
        document.getElementById("resultado").innerHTML=texto;
    }
}

function grabar()
{
    var nombre=document.getElementById("nombre").value;
    nombresSinOrdenar.push(nombre);
    imprimir(nombresSinOrdenar);
}

function imprimir(vector)
{
    document.getElementById("listado").innerHTML= 
    vector.join("<br/>");
}
var nombresSinOrdenar=[];
var nombresOrdenados=[];