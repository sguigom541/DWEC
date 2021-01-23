$(document).ready(function () {
    $("#busqueda").keyup(function (ev) {
        var peticionLanzada = false;
        var conexion;
        console.log($(this).val())
        //Solicito al servidor los paises esa cadena
        if (peticionLanzada) {
            //borrar anterior
            conexion.abort();
        }
        else {
            peticionLanzada = true;
            conexion = $.get("https://restcountries.eu/rest/v2/name/" + $(this).val(),
                function (data, status) {
                    if (status == "success") {
                        console.log(data);
                        select.empty();
                        var option;
                        var fronterizos;
                        for (let i = 0; i < data.length; i++) {
                          option=$("<option>").val(data[i].borders.join(";")).text(data[i].name);
                          select.append(option.click(function(){
                              $.get("https://restcountries.eu/rest/v2/alpha?codes="+$(this).val(),
                                  function (data,status) {
                                      if(status=="success")
                                      {
                                        var caja=$("#banderas").empty();

                                        for (let i = 0; i < data.length; i++) {
                                            $("<img>").attr({
                                                width:35,
                                                height:25,
                                                src:data[i].flag
                                            }).appendTo(caja)
                                            
                                        }
                                      }
                                  }
                                  
                              );
                          }))
                            
                        }
                        
                        peticionLanzada=false;
                    }
                })
        }
    });

    var select=$("<select>").width("200px").attr({
        "size":"20",
        "multiple":"multiple"
    }).insertAfter($("#busqueda"));
    $("<div id='banderas'></div>").insertAfter(select)
});