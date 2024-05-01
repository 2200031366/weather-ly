import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import config from '../config';
import './navbar.css'

export default function Home() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get(`${config.url}/viewevents`);
      setEvents(response.data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Places</h1>
      {events.length > 0 ? (
        events.map((event, index) => (
          <Card key={index} style={{ maxWidth: 865, margin: '16px auto' }}>
            <CardActionArea>
              {event.file.endsWith('.jpg') || event.file.endsWith('.jpeg') || event.file.endsWith('.png') ? (
                <CardMedia
                  component="img"
                  height="140"
                  image={`${config.url}/eventimage/${event.file}`}
                  alt="Event"
                />
              ) : (
                <Typography gutterBottom variant="h5" component="div" align="center">
                  Click Here
                </Typography>
              )}
              <CardContent>
                <Typography variant="h5" component="div">
                  Location: {event.location}
                </Typography>
                <Typography variant="h5" component="div">
                  Place: {event.place}
                </Typography>
                <Typography variant="h5" component="div">
                  Season: {event.season}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description: {event.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
      ) : (
        <p>No events found</p>
      )}
    </div>
  );
}
