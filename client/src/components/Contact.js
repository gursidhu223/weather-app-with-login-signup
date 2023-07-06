import React from 'react';
import './Contact.css';

const ContactUsPage = () => {
  return (
    <div className="contact-us-page">
      <h1>Contact Us</h1>
      <p>
        Thank you for using our weather website. If you have any questions, feedback, or need assistance, please feel free to reach out to us using the contact information provided below. We are here to help!
      </p>
      <h3>Contact Information:</h3>
      <p>
        Email: weather@example.com
        <br />
        Phone: 123-456-7890
        <br />
        Address: 123 Main St, City, Country
      </p>
      <h3>Customer Support Hours:</h3>
      <p>
        Monday - Friday: 9:00 AM - 6:00 PM (Local Time)
        <br />
        Saturday - Sunday: Closed
      </p>
      <h3>Feedback and Suggestions:</h3>
      <p>
        We value your feedback and suggestions to improve our weather website. If you have any ideas, feature requests, or general feedback, please send us an email or reach out to us through the contact information provided above. We appreciate your input!
      </p>
    </div>
  );
};

export default ContactUsPage;
