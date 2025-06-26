let solis = 2;
let conex = 500;

let solTitulo = document.querySelector(".solicitudes h3");
let conexTitulo = document.querySelector(".conexiones h3");
let contSol = document.querySelector(".solicitudes");
let soli1 = document.querySelector(".usuario.usuario-1");
let soli2 = document.querySelector(".usuario.usuario-2");
let botonLogout = document.querySelector(".logout");


function actContadores() {
  solTitulo.textContent = "Solicitudes de Conexión (" + solis + ")";
  conexTitulo.textContent = "Tus Conexiones (" + conex + ")";
}

function aceptarSolicitud(solicitud) {
  contSol.removeChild(solicitud);
  solis--;
  conex++;
  actContadores();
}

function rechazarSolicitud(solicitud) {
  contSol.removeChild(solicitud);
  solis--;
  actContadores();
}

function editarNombre() {
  let nombre = document.querySelector(".info h2");
  nombre.textContent = "Catalina Broughton";
}

let botonesAceptar = document.querySelectorAll(".aceptar");
let botonesRechazar = document.querySelectorAll(".rechazar");
let botonEditar = document.querySelector(".editar");

botonesAceptar[0].addEventListener("click", function () {
  aceptarSolicitud(soli1);
});

botonesAceptar[1].addEventListener("click", function () {
  aceptarSolicitud(soli2);
});

botonesRechazar[0].addEventListener("click", function () {
  rechazarSolicitud(soli1);
});

botonesRechazar[1].addEventListener("click", function () {
  rechazarSolicitud(soli2);
});

botonEditar.addEventListener("click", function () {
  editarNombre();
});

botonLogout.addEventListener("mouseover", function () {
  botonLogout.style.backgroundColor = "#ff4444";
  botonLogout.style.color = "white";
});

botonLogout.addEventListener("mouseout", function () {
  botonLogout.style.backgroundColor = "";
  botonLogout.style.color = "";
});