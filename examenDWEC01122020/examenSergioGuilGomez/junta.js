//Yo Sergio Guil Gómez estoy esta semana de forma presencial

window.addEventListener("load",function(){
    var tabla=document.getElementsByClassName("TableData");
    var nombres = tabla.tHead.getElementsByTagName("th");
    var trs=document.getElementsByTagName("tr");


    for(let i=0;i<trs.length;i++){
        trs[i].addEventListener("click",function(){

        })
    }





    var par = document.getElementsByClassName("cuerpo2Reducido");
    var tamanioPares = par.length;

    for(let i=0; i<tamanioPares; i++)
    {
        par[i].parentNode.style.background = "#D0CAC9";
    }
})