
document.querySelectorAll(".carrusel").forEach(carrusel => {

    const imagenes = carrusel.querySelectorAll(".carrusel-item");
    const anterior = carrusel.querySelector(".carrusel-anterior");
    const siguiente = carrusel.querySelector(".carrusel-siguiente");
    const contador = carrusel.querySelector(".carrusel-contador");

    let actual = 0;

    function mostrarImagen(indice) {

        actual = (indice + imagenes.length) % imagenes.length;

        imagenes.forEach((imagen, i) => {
            imagen.hidden = (i !== actual);
        });

        contador.textContent = (actual + 1);
    }

    anterior.addEventListener("click", () => {
        mostrarImagen(actual - 1);
    });

    siguiente.addEventListener("click", () => {
        mostrarImagen(actual + 1);
    });

imagenes.forEach(imagen => {

        const foto = imagen.querySelector("img");

        foto.addEventListener("click", () => {
            mostrarImagen(actual + 1);
        });

        

    });

    mostrarImagen(0);

});