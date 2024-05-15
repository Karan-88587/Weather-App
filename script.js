const apiKey = "998f9a21c0558ea5a2869b7c0e0e2666";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
let data;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const error = document.querySelector(".error");
const weather = document.querySelector(".weather");

const checkWeather = async (cityName) => {

    const response = await fetch(`${apiUrl}&q=${cityName}&appid=${apiKey}`);
    data = await response.json();
    if (response.status === 404) {
        error.style.display = "block";
        weather.style.display = "none";
    }
    else {
        const city = document.querySelector(".city");
        const temp = document.querySelector(".temp");
        const humidity = document.querySelector(".humidity");
        const wind = document.querySelector(".wind");
        const weatherIcon = document.querySelector(".weather-icon");

        weather.style.display = "block";
        error.style.display = "none";

        if (data.weather[0].main === "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }

        else if (data.weather[0].main === "Clear") {
            weatherIcon.src = "images/clear.png";
        }

        else if (data.weather[0].main === "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }

        else if (data.weather[0].main === "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        else if (data.weather[0].main === "Rain") {
            weatherIcon.src = "images/rain.png";
        }

        else if (data.weather[0].main === "Snow") {
            weatherIcon.src = "images/snow.png";
        }

        city.innerHTML = data.name;
        temp.innerHTML = `${Math.ceil(data.main.temp)}°C`;
        humidity.innerHTML = `${data.main.humidity}%`;
        wind.innerHTML = `${data.wind.speed} km/h`;
    }
    console.log("Api data is :", data);
};

searchBtn.addEventListener("click", () => {
    if (searchBox.value === "") {
        alert("please enter city name");
        return;
    }
    checkWeather(searchBox.value);
});