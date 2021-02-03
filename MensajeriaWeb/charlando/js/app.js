$(document).ready(function(){
    $('#contenedor').load('plantillas/principal.html');
    //Peticion ajax para pedir los contactos
    const mitelefono=prompt("cual es tu telefono");
    const memoria=$('<div>').append($('.contacto'));
    $.ajax({
        url:"ajax/identificado.json",
        data:"mitelefono="+mitelefono,
        method:"post",
        dataType:"json",
        success:function(data){
            $('#contactos').data(data);
            //console.log($('#contactos').data())
            $.each(data.contactos,function(ind,valor){

            })
        }
    })
})