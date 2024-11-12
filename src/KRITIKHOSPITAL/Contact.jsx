import React, { useState } from 'react';
import axios from 'axios';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendButton = async (e) => {
    e.preventDefault();
    const allData = { name, email, message };
    try {
      if (name && email && message) {
        const response = await axios.post("https://kritikhospital.onrender.com/api/contact", allData);
        alert(response.data.msg);

        // Clear form fields after successful submission
        setName('');
        setEmail('');
        setMessage('');
      } else {
        alert("All fields are required");
      }
    } catch (error) {
      console.error("Error posting data:", error);
      alert("There was an error sending your message. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-300 to-purple-300 p-6 md:p-10 lg:p-20">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-lg p-8 md:p-12 lg:p-16 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-purple-800 mb-8">
          Contact Us
        </h1>

        <form className="space-y-6" onSubmit={handleSendButton}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Your Name"
            className="w-full p-3 md:p-4 lg:p-5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500 transition-all duration-300"
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your Email"
            className="w-full p-3 md:p-4 lg:p-5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500 transition-all duration-300"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your Message"
            className="w-full p-3 md:p-4 lg:p-5 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-4 focus:ring-purple-500 transition-all duration-300"
            rows="5"
          ></textarea>
          <button
            type="submit"
            className="w-full py-3 md:py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-lg hover:shadow-xl hover:from-purple-600 hover:to-blue-600 transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-center md:text-left">
          <div className="space-y-4">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">
              <strong>Address:</strong> MUNDA&SAHU AIRPORT ROAD DHAMTARI NCR
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">
              <strong>Phone:</strong> +91 123 456 7890
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-700">
              <strong>Email:</strong> kri@gmail124.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
