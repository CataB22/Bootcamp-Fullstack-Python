// Obtener contadores desde los títulos
let contadorSolicitudes = 2;
let contadorConexiones = 500;

// Obtener referencias a los elementos visuales
let solicitudesTitulo = document.querySelector(".solicitudes h3");
let conexionesTitulo = document.querySelector(".conexiones h3");

// Actualizar los contadores en pantalla
function actualizarContadores() {
    solicitudesTitulo.textContent = "Solicitudes de Conexión (" + contadorSolicitudes + ")";
    conexionesTitulo.textContent = "Tus Conexiones (" + contadorConexiones + "+)";
}

// Función para aceptar una solicitud
function aceptarSolicitud(boton) {
    let solicitud = boton.closest(".usuario");
    solicitud.remove(); // Eliminar solicitud del DOM
    contadorSolicitudes--;
    contadorConexiones++;
    actualizarContadores();
}

// Función para rechazar una solicitud
function rechazarSolicitud(boton) {
    let solicitud = boton.closest(".usuario");
    solicitud.remove(); // Eliminar solicitud del DOM
    contadorSolicitudes--;
    actualizarContadores();
}

// Función para editar el nombre del perfil
function editarNombre() {
    let nombre = document.querySelector(".info h2");
    nombre.textContent = "Catalina Jara 😎"; // Cambia esto por lo que quieras
}

// Agregar eventos después de que el DOM esté cargado
window.onload = function () {
    let botonesAceptar = document.querySelectorAll(".aceptar");
    let botonesRechazar = document.querySelectorAll(".rechazar");
    let linkEditar = document.querySelector(".editar");

    botonesAceptar.forEach(function (btn) {
        btn.onclick = function () {
            aceptarSolicitud(btn);
        };
    });

    botonesRechazar.forEach(function (btn) {
        btn.onclick = function () {
            rechazarSolicitud(btn);
        };
    });

    linkEditar.onclick = function (e) {
        e.preventDefault();
        editarNombre();
    };
};