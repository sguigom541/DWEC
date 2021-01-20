//aquí ya puedo utilizar JQUERY
$(document).ready(function () {
   $("thead").css({
       "color":"white",
       "font-size":"1.5em",
       "background-color":"gray"
   });
   $("tbody tr:odd").css({
        "background-color":"lightgray"
   });

   $("tbody td").click(function(){
       if($(this).text()!="")
       {
           var input=$("<input>").attr("type","text").val($(this).text());
           $(this).empty().append(input);
           input.focus();
           input.blur(function(){
               $(this).parent().html($(this).val());
           })
       }
   })
   $("tbody tr").dblclick(function(){
       $(this).hide();
   })
});


//poner botón que se llame ventana modal y que salga una máscara en negro. se crea un div con z-index
//muy alto se le pone opacidad top y left a cero, 


