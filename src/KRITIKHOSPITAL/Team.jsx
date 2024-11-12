import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const VIPPASS = 10001;

const Team = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get('https://kritikhospital.onrender.com/api/team');
        setDoctors(response.data.teamData || []); // Fallback to an empty array if data is missing
      } catch (error) {
        console.error('Error fetching doctors:', error);
        alert('Unable to fetch doctor data. Please try again later.');
      }
    };

    fetchDoctors();
  }, []);

  const handleAddNewDoctor = () => {
    const VIPInput = prompt('ONLY HOSPITAL MANAGEMENT CAN ACCESS');
    if (VIPPASS === parseInt(VIPInput)) {
      navigate('/teampost');
    } else {
      alert('UNAUTHORIZED ACCESS');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 p-6 md:p-10 lg:p-20">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6 md:p-10 lg:p-12 space-y-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">Our Doctors</h1>
        
        {/* Add New Doctor Button */}
        <div className="text-center">
          <button
            onClick={handleAddNewDoctor}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            Add New Doctor
          </button>
        </div>

        {/* Doctor card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {doctors.length > 0 ? (
            doctors.map((doc) => (
              <div
                key={doc.name}
                className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center space-y-4"
              >
                <img
                  src={doc.image || 'https://via.placeholder.com/150'} // Replace with a valid fallback image URL
                  alt={doc.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover"
                />
                <h2 className="text-xl font-semibold text-gray-800">{doc.name}</h2>
                <p className="text-gray-600">{doc.specialty}</p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 col-span-full">No doctors available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
