window.addEventListener("load" ,function(){

    document.getElementById("propietario").addEventListener("click",function(){
        
        var divProp=document.getElementById("contenedor-propietario");
        divProp.classList.toggle("oculto");
        
        
    })
    
    document.getElementById("vehiculo").addEventListener("click",function(){
        var divVehiculo=document.getElementById("contenedor-vehiculo");
        divVehiculo.classList.toggle("oculto");
    })

    document.getElementById("garantia").addEventListener("click",function(){
        var divGarantia=document.getElementById("contenedor-garantia");
        divGarantia.classList.toggle("oculto");
    })
    
    /*manejador de evento para habilitar checkboxes en el caso de pinchar en la garantía a terceros */
    document.getElementById("aTerceros").addEventListener("click",function(){
        var inputs=document.getElementsByTagName("input");
        
        for(let i=0;i<inputs.length;i++){
            if(inputs[i].type =="checkbox"){
                inputs[i].disabled=false;
            }
            
        }

    })
    
    document.getElementById("todoRiesgoConFranquicia").addEventListener("click",function(){
        var estadoInput=document.getElementById("tipoTodoRiesgoConFranquicia");
        if(estadoInput.disabled==true){
            estadoInput.disabled=false;
        }
        else{
            estadoInput.disabled=true;
        }
    })
    

    document.getElementById("enviar").addEventListener("click",function(ev){
        ev.preventDefault();
        
    })
})

