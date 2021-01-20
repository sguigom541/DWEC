//poner botón que se llame ventana modal y que salga una máscara en negro. se crea un div con z-index
//muy alto se le pone opacidad top y left a cero, 

$(document).ready(function () {
    $("#abrirModal").click(function(){
       var div=$("<div>").css({
           "width":"440px",
           "z-index":"9000",
           "position":"fixed",
           "background-color":"orange",
           "display":"block"
       });
       $(this).parent().append(div);
      
    })
});

//las filas de arriba se ponen de un color y las de abajo de otro color