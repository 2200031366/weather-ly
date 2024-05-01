import React, { useState, useRef } from 'react';
import axios from 'axios';
import config from '../config';
import '../main/navbar.css';


export default function AddEvent() {
  const [formData, setFormData] = useState({
    location: '',
    place: '',
    season: '',
    description: '',
    file: null
  });

  const fileInputRef = useRef(null);

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('location', formData.location);
      formDataToSend.append('place', formData.place);
      formDataToSend.append('season', formData.season);
      formDataToSend.append('description', formData.description);
      formDataToSend.append('file', formData.file);

      const response = await axios.post(`${config.url}/createevent`, formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response && response.data) {
        setFormData({
          location: '',
          place: '',
          season: '',
          description: '',
          file: null
        });
        fileInputRef.current.value = '';
        setMessage(response.data);
        setError('');
      } else {
        throw new Error('Invalid response from server');
      }
    } catch (error) {
      setError(error.message);
      setMessage('');
    }
  };

  return (
    <div className="container"> {/* Apply container class */}
      <h3 align="center"><u>Add Place</u></h3>
      {message ? <h4 align="center">{message}</h4> : null}
      {error ? <h4 align="center" style={{ color: 'red' }}>{error}</h4> : null}
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group"> {/* Apply form-group class */}
          <label>Location</label>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div className="form-group"> {/* Apply form-group class */}
          <label>Place</label>
          <input type="text" id="place" value={formData.place} onChange={handleChange} required />
        </div>
        <div className="form-group"> {/* Apply form-group class */}
          <label>Season</label>
          <input type="text" id="season" value={formData.season} onChange={handleChange} required />
        </div>
        <div className="form-group"> {/* Apply form-group class */}
          <label>Description</label>
          <textarea id="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div className="form-group"> {/* Apply form-group class */}
          <label>Image</label>
          <input type="file" id="file" ref={fileInputRef} onChange={handleFileChange} required />
        </div>
        <button type="submit" className="button">Add</button> {/* Apply button class */}
      </form>
    </div>
  );
}
