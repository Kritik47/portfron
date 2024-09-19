import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiseLoader } from "react-spinners"; // Import RiseLoader

const Project = () => {
  const [ApiFetchData, SetApiData] = useState([]);
  const [showAddProjectForm, setShowAddProjectForm] = useState(false);
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [loading, setLoading] = useState(true); // Track loading state

  useEffect(() => {
    async function GetData() {
      try {
        let response = await axios.get("https://myportfolio-server-i9mk.onrender.com/projectmyportfolio");
        response = await response.data;
        SetApiData(response.DATA);
      } catch (e) {
        console.log("Client Project Fetching Error...");
      } finally {
        setLoading(false); // Stop loading once data is fetched
      }
    }
    GetData();
  }, []);

  const handleAddProjectButton = async () => {
    try {
      if (title && image && link) {
        const allData = { title, link, image };
        const response = await axios.post("https://portfolioserver-vj1a.onrender.com/projectmyportfolio", allData);
        console.log(response);
        alert("Project added successfully!");
        setTitle('');
        setLink('');
        setImage('');
        setShowAddProjectForm(false);
      } else {
        alert("All fields are required.");
      }
    } catch (e) {
      console.log("Client Posting Error...");
    }
  };

  const handleImage = async () => {
    try {
      if (image) {
        const formData = new FormData();
        formData.append('file', image);
        formData.append('upload_preset', 'relation');
        formData.append('cloud_name', 'dulq1nkwm');
        const response = await axios.post("https://api.cloudinary.com/v1_1/dulq1nkwm/image/upload", formData);
        setImage(response.data.secure_url);
        console.log(response.data.secure_url);
        alert("Image uploaded successfully!");
      } else {
        alert("Please choose a file.");
      }
    } catch (e) {
      console.error("Error uploading image:", e);
    }
  };

  const Probu = () => {
    const ID = 10001;
    let m = prompt("Only Owner Can Access");
    m = parseInt(m, 10);
    if (m === ID) {
      setShowAddProjectForm(!showAddProjectForm);
    }
  }

  return (
    <div id="project" className="bg-gradient-to-r from-green-100 to-blue-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-8">
        <button
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-full hover:from-purple-600 hover:to-blue-600 transition-colors duration-300 shadow-lg"
          onClick={Probu}
        >
          {showAddProjectForm ? "Cancel" : "Add New Project"}
        </button>
      </div>

      {showAddProjectForm && (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 w-full max-w-md mx-auto">
          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            type="text"
            placeholder="Project Title"
            className="border border-gray-300 rounded-md py-2 px-4 mb-4 w-full focus:ring focus:ring-indigo-200 focus:border-indigo-300"
          />
          <input
            value={link}
            onChange={e => setLink(e.target.value)}
            type="text"
            placeholder="Project Link"
            className="border border-gray-300 rounded-md py-2 px-4 mb-4 w-full focus:ring focus:ring-indigo-200 focus:border-indigo-300"
          />
          <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
            <input
              onChange={e => setImage(e.target.files[0])}
              type="file"
              className="border border-gray-300 rounded-md py-2 px-4 mb-4 sm:mb-0 w-full sm:w-1/2 sm:mr-2 focus:ring focus:ring-indigo-200 focus:border-indigo-300"
            />
            <button
              onClick={handleImage}
              className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-full hover:from-purple-600 hover:to-blue-600 transition-colors duration-300 w-full sm:w-1/2 shadow-lg"
            >
              Upload Image
            </button>
          </div>
          <button
            onClick={handleAddProjectButton}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-2 px-4 rounded-full hover:from-purple-600 hover:to-blue-600 transition-colors duration-300 w-full shadow-lg"
          >
            Add Project
          </button>
        </div>
      )}

      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">
          Projects
        </h1>

        {loading ? (
          <div className="flex justify-center items-center">
            <RiseLoader color={"#4A90E2"} loading={loading} size={20} />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {ApiFetchData.map((project, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 hover:-translate-y-2"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">{project.title}</h2>
                <a
                  href={project.link}
                  className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
