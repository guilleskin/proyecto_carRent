// boton filtrar al presionar me redirige a buscador.html





document.addEventListener("DOMContentLoaded", function() {
    const btnFiltrar = document.querySelector(".filtrar");

    btnFiltrar.addEventListener("click", function() {
        window.location.href = "buscador.html";
    });
});


//boton registrar al presionar redirige a la pagina registro

document.addEventListener("DOMContentLoaded", function() {
    const btnFiltrar = document.querySelector(".registrar");

    btnFiltrar.addEventListener("click", function() {
        window.location.href = "index.html";
    });
});




