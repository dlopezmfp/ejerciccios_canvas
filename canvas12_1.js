function cargarContextoCanvas(idCanvas){
    let elemento = document.querySelector(`#${idCanvas}`);
    if(elemento && elemento.getContext){
        let contexto = elemento.getContext('2d');
        if(contexto){
            return contexto;
        }
       }  return false;
}

document.addEventListener('DOMContentLoaded',function(){
    let contexto = cargarContextoCanvas('micanvas');
    if(contexto){
        let x=10;
        let y = 10;
        let width = 200;
        let height = 200;
        contexto.fillStyle = 'rgb(99,11,22)';
        contexto.fillRect(x,y,width,height);
        contexto.rotate((Math.PI/180)*40);
        contexto.fillStyle = 'rgba(00,99,0,0.5)';
        contexto.fillRect(x,y,width,height);

        contexto.rotate(-(Math.PI/180)*40);
        let x1 = 300;
        let y1 = 10;

        
        contexto.fillStyle = 'rgb(99,11,22)';
        contexto.fillRect(x1,y1,width,height);

        let centroX = ((width*0.5) + x1);
        let centroY = ((height*0.5) + y1);

        
        contexto.translate(centroX,centroY);
        contexto.rotate((Math.PI/180)*40);
        contexto.translate(-centroX,-centroY);

        contexto.fillStyle= 'rgba(00,99,0,0.5)';
        contexto.fillRect(x,y,width,height);
        
    }
});