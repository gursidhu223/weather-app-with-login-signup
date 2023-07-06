import React from 'react';
import './About.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <p className="about-us__description">Welcome to our weather app! We are dedicated to providing accurate and reliable weather information to our users.</p>
      <p className="about-us__description">Our weather app will create more trust towards your brand and emerge you from competitors.
Clients will have the feeling that you care about them and will be motivated to use your services again. Means what? Right - the next time they’ll book a trip through your agency again. We both know, that repeat customers are the most valuable.</p>
      
      <h2>Our Mission</h2>
      <p className="about-us__mission">In this case, your weather app turns into one of the promotional channels that help you to deal with last-minute offers. Therefore, you’ll be able to increase your sales and are more likely to generate repeat customers.</p>
      <h2>Meet Our Team</h2>
      <div className="team-members">
          <h3>Gurpreet Singh </h3>
          <p className="team-member__role">Weather Expert</p>
          <p className="team-member__description"> I have been studying weather patterns for over 1 years and brings a wealth of knowledge to our team. i ahbve been made this website using some basic knowledge and using this knowlwdge i have created it.</p>
        </div>
      </div>
  );
};

export default AboutUs;
