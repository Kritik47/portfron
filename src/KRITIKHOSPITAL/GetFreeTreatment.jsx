import React, { useState } from 'react';
import axios from 'axios';

const GetFreeTreatment = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [treatment, setTreatment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Make a POST request to the backend API
   const response=   await axios.post('https://kritikhospital.onrender.com/api/freetreat', {
        name,
        email,
        number,
        treatment,
      });
      
      // Clear form fields after successful submission
      setName('');
      setEmail('');
      setNumber('');
      setTreatment('');
      alert(response.data.msg);
    } catch (error) {
      console.error('Error submitting application:', error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-center p-10 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Apply for Free Cancer Treatment</h1>
        <p className="mt-4 text-lg md:text-xl">Fill in the form to apply for free cancer treatment at our hospital.</p>
      </header>

      <section className="mt-10 p-6 bg-white shadow-md rounded-lg max-w-lg mx-auto">
        <h2 className="text-3xl font-semibold text-center text-green-600">Application Form</h2>
        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="number" className="block text-gray-700">Contact Number</label>
            <input
              type="tel"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Enter your contact number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="treatment" className="block text-gray-700">Reason for Treatment</label>
            <textarea
              id="treatment"
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-lg"
              placeholder="Briefly explain your situation"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-6 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Submit Application
          </button>
        </form>
      </section>

      <footer className="mt-10 p-6 text-center bg-gradient-to-l from-blue-600 to-purple-600 text-white">
        <p>&copy; {new Date().getFullYear()} Kritik Bhai Hospital. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default GetFreeTreatment;
