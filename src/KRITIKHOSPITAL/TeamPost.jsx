import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const TeamPost = () => {
  const [name, setName] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [image, setImage] = useState(null); // Holds the selected file and then the Cloudinary URL
    const nav=useNavigate();
  const UploadImage = async () => {
    try {
      const formData = new FormData();
      formData.append('file', image);
      formData.append('upload_preset', 'relation');
      formData.append('cloud_name', 'dulq1nkwm');
      const response = await axios.post('https://api.cloudinary.com/v1_1/dulq1nkwm/image/upload', formData);
      setImage(response.data.secure_url);
      alert("image uploaded succesfully")

    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = { name, specialty, image }; 
      const response = await axios.post('https://kritikhospital.onrender.com/api/team', formData);
      console.log('Doctor added:', response.data);
      nav('/team');
    } catch (error) {
      console.error('Error adding doctor:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 to-purple-300 p-4 sm:p-6 md:p-10 lg:p-20">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-blue-600 mb-6 md:mb-8">
          Add a Doctor
        </h1>
        <div className="space-y-4 md:space-y-6">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Doctor's Name"
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-md text-sm md:text-base"
          />
          <input
            type="text"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
            placeholder="Specialty"
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-md text-sm md:text-base"
          />
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])} // Set file directly to 'image' state
            className="w-full p-2 sm:p-3 border border-gray-300 rounded-md text-sm md:text-base"
          />
          <button
            onClick={UploadImage}
            className="w-full p-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300"
          >
            Upload Image
          </button>
          <button
            onClick={handleSubmit}
            className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 mt-2"
          >
            Add Doctor
          </button>
        </div>
      </div>
    </div>
  );
};

export default TeamPost;
