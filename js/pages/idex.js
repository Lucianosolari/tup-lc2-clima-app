let selector = document.getElementById("ciudad");

const ocultarCard = document.getElementById("section-weather-result");

const loader = document.querySelector(".loader");

function addCitiesToSelector() {
    let cities = getCitiesFromLocalStorage();

    selector.innerHTML += `<option value="" disabled selected>Seleccionar Ciudad</option>`
    for (let i = 0; i < cities.length; i++) {
        selector.innerHTML += `<option value="${cities[i]}">${cities[i]}</option>`
    }

}

function createCard() {

    consultAPI(selector.value);
}

addCitiesToSelector();