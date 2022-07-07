const divMensaje = document.getElementById("mensaje")

function addNewCityToLocalStorage() {
    let newCity = document.getElementById("ciudad_agregada");
    let loader = document.querySelector(".loader");
    loader.style.display = 'block';

    if (validarCiudad(newCity.value) === "noIncluida") {
        cities.push(newCity.value);
        localStorage.setItem("CITIES", JSON.stringify(cities));

        setTimeout(function() {
            loader.style.display = 'none';
            divMensaje.innerHTML = '<p class="alerta success" >Ciudad agregada con éxito</p>';
            eliminarMensaje();
        }, 3000);

    } else if (validarCiudad(newCity.value) === "incluida") {

        setTimeout(function() {
            loader.style.display = 'none';
            divMensaje.innerHTML = '<p class="alerta warning">La ciudad ingresada ya se encuentra almacenada</p>';
            eliminarMensaje();
        }, 3000);

    } else {
        setTimeout(function() {
            loader.style.display = 'none';
            divMensaje.innerHTML = '<p class="alerta error" >Error: La ciudad ingresada no se encuenta en la API o se produjo un error al consultar</p>';
            eliminarMensaje();
        }, 3000);

    }

}

function validarCiudad(newCity) {
    let ciudadesValidar = localStorage.getItem("CITIES");
    ciudadesValidar = JSON.parse(ciudadesValidar);

    /* if (consultarApi(newCity)) {
         return false;
     } else*/

    if (ciudadesValidar != null) {
        if (ciudadesValidar.includes(newCity)) {
            return "incluida";
        } else {
            return "noIncluida";
        }
    } else {
        return "noIncluida"
    }
}

function eliminarMensaje() {
    setTimeout(function() {
        mensaje = document.querySelector(".alerta");
        mensaje.style.display = 'none';
    }, 4000);

}