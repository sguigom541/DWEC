window.addEventListener("load",function(){
    var diana=document.getElementById("diana");
    var fotico=document.getElementById("fotico");
    var radio=20;
    fotico.addEventListener("mousemove",function(ev){
        ev.stopImmediatePropagation();
        var x=ev.clientX;
        var y=ev.clientY;
        diana.style.left =(x-radio)+"px";
        diana.style.right=(y-radio)+"px";
    })
    
    fotico.addEventListener("wheel",function(ev){
        ev.preventDefault();
        console.log(ev);
        radio +=(ev.deltaY/50);
        diana.style.width=(radio*2)+ "px";
        diana.style.height=(radio*2)+ "px";
        
    })

    
    
})