import React from "react";
import "./styles/contact.css";

const Contact = ({ isDarkMode }) => {
  return (
    <div className={`contact-container ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <h1>Contact Us</h1>
      <p>
        Have a question, feedback, or just want to say hello? We'd love to hear
        from you! Fill out the form below or reach out via email.
      </p>

      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Enter your name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows="5" placeholder="Enter your message"></textarea>
        </div>
        <button type="submit" className="btn-submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
