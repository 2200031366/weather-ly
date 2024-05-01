import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './navbar.css';
import config from '../config'

export default function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    phonenumber: '',
    username: '',
    region: '',
  });

  const [isRegistered, setIsRegistered] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    // Perform signup logic here (for demonstration, just log the form data)
    const { email, password, phonenumber, username, region } = formData;
    const formDataToSend = { email, password, phonenumber, username, region };

    try {
      const response = await axios.post(`${config.url}/insertuser`, formDataToSend);
      if (response.status === 200) {
        // Set isRegistered state to true to display success message
        setIsRegistered(true);
        alert('Successfully registered!');
        setError('');
        // Redirect to login page
        window.location.href = "/login";
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data);
      } else {
        setError('An unexpected error occurred.');
      }
      setMessage('');
    }
  };

  return (
    <div className="signup-container">
      {isRegistered ? (
        <div style={{ maxWidth: "300px", margin: "0 auto" }}>
          <h4 align="center">{message}</h4>
        </div>
      ) : (
        <div style={{ marginBottom: "10px" }}>
          <h3 align="center">SIGNUP🌥️</h3>
          <h4 align="center">{error}</h4>
          <form onSubmit={handleSignup}>
            <div>
              <label>Email:</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" required />
            </div>
            <div>
              <label>Password:</label>
              <input type="password" id="password" value={formData.password} onChange={handleChange} placeholder="Enter your password" required />
            </div>
            <div>
              <label>Phone Number:</label>
              <input type="text" id="phonenumber" value={formData.phonenumber} pattern="[6789][0-9]{9}" onChange={handleChange} placeholder="Enter your phone number (must be 10 digits)" required />
            </div>
            <div>
              <label>Username:</label>
              <input type="text" id="username" value={formData.username} onChange={handleChange} placeholder="Enter your username" required />
            </div>
            <div>
              <label>Region:</label>
              <input type="text" id="region" value={formData.region} onChange={handleChange} placeholder="Enter your region" required />
            </div>
            <button type="submit">Register</button>
          </form>
          <p>Already signed up? <Link to="/login" style={{ color: "red" }}>Login here</Link></p>
        </div>
      )}
    </div>
  );
}
