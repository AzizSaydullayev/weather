const apiKey = "af0a3fefec0a96bd73bdf25185ce4020";
const API = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

const searchInput = document.querySelector("input");
const searchButton = document.querySelector("button");

async function checkWeather(city) {
    const response = await fetch(API + city + `&appid=${apiKey}`);
    const data = await response.json();
    console.log(data, "data");

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp);
    document.querySelector(".max").innerHTML = Math.round(data.main.temp_max) + "°C max";
    document.querySelector(".min").innerHTML = Math.round(data.main.temp_min) + "°C min";

    
    const weatherIcon = data.weather[0].icon; 
    const iconURL = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
    document.querySelector(".weather-icon").src = iconURL;
}

searchButton.addEventListener("click", () => {
    checkWeather(searchInput.value);
    searchInput.value = "";
});
