window.addEventListener("load",function(){
    // manejador de evento para la ventana modal de crear trabajador
    var btnNewEmpresa=document.getElementById("menuEmpresa");
    var btnMenuUsuarios=document.getElementById("menuUsuarios");
    var btnPuestosDisponibles=document.getElementById("menuPuestosDisponibles");
    var btnEstadisticasEmpresa=document.getElementById("menuEstadisticasEmpresa");
    var btnFichar=document.getElementById("menuFichar");
    var btnModalNewTrabajador = document.getElementById("modal-newUser");
    var divModalTrabajador = document.getElementById("div-nuevoTrabajador");
    var btnCerrarModalTrabajador = document.getElementById("btnCerrarNewTrabajador");
    const aside=document.getElementById("menuTrabajadores");
    const main=aside.parentNode.children[1].children;
    btnModalNewTrabajador.addEventListener("click", function () {
        divModalTrabajador.style.display = "block";

        document.body.style.position = "static";
        document.body.style.height = "100%";
        document.body.style.overflow = "hidden";
    })

    btnCerrarModalTrabajador.addEventListener("click", function () {
        divModalTrabajador.style.display = "none";

        document.body.style.position = "inherit";
        document.body.style.height = "auto";
        document.body.style.overflow = "visible";
    })

    // manejadores de evento de los divs de la empresa

    
    btnNewEmpresa.addEventListener("click",function(){
        for (let i = 0; i < main.length; i++) {
            if(main[i].getAttribute("id")=="divEmpresa"){
                main[i].style.display="block";
            }
            else{
                main[i].style.display="none";
            }
            
        }
    })


   
    btnMenuUsuarios.addEventListener("click",function(){
        for (let i = 0; i < main.length; i++) {
            if(main[i].getAttribute("id")=="divTrabajadores"){
                main[i].style.display="block";
            }
            else{
                main[i].style.display="none";
            }
            
        }
    })
    
    btnPuestosDisponibles.addEventListener("click",function(){
        for (let i = 0; i < main.length; i++) {
            if(main[i].getAttribute("id")=="divPuestosDisponibles"){
                main[i].style.display="block";
            }
            else{
                main[i].style.display="none";
            }
            
        }
    })


    btnEstadisticasEmpresa.addEventListener("click",function(){
        for (let i = 0; i < main.length; i++) {
            if(main[i].getAttribute("id")=="divEstadisticas"){
                main[i].style.display="block";
            }
            else{
                main[i].style.display="none";
            }
            
        }
    })

    btnFichar.addEventListener("click",function(){
        for (let i = 0; i < main.length; i++) {
            if(main[i].getAttribute("id")=="menuFichar"){
                main[i].style.display="block";
            }
            else{
                main[i].style.display="none";
            }
            
        }
    })
    
})
