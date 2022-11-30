function cargarContextoCanvas(idCanvas) {
    let lienzo = document.getElementById(idCanvas);
    if (lienzo && lienzo.getContext) {
        let contexto = lienzo.getContext('2d');
        if (contexto) {
            return contexto;
        }
        return (false);
    }
}

function cargarImagen() {
    let contexto = cargarContextoCanvas('micanvas');
    let imagen = new Image();
    imagen.src = "imagenes/anillo_unico.jpeg";
    contexto.drawImage(imagen, 0, 0);
}

//         contexto.drawImage(imagen,0,0);
// window.addEventListener("DOMContentLoaded",function(){
//     let contexto = cargarContextoCanvas('micanvas');
//     let imagen = new Image();
//     imagen.src="imagenes/anillo_unico.jpeg";
//     imagen.onload =function(){
//         contexto.drawImage(imagen,0,0);
//     };
// });
// window.addEventListener("DOMContentLoaded",function(){
//          let contexto = cargarContextoCanvas('micanvas');
//          let imagen = new Image();
//          imagen.src="imagenes/anillo_unico.jpeg";
//          imagen.addEventListener("load",function(){
//          contexto.drawImage(imagen,0,0);
//          })});

