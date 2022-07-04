const botonAgregar = document.getElementById("agregar");
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
    }, 5000);
}

async function addCityToLocalStorage() {
    let cities = getCitiesFromLocalStorage();
    let newCity = document.getElementById("ciudad_agregada").value;

    loader.style.display = 'block';

    switch (await validateCity(newCity)) {
        case "success":
            cities.push(newCity);
            localStorage.setItem("CITIES", JSON.stringify(cities));
            setTimeout(function() {
                loader.style.display = 'none';
                document.getElementById("añadir_ciudad").innerHTML += exitoMessage;
            }, 2000);
            removeMessage();
            break;
        case "warning":
            setTimeout(function() {
                loader.style.display = 'none';
                document.getElementById("añadir_ciudad").innerHTML += existeMessage;
            }, 2000);
            removeMessage();
            break;
        case "error":
            setTimeout(function() {
                loader.style.display = 'none';
                document.getElementById("añadir_ciudad").innerHTML += errorMessage;
            }, 2000);
            removeMessage();
            break;
    };
};