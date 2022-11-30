function cargarContextoCanvas(idCanvas) {
    let elemento = document.getElementById(idCanvas);
    if (elemento && elemento.getContext) {
        let contexto = elemento.getContext('2d');
        if (contexto) {
            return contexto;
        }
    } return false;
}

window.addEventListener("DOMContentLoaded", dibujarCuadradosAleatorios(cargarContextoCanvas('micanvas')), 500);

function aleatorio(inferior, superior) {
    return Math.floor(Math.random() * (superior - inferior) + inferior);
}

console.log(aleatorio(0, 255));

function colorAleatorio() {
    let color = "rgb(" + aleatorio(0, 255) + "," + aleatorio(0, 255) + "," + aleatorio(0, 255) + ")";
    return color;
}

console.log(colorAleatorio());

function dibujarCuadradosAleatorios(contexto) {
    if (contexto) {
        for (i = 0; i <= 490; i += 10) {
            for (j = 0; j <= 490; j += 10) {
                contexto.fillStyle = colorAleatorio();
                contexto.fillRect(i, j, 10, 10);
            }
        }
    }
}