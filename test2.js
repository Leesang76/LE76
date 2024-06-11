async function getWeather() {
    const location = document.getElementById('location').value;
    const apiKey = 'your_api_key'; // OpenWeather API 키
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`);
    const data = await response.json();

    if (data.cod === 200) {
        document.getElementById('weather').innerHTML = `
            <h2>${data.name}</h2>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
        `;
    } else {
        document.getElementById('weather').innerHTML = `<p>City not found</p>`;
    }
}
