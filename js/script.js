
const formulario = document.getElementById("formResena");
const listaResenas = document.getElementById("listaResenas");

if (formulario) {
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombre").value;
        const comentario = document.getElementById("comentario").value;

        const resena = document.createElement("div");
        resena.classList.add("resena");

        const titulo = document.createElement("h3");
        titulo.textContent = "💚 " + nombre;

        const texto = document.createElement("p");
        texto.textContent = comentario;

        resena.appendChild(titulo);
        resena.appendChild(texto);

        listaResenas.appendChild(resena);

        formulario.reset();
    });
}
