//Capturamos el contexto de canvas
function cargarContextoCanvas(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    elemento.style.background = "rgb(22,33,44)";
    console.log("canvas tiene: " + elemento.height + "de alto");

    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto;
        }
    }
    return false;
};

window.addEventListener("DOMContentLoaded", function () {
    let contexto = cargarContextoCanvas('micanvas');
    if (contexto) {
        contexto.fillStyle = 'rgba(0,200,2,0.5)';
        for (i = 0; i <= 490; i += 10) {
            contexto.fillRect(i, i, 10, 10);
        }
        contexto.fillStyle = 'rgba(0,0,255,0.3)';
        for (i = 490; i >= 10; i -= 10) {
            contexto.fillRect(i, 490 - i, 10, 10);
        }
        contexto.fillStyle = 'rgba(255,0,0,0.7)';
        for (i = 0; i <= 500; i += 10) {
            contexto.fillRect(i, 245, 10, 10);
        }
        contexto.fillStyle = 'rgba(122,23,143,0.5)';
        for (i = 0; i <= 490; i += 10) {
            contexto.fillRect(245, i, 10, 10);
        }
        document.getElementById('borrar').addEventListener('click',borrarParteCanvas);

    }
});



function borrarParteCanvas(){
    let contexto = cargarContextoCanvas('micanvas');
    if(contexto){
        contexto.clearRect(150,150,400,400);
    }
};

