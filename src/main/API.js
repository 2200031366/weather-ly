import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { ArcElement, CategoryScale, LinearScale } from 'chart.js';
import { Chart as ChartJS } from 'chart.js/auto'; 
import { Pie, Bar } from 'react-chartjs-2';
import './navbar.css'; 
import '../config'
ChartJS.register(ArcElement, CategoryScale, LinearScale); 

const API_KEY = 'af9ef1c49a20d83292b5a485ddf8e885'; 
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

const WeatherDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [pieChartData, setPieChartData] = useState(null);
  const [barChartData, setBarChartData] = useState(null);
  const pieChartRef = useRef(null);
  const barChartRef = useRef(null);

  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(
        `${API_URL}?q=${searchQuery}&appid=${API_KEY}&units=metric`
      );
      setWeatherData(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      fetchWeatherData();
    }
  };

  useEffect(() => {
    if (weatherData) {
      const { wind, main } = weatherData;

      setPieChartData({
        labels: ['Temperature', 'Wind Speed', 'Humidity'],
        datasets: [
          {
            label: 'Weather Data',
            data: [main.temp, wind.speed, main.humidity],
            backgroundColor: ['rgba(255, 140, 65, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
            borderColor: ['rgba(255, 140, 65, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1,
          },
        ],
      });

      setBarChartData({
        labels: ['Temperature', 'Wind Speed', 'Humidity'],
        datasets: [
          {
            label: 'Weather Data',
            data: [main.temp, wind.speed, main.humidity],
            backgroundColor: ['rgba(255, 140, 65, 0.6)', 'rgba(255, 99, 132, 0.6)', 'rgba(54, 162, 235, 0.6)'],
            borderColor: ['rgba(255, 140, 65, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)'],
            borderWidth: 1,
          },
        ],
      });
    }
  }, [weatherData]);

  return (
    <div>
      <h2>Weather Data Visualizations</h2>
      <div className="container"> {/* Apply the container class here */}
        <input
          type="text" 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <br></br>
      <br></br>
      {pieChartData && barChartData && (
        <div className="chart-container">
          <div className="chart-item">
            <h2 className="chart-title">Weather Data (Pie Chart)</h2>
            <Pie ref={pieChartRef} data={pieChartData} />
          </div>
          <div className="chart-itemm">
            <h2 className="chart-title">Weather Data (Bar Graph)</h2>
            <Bar ref={barChartRef} data={barChartData} />
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDashboard;
