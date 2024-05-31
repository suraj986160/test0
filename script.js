



// Set your OpenWeatherMap API key
const API_KEY = "ca9df4d89b2982c9b799e098c9dee277";

// Function to get the weather data
function getWeather(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=27.700769&lon=85.300140&appid=ca9df4d89b2982c9b799e098c9dee277`;
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      displayWeather(data);
    })
    .catch(error => console.error(error));
}

// Function to display the weather data
function displayWeather(weatherData) {
  const weatherContainer = document.getElementById("weather-container");
  weatherContainer.innerHTML = "";

  const city = weatherData.name;
  const temperature = weatherData.main.temp;
  const humidity = weatherData.main.humidity;
  const windSpeed = weatherData.wind.speed;
  
  
  

  const weatherHTML = `
    <h2>${city}</h2>
    <p>Temperature: ${temperature}°C</p>
    <p>Humidity: ${humidity}%</p>
    <p>Wind Speed: ${windSpeed} km/h</p>
    
    
    

  `;

  weatherContainer.innerHTML = weatherHTML;
}

// Get the city name from the user
const cityInput = document.getElementById("city-input");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city !== "") {
    getWeather(city);
  }
});

// Initialize the weather container
const weatherContainer = document.getElementById("weather-container");

