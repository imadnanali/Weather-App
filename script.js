const API_KEY = 'b98b9078a17db09cccc024db1f68cde4';

async function getWeather() {
  const city = document.getElementById('city').value;
  if (!city) {
    alert('Please enter a city name.');
    return;
  }

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('City not found');
    }

    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    alert(error.message);
  }
}

function displayWeather(data) {
  const cityName = data.name;
  const temperature = `${Math.round(data.main.temp)}°C`;
  const condition = data.weather[0].description;
  const icon = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  document.getElementById('city-name').textContent = cityName;
  document.getElementById('temperature').textContent = temperature;
  document.getElementById('condition').textContent = condition;
  document.getElementById('weather-icon').src = icon;
  document.getElementById('weather-icon').style.display = 'block';
}