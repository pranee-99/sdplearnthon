import React, { useState, useEffect } from 'react';

const WeatherCheck = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const apiKey = '16f7ad828ca053bb33ab0c8b4177c017';
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch weather data');
        }
        const data = await response.json();
        setWeatherData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (city.trim() !== '') {
      fetchWeatherData();
    }
  }, [city]);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 'calc(100vh - 50px)', // Adjust the value based on your navbar height
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    },
    overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
      padding: '30px',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
      maxWidth: '800px',
    },
    heading: {
      fontSize: '24px',
      marginBottom: '20px',
    },
    label: {
      fontSize: '16px',
    },
    input: {
      padding: '8px',
      fontSize: '16px',
      marginBottom: '20px',
      width: '100%',
    },
    error: {
      color: 'red',
      fontSize: '16px',
    },
    weatherHeading: {
      fontSize: '20px',
      marginTop: '20px',
    },
    forecastItem: {
      border: '1px solid #ccc',
      borderRadius: '5px',
      padding: '10px',
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <h1 style={styles.heading}>Find Weather</h1>
        <div>
          <label htmlFor="cityInput" style={styles.label}>
            Enter City: 
          </label>
          <input
            type="text"
            id="cityInput"
            value={city}
            onChange={handleCityChange}
            style={styles.input}
          />
        </div>
        {isLoading && <p>Loading...</p>}
        {error && <p style={styles.error}>Error: {error}</p>}
        {weatherData && (
          <div>
            <h2 style={styles.weatherHeading}>Weather Forecast for the Week</h2>
            {weatherData.list.map((forecast, index) => (
              <div key={index} style={styles.forecastItem}>
                <p>{forecast.dt_txt}</p>
                <p>Temperature: {forecast.main.temp}°C</p>
                <p>Description: {forecast.weather[0].description}</p>
                <p>Humidity: {forecast.main.humidity}%</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherCheck;
