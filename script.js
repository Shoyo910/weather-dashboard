const apiKey = 'your_api_key';
const city = 'London';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // Process and display the data
  })
  .catch(error => {
    console.error('Error fetching the weather data:', error);
  });
