const api = {
    key:'965f8e166343b3ad6b97ea7b34af4752',
    baseurl: 'https://api.openweathermap.org/data/2.5/'
};
const searchBox = document.querySelector('.search-box');

searchBox.addEventListener('keypress', setQuery)

function setQuery(e) {
    if(e.keyCode == 13) {
        getResult(searchBox.value)
    }
}

function getResult(query) {
    fetch(`${api.baseurl}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((weather) => {
        return  weather.json()
    })
    .then(displayResults);
}

function displayResults(weather) {
    let city = document.querySelector('.location .city');
    city.innerHTML = `${weather.name}, ${weather.sys.country}`;

    let temp = document.querySelector('.temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weatherEl = document.querySelector('.weather');
    weatherEl.innerHTML = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerHTML = `${Math.round(weather.main.temp_min)}°C / ${Math.round(weather.main.temp_max)}°C`
}

