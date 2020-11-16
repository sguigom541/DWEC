/*


2.Función que pasandole una fecha de nacimiento cuente los dias que llevamos vivos.



4.Función que pasándole dos fechas devuelve true si la primera
es posterior,0 si son la misma y -1 si es anterior.

5.Función que me diga si me puedo tomar un cubata.

6.Función que me diga cuantos días tengo que esperar para
tomarme el cubata.

7.Fecha de jubilación (67 años)

8.Función que me diga los años, meses y días para jubilarme.

9.Función que me cuente los jueves que llevo vivo.

10.Función que coja las fechas de un textArea y las ordene.

11.Función que me valide si una hora es válida.

12.Función que valide los minutos que me quedan para ver a mi pareja.
*/

function fechacorrecta(fecha)
{
    
    var fechaEntera=fecha.split("/");
    var dia=fechaEntera[0];
    var mes=fechaEntera[1];
    var anio=fechaEntera[2];
    dia=parseInt(dia);
    mes=parseInt(mes);
    anio=parseInt(anio);
    var fechaNueva=new Date(parseInt(fechaEntera[0]),parseInt(fechaEntera[1]-1),parseInt(fechaEntera[2]));
    
    if(fechaNueva.getDay()===dia && fechaNueva.getMonth()===mes && fechaNueva.getFullYear()===anio)
    {
        return alert("las dos fechas son iguales");
    }
    else
    {
        return alert("las dos fechas no son iguales");
    }
}

// 1.función que pasándole una cadena formato español dd/mm/yyyy devuelvo true si la fecha es válida.

function CompararFechas()
{
	//Comprobamos que tenga formato correcto
	var fecha_aux = document.getElementById("Fecha").value.split("/");
 	var Fecha1 = new Date(parseInt(fecha_aux[2]),parseInt(fecha_aux[1]-1),parseInt(fecha_aux[0]));

 	//Comprobamos si existe la fecha
	if (isNaN(Fecha1)){
		alert("Fecha introducida incorrecta");
		return false;
	}
	else{
		alert("La fecha que has introducido es "+Fecha1);
	}
}

//2.Función que pasandole una fecha de nacimiento cuente los dias que llevamos vivos.
function aniosvivos(fecha)
{
    var fechaEntera=document.getElementById("Fecha").value;
    fechaEntera=fechaEntera.split("/");
    var dia=fechaEntera[0];
    var mes=fechaEntera[1];
    var anio=fechaEntera[2];
    dia=parseInt(dia);
    mes=parseInt(mes);
    anio=parseInt(anio);
    var fechaIntroducida=new Date(parseInt(fechaEntera[0]),parseInt(fechaEntera[1]-1),parseInt(fechaEntera[2]));
    var fechaActual=new Date();
    var milisegundospordia=86400000;
    var diferenciamili=fechaActual-fechaIntroducida;
    var diferenciadias=diferenciamili/milisegundospordia;
   
    alert("Los dias que llevo vivo son " +Math.floor(diferenciadias)) //los 86400000 quiere decir la cantidad de milisegundos que tiene un dia

}

//3.Que pasándole una fecha devuelve el día de la semana
function devuelvediasemana()
{
    var fechaEntera=document.getElementById("Fecha").value;
    fechaEntera=fechaEntera.split("/");
    var dia=fechaEntera[0];
    var mes=fechaEntera[1];
    var anio=fechaEntera[2];
    dia=parseInt(dia);
    mes=parseInt(mes);
    anio=parseInt(anio);
    var fechaCompleta= new Date(anio,mes-1,dia);
    var dias = ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'];
    var diaEnNumero=fechaCompleta.getDay();
    var nombreDia=dias[diaEnNumero];

    alert("hoy es "+nombreDia);
    
    
}

