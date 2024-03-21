import React, { useState } from "react";
import "./About.css";

function About() {
  const [message, setMessage] = useState("");

  const handleEmailClick = () => {
    const messages = [
      "Thank you for your interest! We'll get back to you shortly.",
      "We appreciate your inquiry. Our team will respond as soon as possible.",
      "Your message has been received. We'll be in touch soon.",
    ];
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);
  };

  return (
    <div className="about page">
      <h3>Kory Plotts</h3>
      <p>
        Welcome to our online organic food store! We are a family-owned business
        dedicated to providing the freshest and highest-quality organic produce
        and products to our customers.
      </p>
      <p>Thank you for choosing our online organic food store.</p>
      <p>Kory Plotts, Founder</p>

      <div className="contact-info">
        <h4>Get in Touch</h4>
        <p>
          We're here to answer any questions you may have about our products or
          services. Feel free to reach out to us via email or phone.
        </p>
        <p>
          Email:{" "}
          <a href="mailto:info@organicfoodstore.com">
            info@organicfoodstore.com
          </a>
        </p>
        <p>Phone: 555-555-5555</p>
        <button className="email-btn" onClick={handleEmailClick}>
          <a href="mailto:info@organicfoodstore.com">Email Us</a>
        </button>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
}

export default About;
