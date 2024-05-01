import React, { useState } from 'react';
import axios from 'axios'; // Import Axios library
import './navbar.css';
import config from '../config';

function Feedback() {
  const [selectedEmoji, setSelectedEmoji] = useState('');
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);

  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      // Send feedback data to backend API
      const response = await axios.post(`${config.url}/submitfeedback`, { emoji: selectedEmoji });
      console.log('Feedback submission response:', response); // Log the response
      // Feedback submitted successfully
      setFeedbackSubmitted(true);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Handle error if submission fails
    }
  };
  

  return (
    <div className="container">
      <h2>{feedbackSubmitted ? 'Thank You!' : 'Rate our Service'}</h2>
      {feedbackSubmitted ? (
       <p align="center"><strong>"May your day be filled with brightness and joy" 🌞</strong></p>
      ) : (
        <form onSubmit={handleSubmit}>
          
          <div className="emoji-buttons">
            <button
              type="button"
              className={`emoji-btn ${selectedEmoji === '😊' ? 'selected' : ''}`}
              onClick={() => handleEmojiClick('😊')}
            >
              😊
            </button>
            <button
              type="button"
              className={`emoji-btn ${selectedEmoji === '😐' ? 'selected' : ''}`}
              onClick={() => handleEmojiClick('😐')}
            >
              😐
            </button>
            <button
              type="button"
              className={`emoji-btn ${selectedEmoji === '😞' ? 'selected' : ''}`}
              onClick={() => handleEmojiClick('😞')}
            >
              😞
            </button>
          </div>
          <input type="hidden" id="selectedEmoji" name="selectedEmoji" value={selectedEmoji} />
          <div style={{ textAlign: 'center' }}> {/* Center aligns the button */}
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default Feedback;
