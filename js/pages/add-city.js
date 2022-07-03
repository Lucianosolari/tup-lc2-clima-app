let botonAgregar = document.getElementById("agregar");
botonAgregar.addEventListener("click", addCityToLocalStorage)

let exitoMessage = '<p class="alerta success" >Ciudad agregada con éxito</p>';
let errorMessage = '<p class="alerta error" >Error: La ciudad ingresada no se encuenta en la API o se produjo un error al consultar</p>';
let existeMessage = '<p class="alerta warning">La ciudad ingresada ya se encuentra almacenada</p>';

const loader = document.querySelector(".loader");

async function validateCity(newCity) {
    let cities = getCitiesFromLocalStorage();

    for (let i = 0; i < cities.length; i++) {
        if (newCity == cities[i]) {
            return "warning";
        };
    };

    if (await consultAPI(newCity) == "error") {
        return "error";
    } else {
        return "success";
    };
}

function removeMessage() {
    setTimeout(function() {
        remov = document.getElementsByClassName("alerta");
        remov[0].remove();
    }, 4000);
}

async function addCityToLocalStorage() {
    let cities = getCitiesFromLocalStorage();
    let newCity = document.getElementById("ciudad_agregada").value;

    loader.style.display = 'block';

    switch (await validateCity(newCity)) {
        case "success":
            loader.style.display = 'none';
            cities.push(newCity);
            localStorage.setItem("CITIES", JSON.stringify(cities));
            document.getElementById("añadir_ciudad").innerHTML += exitoMessage;
            removeMessage();
            break;
        case "warning":
            loader.style.display = 'none';
            document.getElementById("añadir_ciudad").innerHTML += existeMessage
            removeMessage();
            break;
        case "error":
            loader.style.display = 'none';
            document.getElementById("añadir_ciudad").innerHTML += errorMessage;
            removeMessage();
            break;
    };
};