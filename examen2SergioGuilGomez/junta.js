window.addEventListener("load",function(){
    var tabla= document.querySelectorAll("table");
    var cabecera=tabla[0].children[0].rows[0].cells;
    var tamanio=cabecera.length;
    var arrayAsignaturas=[];
    for (let i = 0; i < tamanio; i++) {
        arrayAsignaturas.push(cabecera[i].innerText)
    }
    var body=tabla[0].children[1];
    var tamanioBody=body.rows.length;
    for (let i = 0; i < tamanioBody; i++) {
        var arrayNotas=[];
        var fila=body.rows[i];
        var nombre=fila.cells[0].innerText;
        for(let j=1;j<tamanio;j++){
            arrayNotas.push(fila.cells[j].innerText)
            var nota=parseInt(fila.cells[j].innerText)
            if(!isNaN(nota)){
                fila.cells[j].addEventListener("dbclick",function(){
                    if(this.contentEditable==false){
                        this.contentEditable==true;
                    }else{
                        this.contentEditable=false
                    }
                    
                })
            }
            fila.alumno=new Alumno(nombre,arrayAsignaturas,arrayNotas);
            if(!parImpar(i)){
                fila.style.backgroundColor="#7a787d"
            }
        }
    }

    //continuacion del examen
    var filas = tabla[0].children[0].firstElementChild;
    filas.insertCell(1).innerText = "Media";
    filas.insertCell(2).innerText = "Suspensas";
    for (let i = 0; i < tamanioBody; i++) {
       body.rows[i].alumno.notas
    }

})
function agregarColumna(colCount){
    var table = document.getElementById('table');
   var rowCount = table.rows.length;
   for(var i=0; i<rowCount; i++){            
         var row = table.rows[i];
         row.insertCell(colCount);                 
  }
}
function parImpar(num){
    var valor=parseInt(num);
    var tipo=(valor%2)?"impar":"par";
    if(tipo=="par"){
        return true;
    }else{
        return false;
    }
}