
const apiKey = 'b0069b77130e9ec97ef32aea59cde404';
const apiUrl = 'https://api.openweathermap.org/data/2.5';

// Function to fetch current weather data
function fetchCurrentWeather(city) {
    // Make an API request to fetch current weather data
    fetch(`${apiUrl}/weather?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Extract and display current weather data
            const cityName = data.name;
            const date = new Date(data.dt * 1000); 
            const temperature = data.main.temp;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const weatherIcon = data.weather[0].icon;

            // Display on the dashboard
        })
        .catch(error => console.error('Error fetching current weather:', error));
}

// Function to fetch 5-day forecast data
function fetch5DayForecast(city) {
    // API request to fetch 5-day forecast data
    fetch(`${apiUrl}/forecast?q=${city}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {

        })
        .catch(error => console.error('Error fetching 5-day forecast:', error));
}


const city = 'New York'; 
fetchCurrentWeather(city);
fetch5DayForecast(city);
