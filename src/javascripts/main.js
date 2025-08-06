//TODO - Your ES6 JavaScript code (if any) goes here

document.addEventListener("DOMContentLoaded", function () {
    console.log("Documento cargado correctamente");

    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("activo");
        }
    });
    switch (currentPage) {
        case "inicio.html":
            console.log("Bienvenido a la página de inicio");
            break;
        case "about.html":
            console.log("Conóceme más en la sección About");
            break;
        case "favorites.html":
            console.log("Estos son mis favoritos");
            break;
        case "journey.html":
            console.log("Este es mi viaje personal");
            break;
        default:
            console.log("Página desconocida");
    }

    const botonSaludo = document.getElementById("btnSaludo");
    if (botonSaludo) {
        botonSaludo.addEventListener("click", function () {
            alert("¡Hola! Gracias por visitar mi sitio :)");
        });
    }
});
