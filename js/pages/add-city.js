const divMensaje = document.getElementById("mensaje")

function addNewCityToLocalStorage() {
    let newCity = document.getElementById("ciudad_agregada");
    let loader = document.querySelector(".loader");
    loader.style.display = 'block';

    if (validarCiudad(newCity.value) === true) {
        cities.push(newCity.value);
        localStorage.setItem("CITIES", JSON.stringify(cities));

        setTimeout(function() {
            loader.style.display = 'none';
            divMensaje.innerHTML = '<p class="alerta success" >Ciudad agregada con éxito</p>';
            eliminarMensaje();
        }, 3000);

    } else if (validarCiudad(newCity.value) === false) {

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
    debugger;
    if (consultarApi(newCity) == "error") {
        return "error"
    }
    if (ciudadesValidar.includes(newCity)) {
        return false;
    } else {
        return true;
    }
}

function eliminarMensaje() {
    setTimeout(function() {
        /* mensaje = document.getElementsByClassName("alerta")[0]; */
        mensaje = document.querySelector(".alerta");
        mensaje.style.display = 'none';
    }, 4000);

}