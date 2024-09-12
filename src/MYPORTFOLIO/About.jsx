import React from 'react';

const About = () => {
  return (
    <div id="about" className="bg-white text-gray-800 min-h-screen flex flex-col md:flex-row-reverse items-center justify-center px-4 py-8">
      <div className="md:w-1/2 w-full flex justify-center md:justify-end mb-8 md:mb-0">
        <img
          src="https://i.ibb.co/FKP0P28/Home-Image.jpg" // Replace with your actual image URL
          alt="About Me"
          className="w-full max-w-xs md:max-w-[400px] lg:max-w-[400px] rounded-full shadow-lg border-4 border-gray-200"
        />
      </div>

      <div className="md:w-1/2 w-full flex flex-col items-center md:items-start justify-center text-center md:text-left px-4 py-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-500">
          About Me
        </h2>
        <p className="text-base md:text-lg lg:text-xl mb-4 leading-relaxed">
          Hi, I'm Kritik Kumar, a passionate web developer with expertise in creating dynamic web applications. I enjoy working with modern technologies and continuously improving my skills.
        </p>
        <p className="text-base md:text-lg lg:text-xl leading-relaxed">
          With a strong background in frontend and backend development, I strive to build user-friendly experiences. When I'm not coding, I love exploring new places, reading, and playing video games.
        </p>
      </div>
    </div>
  );
};

export default About;
