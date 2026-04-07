alert("¡El archivo JS cargó correctamente!"); // Esto debe aparecer apenas abras la página

const boton = document.getElementById("btnSaludar") as HTMLButtonElement;
const input = document.getElementById("inputNombre") as HTMLInputElement;
const visualizacion = document.getElementById("mensaje") as HTMLElement;

if (boton && input && visualizacion) {
    boton.addEventListener("click", () => {
        alert("Hiciste clic en el botón"); // Esto debe aparecer al tocar el botón
        visualizacion.innerText = "Hola, " + input.value;
    });
}


