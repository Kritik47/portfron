import React from "react";
import ReactTyped from 'react-typed';
const Home = () => {
  return (
    <div id="home" className="bg-white text-gray-800 min-h-screen flex flex-col md:flex-row items-center justify-center px-4 py-8">
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0 mt-8 md:mt-0">
        <img
          src="https://i.ibb.co/FKP0P28/Home-Image.jpg" // Replace with your actual image URL
          alt="Kritik Kumar"
          className="w-full max-w-xs md:max-w-[400px] lg:max-w-[400px] rounded-full border-4 border-gray-200 shadow-lg"
        />
      </div>

      {/* Content Section */}
      <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4 py-8">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">
          Welcome to <span className="text-blue-500">Kritik Kumar</span>'s Portfolio
        </h1>
        <ReactTyped
          strings={["I am a web developer"]}
          typeSpeed={50}
          backSpeed={40}
          loop
          cursorChar="."
          className="text-lg md:text-xl mb-8"
        />
        <a
            href="/files/resume.pdf"
          className="bg-gradient-to-r from-blue-400 to-teal-400 hover:from-blue-500 hover:to-teal-500 text-white font-bold py-2 px-4 rounded shadow-lg transition-transform transform hover:scale-105"
          download
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Home;
