function buscarLibro() {
    let texto = document.getElementById("input-busqueda");
    texto = texto.value;
    let resultado = document.getElementById("resultado-busqueda");
    let libros = document.querySelectorAll(".libro");
    let encontrados = 0;

    for (let i = 0; i < libros.length; i++) {
        let libro = libros[i];
        let titulo = libro.querySelector("h3");
        titulo = titulo.textContent;
        let parrafos = libro.querySelectorAll("p");
        let autor = parrafos[1].textContent;
        let genero = libro.getAttribute("data-genero");

        if (texto === "" || texto === titulo || texto === autor || texto === genero) {
            libro.style.display = "block";
            if (texto !== "") {
                encontrados = encontrados + 1;
            }
        } else {
            libro.style.display = "none";
        }
    }
    if (texto === "") {
        resultado.textContent = "";
    } else {
        resultado.textContent = "Se encontraron " + encontrados + " libro(s).";
    }
}

function registrarUsuario() {
    let nombre = document.getElementById("nombre");
    nombre = nombre.value;
    let email = document.getElementById("email");
    email = email.value;
    let password = document.getElementById("password");
    password = password.value;

    if (nombre === "" || email === "" || password === "") {
        alert("Por favor completa todos los campos.");
    } else {
        alert("¡Registro exitoso! Bienvenido/a a LibroLibre.");

        document.getElementById("nombre").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
    }
}