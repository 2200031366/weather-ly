import React from 'react';
import { Link } from 'react-router-dom';
import '../images/cloudcover.jpg'
import './navbar.css'
import '../config'

const Cover = () => {
  return (
    <div className="cover-container">
      <h2 className="app-heading">"Weather-Ly" ️</h2>
      <img src={require("../images/cloudcover-removebg-preview.png")} alt="Weather App Logo" className="weather-app-logo" />
      <p className="app-description">"Sun's artistry: turning clouds into liquid dreams. Check our weather app for today's masterpiece."</p><br />
      <Link to="/login" className="login-button"> User</Link><br></br>
      <Link to="/adminlogin" className="login-button">Admin</Link>
    </div>
  );
};

export default Cover;


//cover page