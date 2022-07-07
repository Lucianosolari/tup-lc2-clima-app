const selectCiudades = document.getElementById('ciudad');
const claveApi = "7bd8f5bfc0d8d0b934abf9a144da03cf";


addCitiesToSelect();

function addCitiesToSelect() {
    if (cities == "") {
        selectCiudades.innerHTML = `<option value="empty" disabled selected>No hay ciudades cargadas</option>`
    } else {
        for (i = 0; i < cities.length; i++) {
            selectCiudades.innerHTML += `<option value="${cities[i]}">${cities[i]}</option>`
        }
    }
}

/*funcion validarApi la movi al common.js para que todas las paginas la puedan ver*/

function mostrarClima(data) {
    let city = data.name;
    let icon = data.weather[0].icon;
    let temp = data.main.temp;
    let feels_like = data.main.feels_like;
    let humidity = data.main.humidity;
    let wind_speed = data.wind.speed;
    let pressure = data.main.pressure;

    sectionResultado.innerHTML += `<div class="card">
            <h3>${city}</h3>
            <img src="http://openweathermap.org/img/wn/${icon}.png" alt="Imagen">
            <p>Temperatura: ${temp}°</p>
            <p>Sensación térmica: ${feels_like}°</p>
            <p>Humedad: ${humidity}%</p>
            <p>Velocidad del viento: ${wind_speed}km/h</p>
            <p>Presión: ${pressure} P</p>
        </div>`
}