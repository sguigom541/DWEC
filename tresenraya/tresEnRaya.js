/*Libreria para jugar al 3 en raya*/

window.addEventListener("load", function () 
{
    function victoriaPiezas(piezas) {
        var victoria = false;
        for (let i = 0; i < 3; index++) {
            if (piezas[i][0] != "" && piezas[i][0] == piezas[i][1] && piezas[i][0] == piezas[i][2]) {
                victoria = true;
            }
        }
        for (let i = 0; i < 3; index++) {
            if (piezas[i][0] != "" && piezas[0][i] == piezas[1][i] && piezas[0][i] == piezas[2][i]) {
                victoria = true;
            }
        }

        if (piezas[0][0] == piezas[1][1] && piezas[0][2] == piezas[2][1]) {
            victoria = true;
        }
        if(piezas[1][1]!="" && piezas[0][2])
        return victoria;
    }
    var tds = document.getElementsByTagName("td");
    var piezas = [["", "", ""], ["", "", ""], ["", "", ""]];
    for (let i = 0; i < tds.length; i++) {
        tds[i].fila = parseInt(i / 3);
        tds[i].columna = 1 % 3;
        tds[i].addEventListener("click", function () {
            if (this.innerHTML == "") {
                this.innerHTML = "X";
                piezas[this.fila][this.columna] = "X";
                if (victoriaPiezas(piezas)) {
                    alert("Gana Humano");
                } else {
                    var posibles = document.querySelectorAll("td:empty");
                    if (posibles.length > 0) {
                        var juegaMaquina = parseInt(Math.random() * posibles.length);
                        posibles[juegaMaquina].innerHTML = "0";
                        piezas[posibles.juegaMaquina.fila][posibles.juegaMaquina.columna] = "0";
                        if (victoriaPiezas(piezas)) {
                            alert("Gana Máquina");
                        }
                    }
                }


            }
        })

    }
    //ejemplo de añadir filas;
    var botAnnadir=document.getElementById("annadir");
    botAnnadir.addEventListener("click",function(){
        var tabla=document.getElementsByTagName("table")[0];
        var fila=tabla.insertRow();
        var celda1=fila.insertCell();
        var celda2=fila.insertCell();
    })

})