$(document).ready(function () {
    $("#busqueda").keyup(function () { 
        console.log($(this).val());
        $.get("https://restcountries.eu/rest/v2/name/" + $(this).val(),
           function(data){
              
                var miSelect=$("#respuesta");
                var options=$("#respuesta option");
                
                options.remove();
               for (let i = 0; i < data.length; i++) {
                   
                    miSelect.append('<option value='+i+'>'+data[i].name+'</option>')
                   
                   
                  
               }
            }
        );
        
        
    });
});