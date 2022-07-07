let cities = getCitiesFromLocalStorage();
const sectionResultado = document.getElementById("section-weather-result");

function getCitiesFromLocalStorage() {
    let cities = localStorage.getItem("CITIES");
    if (cities) {
        cities = JSON.parse(cities);
    } else {
        cities = [];
    }
    return cities;
}

async function consultarApi(ciudadConsultada) {
    if (sectionResultado) {
        sectionResultado.innerHTML = "";
    }

    /*try {*/
    await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudadConsultada}&appid=${claveApi}&units=metric&lang=es`)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            mostrarClima(data);
        })
        .catch(error => {
            return error;
        })
        /* } catch (error) {
        return error;

    }*/


}