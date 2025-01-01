const apiKey = 'f00c38e0279b7bc85480c3fe775d518c'; // Get your API key from OpenWeather
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Get elements
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherInfo = document.getElementById('weatherInfo');
const loading = document.getElementById('loading');
const cityName = document.getElementById('cityName');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const details = document.getElementById('details');

// Function to fetch weather data
async function fetchWeather(city) {
  try {
    loading.style.display = 'block';
    weatherInfo.style.display = 'none';

    const response = await fetch(${apiUrl}?q=${city}&units=metric&appid=${apiKey});
    const data = await response.json();

    if (data.cod !== 200) {
      alert('City not found!');
      return;
    }

    const weather = data.weather[0];
    const main = data.main;
    const wind = data.wind;

    // Update UI with weather data
    cityName.innerText = ${data.name}, ${data.sys.country};
    weatherIcon.innerHTML = getWeatherIcon(weather.icon);
    temperature.innerText = ${Math.round(main.temp)}°C;
    description.innerText = weather.description;
    details.innerHTML = `
      <div class="details-item"><span>Humidity:</span> ${main.humidity}%</div>
      <div class="details-item"><span>Wind Speed:</span> ${wind.speed} m/s</div>
      <div class="details-item"><span>Pressure:</span> ${main.pressure} hPa</div>
    `;

    loading.style.display = 'none';
    weatherInfo.style.display = 'block';
  } catch (error) {
    console.error('Error fetching weather data:', error);
    loading.style.display = 'none';
    alert('Error fetching weather data!');
  }
}

// Function to get weather icon based on the icon code
function getWeatherIcon(iconCode) {
  const iconUrl = https://openweathermap.org/img/wn/${iconCode}@2x.png;
  return <img src="${iconUrl}" alt="Weather Icon">;
}

// Event listener for the button
getWeatherBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

// Optional: Fetch weather by geolocation
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetchWeatherByCoords(lat, lon);
  });
}

async function fetchWeatherByCoords(lat, lon) {
  try {
    loading.style.display = 'block';
    weatherInfo.style.display = 'none';

    const response = await fetch(${apiUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey});
    const data = await response.json();

    if (data.cod !== 200) {
      alert('Location not found!');
      return;
    }

    const weather = data.weather[0];
    const main = data.main;
    const wind = data.wind;

    // Update UI with weather data
    cityName.innerText = ${data.name}, ${data.sys.country};
    weatherIcon.innerHTML = getWeatherIcon(weather.icon);
    temperature.innerText = ${Math.round(main.temp)}°C;
    description.innerText = weather.description;
    details.innerHTML = `
      <div class="details-item"><span>Humidity:</span> ${main.humidity}%</div>
      <div class="details-item"><span>Wind Speed:</span> ${wind.speed} m/s</div>
      <div class="details-item"><span>Pressure:</span> ${main.pressure} hPa</div>
    `;

    loading.style.display = 'none';
    weatherInfo.style.display = 'block';
  } catch (error) {
    console.error('Error fetching weather data:', error);
    loading.style.display = 'none';
    alert('Error fetching weather data!');
  }
}const apiKey = 'f00c38e0279b7bc85480c3fe775d518c'; // Get your API key from OpenWeather
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Get elements
const cityInput = document.getElementById('cityInput');
const getWeatherBtn = document.getElementById('getWeatherBtn');
const weatherInfo = document.getElementById('weatherInfo');
const loading = document.getElementById('loading');
const cityName = document.getElementById('cityName');
const weatherIcon = document.getElementById('weatherIcon');
const temperature = document.getElementById('temperature');
const description = document.getElementById('description');
const details = document.getElementById('details');

// Function to fetch weather data
async function fetchWeather(city) {
  try {
    loading.style.display = 'block';
    weatherInfo.style.display = 'none';

    const response = await fetch(${apiUrl}?q=${city}&units=metric&appid=${apiKey});
    const data = await response.json();

    if (data.cod !== 200) {
      alert('City not found!');
      return;
    }

    const weather = data.weather[0];
    const main = data.main;
    const wind = data.wind;

    // Update UI with weather data
    cityName.innerText = ${data.name}, ${data.sys.country};
    weatherIcon.innerHTML = getWeatherIcon(weather.icon);
    temperature.innerText = ${Math.round(main.temp)}°C;
    description.innerText = weather.description;
    details.innerHTML = `
      <div class="details-item"><span>Humidity:</span> ${main.humidity}%</div>
      <div class="details-item"><span>Wind Speed:</span> ${wind.speed} m/s</div>
      <div class="details-item"><span>Pressure:</span> ${main.pressure} hPa</div>
    `;

    loading.style.display = 'none';
    weatherInfo.style.display = 'block';
  } catch (error) {
    console.error('Error fetching weather data:', error);
    loading.style.display = 'none';
    alert('Error fetching weather data!');
  }
}

// Function to get weather icon based on the icon code
function getWeatherIcon(iconCode) {
  const iconUrl = https://openweathermap.org/img/wn/${iconCode}@2x.png;
  return <img src="${iconUrl}" alt="Weather Icon">;
}

// Event listener for the button
getWeatherBtn.addEventListener('click', () => {
  const city = cityInput.value.trim();
  if (city) {
    fetchWeather(city);
  }
});

// Optional: Fetch weather by geolocation
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    fetchWeatherByCoords(lat, lon);
  });
}

async function fetchWeatherByCoords(lat, lon) {
  try {
    loading.style.display = 'block';
    weatherInfo.style.display = 'none';

    const response = await fetch(${apiUrl}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey});
    const data = await response.json();

    if (data.cod !== 200) {
      alert('Location not found!');
      return;
    }

    const weather = data.weather[0];
    const main = data.main;
    const wind = data.wind;

    // Update UI with weather data
    cityName.innerText = ${data.name}, ${data.sys.country};
    weatherIcon.innerHTML = getWeatherIcon(weather.icon);
    temperature.innerText = ${Math.round(main.temp)}°C;
    description.innerText = weather.description;
    details.innerHTML = `
      <div class="details-item"><span>Humidity:</span> ${main.humidity}%</div>
      <div class="details-item"><span>Wind Speed:</span> ${wind.speed} m/s</div>
      <div class="details-item"><span>Pressure:</span> ${main.pressure} hPa</div>
    `;

    loading.style.display = 'none';
    weatherInfo.style.display = 'block';
  } catch (error) {
    console.error('Error fetching weather data:', error);
    loading.style.display = 'none';
    alert('Error fetching weather data!');
  }
}