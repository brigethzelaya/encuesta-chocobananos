const formulario = document.getElementById("encuesta");

// ⚠️ AQUÍ PEGARÁS LA URL DE GOOGLE APPS SCRIPT
const URL_SCRIPT = "https://script.google.com/macros/s/AKfycbyUmo_rI_E_Gpu0m-D1ckgX0Vy5jQIdI45_JHcRC-BUH_1vezK8StU96qxOoO-Pg8Ym/exec";

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
