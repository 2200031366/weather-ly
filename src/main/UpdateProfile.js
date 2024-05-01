import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './profilepage.css';
import config from '../config'

export default function UpdateProfile() {
  const [userData, setuserData] = useState({
    email: '',
    password:'',
    phonenumber: '',
    username: '',
    region: ''
    
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [initialUserData, setInitialUserData] = useState({});

  useEffect(() => {
    const storedUserData = localStorage.getItem('user');
    if (storedUserData) {
      const parsedUserData = JSON.parse(storedUserData);
      setuserData(parsedUserData);
      setInitialUserData(parsedUserData); // Store initial job seeker data
    }
  }, []);

  const handleChange = (e) => {
    setuserData({ ...userData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => 
  {
    e.preventDefault();
    try 
    {
      const updatedData = {};
      for (const key in userData) {
        if (userData[key] !== initialUserData[key] && initialUserData[key] !== '') {
          updatedData[key] = userData[key]; 
        }
      }
      if (Object.keys(updatedData).length !== 0) {
        // There are changes
        updatedData.email = userData.email;
        const response = await axios.put(`${config.url}/updateuserprofile`, updatedData);
        setMessage(response.data);
        setError('');
        const res = await axios.get(`${config.url}/userprofile/${userData.email}`, updatedData)
        localStorage.setItem("user",JSON.stringify(res.data))
      } else {
        // No changes
        setMessage("No Changes in User Profile");
        setError("");
      }
    } 
    catch (error) {
      setError(error.response.data);
      setMessage('');
    }
  };
  
  return (
    <div className="container">
      <h3 align="center"><u>Update Profile</u></h3>
      {message ? <h4 align="center">{message}</h4> : <h4 align="center" color='red'>{error}</h4>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input type="email" id="email" value={userData.email} readOnly />
        </div>
        <div>
          <label>Password</label>
          <input type="password" id="password" value={userData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="number" id="phonenumber" value={userData.phonenumber} onChange={handleChange} required />
        </div>
        <div>
          <label>Username</label>
          <input type="text" id="username" value={userData.username} readOnly />
        </div>
        <div>
          <label>Region</label>
          <input type="text" id="region" value={userData.region} onChange={handleChange} required />
        </div>
        <br/>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
