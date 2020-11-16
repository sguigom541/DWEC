window.addEventListener("load",function(){
    var btnEnviar=document.getElementById("enviar");
    var formulario=document.getElementById("formulario1");
    btnEnviar.addEventListener("click",function(ev){
        ev.preventDefault();
        valor=this.form.dni.value;
        var partes=/^(\d{8})([A-Z])$/;
        if(partes)
        {
            var numero=partes[1];
            var letra=partes[2];
            var letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
            
            if(letra==letras[numero%23])
            {
                this.form.submit();
            }
        }
        
    })
})