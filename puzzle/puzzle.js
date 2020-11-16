window.addEventListener("load", function () {

    document.getElementById("jugar").addEventListener("click", function () {
        //capturo las celdas de la tabla
        var tds = document.querySelectorAll("tbody#puzzle td");
        var spans = document.querySelectorAll("tbody#puzzle span");
        var hueco = document.querySelectorAll("hueco");

        //se genera el vector para desordenar
        var vector = [];
        for (let i = 0; i < spans.length; i++) {
            vector.push(spans[i]);

        }
        //desordeno el vector

        vector.sort(function (a, b) { return Math.random() - 0.5 });

        //Actualizo los elementos de la tabla
        for (let i = 0; i < tds.length; i++) {
            tds[i].fila = parseInt(i / 4);
            tds[i].columna = i % 4;
            tds[i].appendChild(vector[i]);
            tds[i].addEventListener("click", function () {
                var yPulsada = this.fila;
                var xPulsada = this.columna;
                alert("(" + this.fila + "," + this.columna + ")");
                var yHueco = hueco.parentNode.fila;
                var xHueco = hueco.parentNode.columna;

                distancia2=(yPulsada-yHueco)*(yPulsada-yHueco)+
                (xPulsada-xHueco)*(xPulsada-xHueco);

                if(distancia2==1)
                {
                   var spanPulsado= this.children[0];
                   hueco.parentNode.appendChild(spanPulsado);
                   this.appendChild(hueco);
                }
                //condicional
                
                // this.hijo > celda donde esta el hueco
                //hueco > a esta celda
            })
            this.parentNode.columna;

        }

    })

})

