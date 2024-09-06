import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <div id="contact" className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-12">
      <div className="max-w-2xl px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Contact
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Feel free to reach out to me through the following platforms:
        </p>
        <div className="flex flex-col space-y-4">
          <a
            href="https://linkedin.com/in/kritik-kumar-a01101260"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            <LinkedInIcon className="mr-2" />
            LinkedIn
          </a>
          <a
            href="https://www.instagram.com/kri_munda/?igsh=bzZ4MTk2eHVsZnZm"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            <InstagramIcon className="mr-2" />
            Instagram
          </a>
          <a
            href="https://github.com/Kritik47"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-gradient-to-r from-gray-800 to-black hover:from-gray-900 hover:to-black text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            <GitHubIcon className="mr-2" />
            GitHub
          </a>
          <a
            href="mailto:kritiksahu958958@gmail.com"
            className="flex items-center justify-center bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            <EmailIcon className="mr-2" />
            Email
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
