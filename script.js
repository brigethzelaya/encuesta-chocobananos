const formulario = document.getElementById("encuesta");

// ⚠️ AQUÍ PEGARÁS LA URL DE GOOGLE APPS SCRIPT
const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbyUXKNlBi0TTVv3rJmFkheUUWJxe36dNyI2A9B7laEBqsLmEXqZr6U52GqHugdzG9d7/exec";

formulario.addEventListener("submit", function (e) {

    e.preventDefault();

    const datos = new FormData(formulario);

    fetch(URL_SCRIPT, {
        method: "POST",
        body: datos
    })

    .then(res => res.text())

    .then(respuesta => {

        alert("✅ ¡Encuesta enviada correctamente!");

        formulario.reset();

    })

    .catch(error => {

        alert("❌ Ocurrió un error al enviar la encuesta.");

        console.log(error);

    });

});