import React, { useState } from 'react';
import './navbar.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import config from '../config';

export default function Login({onUserLogin}) 
{
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try 
    {
      const response = await axios.post(`${config.url}/checkuserlogin`, formData);
      if (response.data != null) 
      {
        onUserLogin();

        localStorage.setItem('user', JSON.stringify(response.data));

        navigate("/home");
      } 
      else 
      {
        setMessage("Login Failed")
        setError("")
      }
    } 
    catch (error) 
    {
      setMessage("")
      setError(error.message)
    }
  };

  
  return (
    <div className="login-container">
      <h3 align="center">LOGIN🌞</h3>
      {message ? <h4 align="center">{message}</h4> : <h4 align="center">{error}</h4>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit" className="button">Login</button>
      </form>
      <p style={{ textAlign: 'center' }}>
        Don't have an account? <Link to="/signup" style={{ color: "red" }}>Signup</Link>
      </p>
    </div>
  );
}
