import React, { useEffect, useState } from "react";
import axios from "axios";

const Skill = () => {
  const [ApiFetchData, SetApiData] = useState([]);
  const [showAddSkillForm, setShowAddSkillForm] = useState(false);
  const [skillname, setSkillName] = useState('');
  const [skillimage, setSkillImage] = useState('');

  useEffect(() => {
    async function GetData() {
      try {
        let response = await axios.get("https://portfolioserver-vj1a.onrender.com/skillmyportfolio");
        response = await response.data;
        SetApiData(response.DATA);
      } catch (e) {
        console.log("Client SkillData Fetching Error...");
      }
    }
    GetData();
  }, []);

  const addSkillHandle = async () => {
    try {
      if (skillimage && skillname) {
        const allData = { skillname, skillimage };
        let response = await axios.post("https://portfolioserver-vj1a.onrender.com/skillmyportfolio", allData);
        alert("Skill added successfully!");
        setSkillName('');
        setSkillImage('');
        setShowAddSkillForm(false);
      } else {
        alert("All fields are required.");
      }
    } catch (e) {
      console.error("Error adding skill:", e);
    }
  };

  const handleImage = async () => {
    try {
      if (skillimage) {
        const formData = new FormData();
        formData.append('file', skillimage);
        formData.append('upload_preset', 'relation');
        formData.append('cloud_name', 'dulq1nkwm');
        const response = await axios.post("https://api.cloudinary.com/v1_1/dulq1nkwm/image/upload", formData);
        alert("Image uploaded successfully!");
        setSkillImage(response.data.secure_url);
      } else {
        alert("Please choose an image first.");
      }
    } catch (e) {
      console.error("Error uploading image:", e);
    }
  };

  const Addbu = () => {
    const ID = 10001;
    let m = prompt("Only Owner Can Access");
    m = parseInt(m, 10);
    if (m === ID) {
      setShowAddSkillForm(!showAddSkillForm);
    }
  }

  return (
    <div id="skill" className="bg-gradient-to-r from-blue-100 to-indigo-100 min-h-screen flex flex-col items-center justify-center py-12 px-4">
      <button
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-full hover:from-purple-600 hover:to-blue-600 transition-colors duration-300 mb-8 shadow-lg"
        onClick={Addbu}
      >
        {showAddSkillForm ? "Cancel" : "Add New Skill"}
      </button>

      {showAddSkillForm && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 w-full max-w-md">
          <input
            value={skillname}
            onChange={e => setSkillName(e.target.value)}
            type="text"
            placeholder="Skill Name"
            className="border border-gray-300 rounded-md py-2 px-4 mb-4 w-full focus:ring focus:ring-indigo-200 focus:border-indigo-300"
          />
          <div className="flex flex-row items-center justify-between mb-4">
            <input
              onChange={e => setSkillImage(e.target.files[0])}
              type="file"
              className="border border-gray-300 rounded-md py-2 px-4 w-1/2 mr-2 focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            />
            <button
              onClick={handleImage}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-full hover:from-purple-600 hover:to-blue-600 transition-colors duration-300 w-1/2 shadow-lg"
            >
              Upload Image
            </button>
          </div>
          <button
            onClick={addSkillHandle}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-full hover:from-purple-600 hover:to-blue-600 transition-colors duration-300 w-full shadow-lg"
          >
            Add Skill
          </button>
        </div>
      )}

      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">
          Skills
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ApiFetchData.map((i, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 hover:-translate-y-2 flex flex-col items-center"
            >
              <img
                src={i.skillimage}
                alt={i.skillname}
                className="w-24 h-24 object-cover rounded-full mb-4 border-4 border-blue-300"
              />
              <h2 className="text-xl font-semibold text-gray-700">{i.skillname}</h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
