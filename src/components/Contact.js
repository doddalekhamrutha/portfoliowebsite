import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com'; // Import EmailJS

const ContactWrapper = styled.section`
  padding: 2rem;
  max-width: 600px; /* Limit max width of the form */
  margin: 0 auto; /* Center the form horizontally */

  h2 {
    font-size: 2.5rem; /* Increased font size for the title */
    margin-bottom: 1rem; /* Add some space below the title */
    text-align: center; /* Center-align the title */
  }

  form {
    display: flex;
    flex-direction: column; /* Ensures fields are displayed vertically */
    gap: 1.5rem; /* Adds space between form elements */
  }

  input, textarea, button {
    padding: 0.8rem;
    border: 1px solid black; /* Set black border for all fields */
    border-radius: 5px;
  }

  button {
    background: #222;
    color: white;
    cursor: pointer;
    /* Ensure button stays at the bottom */
    align-self: flex-start;
  }

  textarea {
    resize: vertical;
    height: 150px;
  }

  /* Ensure input fields and textarea are 100% width */
  input, textarea {
    width: 100%;
  }
`;

const Contact = () => {
  // Form data state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // EmailJS configuration
    const serviceID = 'service_1pzda06'; // Replace with your EmailJS service ID
    const templateID = 'template_w67z5we'; // Replace with your EmailJS template ID
    const userID = '0dJHHC7_geXesyO4l'; // Replace with your EmailJS user ID (get it from the dashboard)

    // Send email via EmailJS
    emailjs
      .sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        }); // Clear the form after successful submission
      })
      .catch((error) => {
        alert('Error sending message: ' + error.text);
      });
  };

  return (
    <ContactWrapper id="contact">
      <h2>Contact Me</h2>
      <p>Have any questions or want to work together? Reach out to me, and I'll get back to you as soon as possible!</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </ContactWrapper>
  );
};

export default Contact;
