"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
alert("¡El archivo JS cargó correctamente!"); // Esto debe aparecer apenas abras la página
const boton = document.getElementById("btnSaludar");
const input = document.getElementById("inputNombre");
const visualizacion = document.getElementById("mensaje");
if (boton && input && visualizacion) {
    boton.addEventListener("click", () => {
        alert("Hiciste clic en el botón"); // Esto debe aparecer al tocar el botón
        visualizacion.innerText = "Hola, " + input.value;
    });
}
//# sourceMappingURL=saludo.js.map