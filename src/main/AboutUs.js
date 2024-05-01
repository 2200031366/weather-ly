import React from 'react';
import '../config'
import './navbar.css';


const About = () => {
  return (
    <div className="container">
      <div className="about">
        <h2 className="welcome">Welcome to Weather-ly!🌤️</h2>
        <h3 className="section-title">ABOUT US</h3>
        <p>
          At Weather Whimsy, we're all about bringing a little sunshine (or rain, or snow!) into your day. We believe that checking the weather shouldn't be a mundane task - it should be as delightful as watching clouds drift by on a lazy afternoon.
        </p>
        <h3 className="section-title">Our Story</h3>
        <p>
          Our journey began with a simple idea: to make checking the weather an experience that brings a smile to your face. Tired of dull and uninspired weather apps, we set out to create something different - something that combines accurate forecasts with a sprinkle of charm.
        </p>
        <h3 className="section-title">What Sets Us Apart</h3>
        <p>
          Here at Weather Whimsy, we're not just about numbers and forecasts. We're about infusing a sense of wonder and joy into every weather update. From cheerful animations to quirky weather descriptions, we strive to make every interaction with our app a delightful one.
        </p>
        <h3 className="section-title">Meet Our Team</h3>
        <p>
          Behind the scenes, our team of weather enthusiasts, designers, and developers are working tirelessly to bring you the best possible weather experience. We're passionate about what we do, and we pour our hearts into every pixel and line of code.
        </p>
        <h3 className="section-title">Join Our Community</h3>
        <p>
          We're more than just a weather app; we're a community of weather lovers who believe that even the rainiest days have their own kind of magic. Join us on social media to share your weather adventures, swap storm stories, and bask in the beauty of nature's ever-changing moods.
        </p>
        <h3 className="contact-title">Get in Touch</h3>
        <p>
          Have feedback, suggestions, or just want to say hello? We'd love to hear from you! Drop us a line at hello@weather-ly.com and let us know how we can brighten your day.
        </p>
        <p>Thanks for choosing Weather-ly  where every forecast comes with a sprinkle of sunshine and a dash of whimsy!</p>
      </div>
    </div>
  );
};
    
export default About;