//4.Función que pasándole dos fechas devuelve true si la primera es posterior,0 si son la misma y -1 si es anterior.
function comparaFechas2(f1,f2)
{
    var respuesta=f1.getTime()-f2.getTime();
    if (respuesta!=0)
    {
        respuesta=respuesta/Math.abs(respuesta);
        return respuesta;
    }
}
function comparadorfechas()
{
    var fecha1Nueva=document.getElementById("Fecha1").value;
    fecha1Nueva=fecha1Nueva.split("/");
    var dia=fecha1Nueva[0];
    var mes=fecha1Nueva[1];
    var anio=fecha1Nueva[2];

    var fecha2Nueva=document.getElementById("Fecha2").value;
    fecha2Nueva=fecha2Nueva.split("/");
    var dia2=fecha2Nueva[0];
    var mes2=fecha2Nueva[1];
    var anio2=fecha2Nueva[2];
    
    var date1=new Date(parseInt(anio,mes-1,dia));
    var date2=new Date(parseInt(anio2,mes2-1,dia2));
    
    if(date1>date2)
    {
        alert("La primera fecha es posterior a la segunda");
    }
    else if(date1===date2)
    {
        alert("Las dos fechas son iguales");
    }
    else if(date1<date2)
    {
        alert("La segunda fecha es anterior a la primera");
    }
}

//5.Función que me diga si me puedo tomar un cubata.
function tiempoHasta()
{
    f1=new Date(2005,9,10);
    f2=f1;
    f2.setFullYear(f1.getFullYear()+18);
}
function calcularEdad()
{
    var fecha1Nueva=document.getElementById("fechaNac").value;
    fecha1Nueva=fecha1Nueva.split("/");
    var dia=fecha1Nueva[0];
    var mes=fecha1Nueva[1];
    var anio=fecha1Nueva[2];
    var fechaActual=new Date();
    var fechaNac=new Date(anio,mes-1,dia);
    var edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    if(edad>=18)
    {
        alert("Puedo tomarme un cubata");
    }
    else
    {
        alert("Aún no puedo!")
    }
}

//6.Función que me diga cuantos días tengo que esperar para tomarme el cubata.
function esperandoalcubata()
{
    var fecha1Nueva=document.getElementById("fechaNac").value;
    fecha1Nueva=fecha1Nueva.split("/");
    var dia=fecha1Nueva[0];
    var mes=fecha1Nueva[1];
    var anio=fecha1Nueva[2];
    var fechaActual=new Date();
    var fechaNac=new Date(anio,mes-1,dia);
    var mayoredad=fechaNac.setFullYear()+18;
    var diasrestantes=fechaActual-mayoredad;
    
    if(diasrestantes>0)
    {
        alert("Aún no puedo, me faltan: "+diasrestantes/1000*60*60*24+ "días");
    }
    else if(diasrestantes===0)
    {
        alert("Oleeee ");
    }
    else if(diasrestantes<0)
    {
        alert("ya me he tomado unos cuantos");
    }
}

//7.Función que me diga la fecha de jubilación(67 años)

function cuantoquedaparajubilarme()
{
    var fecha1Nueva=document.getElementById("fechaNac").value;
    fecha1Nueva=fecha1Nueva.split("/");
    var dia=fecha1Nueva[0];
    var mes=fecha1Nueva[1];
    var anio=fecha1Nueva[2];
    var fechaActual=new Date();
    var fechaNac=new Date(anio,mes-1,dia);
    var edad = fechaActual.getFullYear() - fechaNac.getFullYear()
    var diferencia=67-edad;
    alert("Me quedan "+diferencia+ "años para jubilarme");
}

//9.
function juevevivos()
{
    f1=new Date();
    
}





//10.
function ordenafechas()
{
    var vector=document.getElementById("fechas").value.split("\n");

    vector.sort(
        function(a,b)
        {
            var f1=a.split("/");
            var f2=a.split("/");
            return (new Date(f1[2],f1[1]-1,f1[0]))-new Date(f2[2],f2[1]-1,f2[0])
            
        }

    )
    document.getElementById("fechas").value=vector.join("\n");
}