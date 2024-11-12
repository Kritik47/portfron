import React, { useState } from 'react';
import axios from 'axios';

const Appointment = () => {
  const [form, setForm] = useState({
    name: '',
    date: '',
    doctor: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value; // YYYY-MM-DD format
    const [year, month, day] = selectedDate.split('-');
    const formattedDate = `${day}/${month}/${year}`; // day/month/year format
    setForm({
      ...form,
      date: formattedDate
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://kritikhospital.onrender.com/api/apoi', form);
      alert(response.data.msg);

      // Reset form to initial state
      setForm({
        name: '',
        date: '',
        doctor: ''
      });
    } catch (error) {
      console.error('Error booking appointment:', error);
      alert('Error booking appointment. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-200 to-blue-300 p-6 md:p-10 lg:p-20">
      <div className="max-w-3xl mx-auto bg-white shadow-2xl rounded-xl p-8 md:p-12 lg:p-16">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">Book an Appointment</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="border border-gray-300 p-4 w-full rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            required
          />
          <input
            type="date"
            name="date"
            value={form.date ? form.date.split('/').reverse().join('-') : ''} // Convert back to YYYY-MM-DD if date is set
            onChange={handleDateChange}
            className="border border-gray-300 p-4 w-full rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            required
          />
          <select
            name="doctor"
            value={form.doctor}
            onChange={handleChange}
            className="border border-gray-300 p-4 w-full rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            required
          >
            <option value="" disabled>Select Doctor</option>
            <option>Dr. A Kumar</option>
            <option>Dr. B Sharma</option>
          </select>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Book Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
