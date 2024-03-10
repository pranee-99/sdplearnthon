import React, { useEffect, useState } from 'react';

export default function Suggestions() {
  const [temperature, setTemperature] = useState('');

  // Function to fetch weather data from an API
  async function fetchWeatherData() {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint providing weather data
      const response = await fetch('16f7ad828ca053bb33ab0c8b4177c017');
      const data = await response.json();

      // Assuming the API response has a 'temperature' property
      const fetchedTemperature = data.temperature;

      setTemperature(fetchedTemperature);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  }

  // Function to display suggestions based on the fetched temperature
  function displayWeatherSuggestions() {
    const enteredTemperature = parseFloat(temperature);

    if (isNaN(enteredTemperature)) {
      // Handle invalid or missing temperature
      alert('Temperature data not available.');
      return;
    }

    let suggestionText = '24';

    if (enteredTemperature > 30) {
      suggestionText =
        "It's hot outside! Remember to stay hydrated and wear light clothes.";
    } else if (enteredTemperature < 10) {
      suggestionText = "It's cold! Don't forget to bundle up and stay warm.";
    } else {
      suggestionText = 'The weather is moderate. Enjoy your day!';
    }

    // Display suggestionText in an alert box
    alert(suggestionText);
  }

  // Call the function to fetch weather data when the component mounts
  useEffect(() => {
    fetchWeatherData();
  }, []); // Run the effect only once when the component mounts

  return (
    <div className="suggestions-container">
      <h1>Weather Suggestions</h1>
      <div>
        <p>Current Temperature: {temperature}&deg;C</p>
        <button onClick={displayWeatherSuggestions}>
          Get Suggestions
        </button>
      </div>
    </div>
  );
}
